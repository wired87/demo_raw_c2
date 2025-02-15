"use client"

/**
 * Frontend direkt auf KI asllegen -> nicht mehr selbst services raussuchen sondern einfach sagen was man will,
 * daten (zB Bilder) providen, KI bedient programme
 */


import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Input,
  Textarea,
} from "@heroui/react";
import { saveAs } from "file-saver";

// Items list
const items = [
  {
    checked: false,
    title: "Neural Dendrite Extension",
    image: "/images/dendrite_extension.png",
    category: "Neural-Like Functions",
    description: "Allows the synthetic cell to extend dendrite-like structures for signal transmission, mimicking neuronal communication."
  },
  {
    checked: false,
    title: "Autonomous Cell Duplication",
    image: "/images/cell_duplication.png",
    category: "Reproduction",
    description: "Enables the synthetic cell to undergo controlled self-replication using synthetic gene circuits, avoiding mutation accumulation."
  },
  {
    checked: false,
    title: "Cell Merging & Hybridization",
    image: "/images/cell_merging.png",
    category: "Structural Adaptation",
    description: "Grants the ability to merge with other compatible synthetic cells, allowing networked functions and resource sharing."
  },
  {
    checked: false,
    title: "Bioluminescent Signal Emission",
    image: "/images/bioluminescence.png",
    category: "Communication",
    description: "Adds engineered luciferase proteins that enable cells to emit light, allowing real-time monitoring of their status."
  },
  {
    checked: false,
    title: "Memory-Storing Biofilm Layer",
    image: "/images/biofilm_memory.png",
    category: "Computational Functions",
    description: "Develops a bacterial-like biofilm that records environmental changes, storing simple memory and chemical history."
  },
  {
    checked: false,
    title: "Electrogenic Ion Channel Integration",
    image: "/images/ion_channel.png",
    category: "Bioelectricity",
    description: "Introduces voltage-gated ion channels, enabling controlled bioelectric signaling and interactions with neural networks."
  },
  {
    checked: false,
    title: "Mitochondria-Inspired Energy Factory",
    image: "/images/energy_factory.png",
    category: "Energy Harvesting",
    description: "Implements a mitochondria-like organelle for ATP production using a synthetic electron transport chain, ensuring sustained power supply."
  },
  {
    checked: false,
    title: "Programmable Protein Secretion",
    image: "/images/protein_secretion.png",
    category: "Functional Output",
    description: "Allows the cell to produce and secrete specific proteins on demand, enabling regenerative medicine or biosensor applications."
  }
];


export default function TestSection() {
  const [functions, setFunctions] = useState([]); // Selected functions
  const [response, setResponse] = useState({}); // Stores responses for each function
  const [description, setDescription] = useState(""); // Current input description

  // Add a function to the selected list
  const updateFunctions = (newItem) => {
    if (!functions.some((item) => item.title === newItem.title)) {
      setFunctions([...functions, newItem]);
    }
  };

  // Handle description input change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // Save response for a specific function
  const saveResponse = (funcTitle) => {
    setResponse({ ...response, [funcTitle]: description });
    setDescription(""); // Clear input
  };

  // Export responses to a JSON file
  const exportData = () => {
    const data = JSON.stringify(response, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    saveAs(blob, "functions_responses.json");
  };

  return (
    <div className="container mx-auto p-4">
      {/* Top Buttons Section */}
      <div className="flex gap-4 mb-4">
        <Button onPress={() => alert("Start clicked")}>Start</Button>
        {functions.map((func, index) => (
          <Button key={index} variant="solid" onPress={() => saveResponse(func.title)}>
            {func.title}
          </Button>
        ))}
      </div>

      {/* Response Section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="Input for description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <div className="mt-4">
            {functions.map((func, index) => (
              <div key={index} className="mb-4">
                <h3>{func.title}</h3>
                <Textarea
                  value={response[func.title] || ""}
                  placeholder={`Response for ${func.title}`}
                  onChange={(e) => setResponse({ ...response, [func.title]: e.target.value })}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Functions Section */}
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Card
              key={index}
              className="max-w-[200px] cursor-pointer"
              onPress={() => updateFunctions(item)}
            >
              <CardHeader className="flex items-center gap-3">
                <Image src={item.image} alt={item.title} width={40} height={40} />
                <div>
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Export Button */}
      <div className="mt-6">
        <Button variant="solid" color="danger" onPress={exportData}>
          Export
        </Button>
      </div>
    </div>
  );
}
