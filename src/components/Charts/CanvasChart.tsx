// Modify EEGCanvasChart to expect 1D array (number[])
import React, {useEffect, useRef} from "react";

interface EEGCanvasChartProps {
  eegData: number[];
}

const EEGCanvasChart: React.FC<EEGCanvasChartProps> = ({ eegData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.strokeStyle = '#ff0000';  // Example color

    eegData.forEach((value, index) => {
      const x = (index / eegData.length) * canvas.width;
      const y = (1 - (value + 1) / 2) * canvas.height;  // Assuming normalized data (-1 to 1)
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }, [eegData]);

  return <canvas ref={canvasRef} width={800} height={400} />;
};

export default EEGCanvasChart;
