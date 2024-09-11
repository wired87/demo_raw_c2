"use client"
/*
import { useEffect, useRef, useState } from "react";
import RealTimeChart from "@/components/Charts/eegChart";
import {getSynthDataAllChannels} from "@/lib/brainData/syntheticStream";


const getRandomColor = (index: number) => {
  const colors = ['red', 'blue', 'green', 'orange', 'purple', 'brown', 'pink'];
  return colors[index % colors.length]; // Cycles through the color list
};

interface DataPoint {
  x: Date;
  y: number;
}

// Define the structure for each channel's data
interface ChannelData {
  x: Date[];
  y: number[];
}

const EEGMain = () => {
  const socketRef = useRef<WebSocket | null>(null);
  const [eegData, setEEGData] = useState<number[][]>([]);
  const [streamData, setStreamData] = useState<any>([]);

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:8000/ws/some_endpoint/');

    socketRef.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("BACKEND DATA:", data.data);
      setEEGData(data.data);
    };

    socketRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };
    const intervalId = setInterval(() => {
      if (socketRef.current?.readyState === WebSocket.OPEN) {
        const eegData = getSynthDataAllChannels();
        socketRef.current.send(JSON.stringify({ eegData }));
      }
    }, 256);

    return () => {
      clearInterval(intervalId);
      socketRef.current?.close();
    };

  }, []);
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoints = eegData.map((item, idx) =>
        item.map((value, valueIndex) => ({
          x: new Date().getTime() + (valueIndex * 1000 / item.length),
          y: value
        }))
      );

      console.log("newDataPoints", newDataPoints)

      setStreamData(prevSeries => prevSeries.map((channel, idx) => ({
        ...channel,
        data: [...channel.data, ...newDataPoints[idx]]
      })));
    }, 1);
    return () => clearInterval(interval);
  }, [eegData]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[1000px] w-full pt-30">
      <RealTimeChart data={eegData}/>
    </section>
  );
};

export default EEGMain;
*/
