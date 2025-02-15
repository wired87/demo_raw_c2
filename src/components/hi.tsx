import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function GraphCell() {
  const cellRef = useRef()

  // Animate rotation
  useFrame(() => {
    cellRef.current.rotation.y += 0.003
    cellRef.current.rotation.x += 0.001
  })

  // Generate random lines (graph edges)
  const lines = useMemo(() => {
    const group = new THREE.Group()
    const material = new THREE.LineBasicMaterial({ color: 'white' })
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.BufferGeometry()
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      )
      geometry.setFromPoints([start, end])
      const line = new THREE.Line(geometry, material)
      group.add(line)
    }
    return group
  }, [])

  return (
    <group ref={cellRef}>
      {/* “Cell” sphere */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="#88ccee" wireframe />
      </mesh>
      {/* Graph lines inside the cell */}
      <primitive object={lines} />
    </group>
  )
}

function AtomRings() {
  const ringRef = useRef()
  // Spin rings
  useFrame(() => {
    ringRef.current.rotation.y += 0.01
  })

  return (
    <group ref={ringRef}>
      {[2.5, 2.8, 3.1].map((radius, idx) => (
        <mesh key={idx} rotation={[Math.PI / (2 + idx), 0, 0]}>
          <torusGeometry args={[radius, 0.03, 16, 100]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  )
}

export default function Atom() {
  return (
    <Canvas>
      <color attach="background" args={['#000']} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <GraphCell />
      <AtomRings />
    </Canvas>
  )
}
