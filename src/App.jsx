import React, { useState } from "react";
import GraphBuilder from "./components/GraphBuilder";
import Visualizer from "./components/Visualizer";
import Results from "./components/Result";
import { fordFulkerson } from "./algorithms/fordFulkerson";

const App = () => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const [maxFlow, setMaxFlow] = useState(null);

  const calculateMaxFlow = () => {
    const source = prompt("Enter Source Node ID:");
    const sink = prompt("Enter Sink Node ID:");
    const result = fordFulkerson(graph, source, sink);
    setMaxFlow(result);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Network Flow Visualizer</h1>
      <GraphBuilder setGraph={setGraph} />
      <Visualizer graph={graph} />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded my-4"
        onClick={calculateMaxFlow}
      >
        Calculate Max Flow
      </button>
      {maxFlow !== null && <Results maxFlow={maxFlow} />}
    </div>
  );
};

export default App;
