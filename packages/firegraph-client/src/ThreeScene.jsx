/**
 * Three.js knowledge-graph viewer.
 *
 * Prompt: within gui npm install firegraph-client — replace local bb_front
 * graph viewer with wired87/bb_front ThreeScene.
 */
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { getEdgeColor } from "./get_color.js";

export function ThreeScene({ nodes, edges, onNodeClick, style }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const animationIdRef = useRef(0);
  const nodeHitboxesRef = useRef(new Map());
  const visibleNodesRef = useRef(new Map());
  const currentlyHovered = useRef(null);
  const onNodeClickRef = useRef(onNodeClick);
  onNodeClickRef.current = onNodeClick;

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    controlsRef.current = controls;

    const onResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const getMousePos = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;
    };

    const onCanvasClick = (event) => {
      event.preventDefault();
      getMousePos(event);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        Array.from(nodeHitboxesRef.current.values())
      );
      if (intersects.length > 0) {
        const nodeId = intersects[0].object.userData.id;
        onNodeClickRef.current?.(nodeId);
      }
    };

    const onMouseMove = (event) => {
      getMousePos(event);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        Array.from(nodeHitboxesRef.current.values())
      );
      if (intersects.length > 0) {
        const hoveredNodeId = intersects[0].object.userData.id;
        if (currentlyHovered.current !== hoveredNodeId) {
          if (currentlyHovered.current) {
            const oldNode = visibleNodesRef.current.get(currentlyHovered.current);
            if (oldNode) oldNode.scale.set(1, 1, 1);
          }
          const newNode = visibleNodesRef.current.get(hoveredNodeId);
          if (newNode) newNode.scale.set(1.5, 1.5, 1.5);
          currentlyHovered.current = hoveredNodeId;
          canvas.style.cursor = "pointer";
        }
      } else {
        if (currentlyHovered.current) {
          const oldNode = visibleNodesRef.current.get(currentlyHovered.current);
          if (oldNode) oldNode.scale.set(1, 1, 1);
        }
        currentlyHovered.current = null;
        canvas.style.cursor = "default";
      }
    };

    canvas.addEventListener("click", onCanvasClick, false);
    canvas.addEventListener("mousemove", onMouseMove, false);

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      scene.rotation.y += 0.002;
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("click", onCanvasClick, false);
      canvas.removeEventListener("mousemove", onMouseMove, false);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !nodes || !edges) return;

    while (scene.children.length > 0) {
      const obj = scene.children[0];
      if (obj.isGroup) {
        obj.children.forEach((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      } else {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      }
      scene.remove(obj);
    }
    nodeHitboxesRef.current.clear();
    visibleNodesRef.current.clear();

    const nodePositions = new Map(
      nodes.map((node) => [node.id, new THREE.Vector3(...node.pos)])
    );

    nodes.forEach((item) => {
      const pos = nodePositions.get(item.id);
      if (!pos) return;
      const group = new THREE.Group();
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: item.color })
      );
      group.add(cube);
      const hitbox = new THREE.Mesh(
        new THREE.BoxGeometry(4, 4, 4),
        new THREE.MeshBasicMaterial({ visible: false, depthWrite: false })
      );
      hitbox.userData = { id: item.id };
      group.add(hitbox);
      group.position.copy(pos);
      scene.add(group);
      visibleNodesRef.current.set(item.id, cube);
      nodeHitboxesRef.current.set(item.id, hitbox);
    });

    edges.forEach(({ src, trgt }) => {
      const start = nodePositions.get(src);
      const end = nodePositions.get(trgt);
      if (start && end) {
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([start, end]),
          new THREE.LineBasicMaterial({ color: getEdgeColor() })
        );
        scene.add(line);
      }
    });
  }, [nodes, edges]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", ...style }}
    />
  );
}
