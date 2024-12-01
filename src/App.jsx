import React, { useState } from "react";
import { fordFulkerson } from "./algorithms/fordFulkerson";
import GraphBuilder from "./components/GraphBuilder";
import Visualizer from "./components/Visualizer";
import Results from "./components/Result";
import Modal from "./components/Modal";


const App = () => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const [maxFlow, setMaxFlow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [source, setSource] = useState("");
  const [sink, setSink] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const calculateMaxFlow = () => {
    const result = fordFulkerson(graph, source, sink);
    setMaxFlow(result);
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Network Flow Visualizer</h1>
      <GraphBuilder setGraph={setGraph} />
      <Visualizer graph={graph} />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded my-4"
        onClick={openModal}
      >
        Calculate Max Flow
      </button>
      {maxFlow !== null && <Results maxFlow={maxFlow} />}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={calculateMaxFlow}
        source={source}
        setSource={setSource}
        sink={sink}
        setSink={setSink}
      />
    </div>
  );
};

export default App;
