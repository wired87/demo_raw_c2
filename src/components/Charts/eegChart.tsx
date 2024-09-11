"use client"
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DataPoint {
  x: number; // Timestamp in milliseconds
  y: number; // EEG value
}

interface Series {
  name: string;
  type: string;
  data: DataPoint[];
}

const RealTimeChart: React.FC<{ data: number[][] }> = ({ data }) => {

// @ts-ignore
  const [series, setSeries] = useState<ApexAxisChartSeries[]>(data.map((_, idx) => ({
    name: `Channel ${idx + 1}`,
    type: 'line',
    data: [] as { x: number; y: number }[]
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      const newDataPoints = data.map((channelData) =>
        channelData.map((value, valueIndex) => ({
          x: new Date().getTime() + (valueIndex * 1000 / channelData.length),
          y: value
        }))
      );
      console.log("newDataPoints", newDataPoints)


      setSeries(prevSeries => prevSeries.map((channel, idx) => ({
        ...channel, // @ts-ignore
        data: [...channel.data, ...newDataPoints[idx]]
      })));
    }, 1);

    return () => clearInterval(interval);
  }, [data]);

  const options: ApexOptions = {
    chart: {
      type: "line",
      animations: { enabled: true },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      tickAmount: 10, // Adjust based on the frequency and range of your data
      labels: {
        formatter: function (val) {
          return new Date(val).toLocaleTimeString(); // Format labels to be more readable
        }
      }
    },
    yaxis: {
      max: 10, // Adjust this based on your data's range
      min: -10,
    },
    colors: ["#3C50E0", "#80CAEE", "#FF5733"], // Colors for each channel
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full pt-30">
      {series.map((item, i) => (
        <ReactApexChart
          options={options}
          series={item}
          type="line"
          height={350}
          width={1000}
        />
        ))}
    </div>
  );
};

export default RealTimeChart;


/*
"use client"
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DataPoint {
  x: number; // Timestamp in milliseconds
  y: number; // EEG value
}

interface Series {
  name: string;
  type: string;
  data: DataPoint[];
}

const RealTimeChart: React.FC<{ data: number[][] }> = ({ data }) => {
  // Initialize series state with multiple lines (one per channel)
  const [series, setSeries] = useState<Series[]>(data.map((_, idx) => ({
    name: `Channel ${idx + 1}`,
    type: 'line',
    data: []
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new data points for each channel from the provided data
      const newDataPoints = data.map((channelData, idx) => channelData.map(value => ({
        x: new Date().getTime(),
        y: value
      })));

      setSeries(prevSeries => prevSeries.map((channel, idx) => {
        const newData = [...channel.data, ...newDataPoints[idx]];
        // Limit data to the last 100 points for real-time performance
        if (newData.length > 100) newData.splice(0, newData.length - 100);
        return { ...channel, data: newData };
      }));
    }, 256); // Assuming this interval makes sense for your data refresh rate

    return () => clearInterval(interval);
  }, [data]); // Monitoring the data prop for changes, which might not be necessary if data is static

  const options: ApexOptions = {
    chart: {
      type: "line",
      animations: { enabled: true },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      max: 10, // Adjust this based on your data's range
      min: -10,
    },
    colors: ["#3C50E0", "#80CAEE", "#FF5733"], // Colors for each channel
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full pt-30">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default RealTimeChart;

 */
