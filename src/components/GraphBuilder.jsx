import React, { useState } from "react";

const GraphBuilder = ({ setGraph }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNode = () => {
    const nodeId = nodes.length + 1;
    setNodes([...nodes, { id: nodeId, label: `Node ${nodeId}` }]);
  };

  const addEdge = (source, target, capacity) => {
    setEdges([...edges, { source, target, capacity }]);
  };

  const handleCreateGraph = () => {
    setGraph({ nodes, edges });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Graph Builder</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded my-2"
        onClick={addNode}
      >
        Add Node
      </button>

      <div>
        <label>
          Source:
          <input type="number" id="source" className="border px-2 py-1 mx-2" />
        </label>
        <label>
          Target:
          <input type="number" id="target" className="border px-2 py-1 mx-2" />
        </label>
        <label>
          Capacity:
          <input type="number" id="capacity" className="border px-2 py-1 mx-2" />
        </label>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const source = document.getElementById("source").value;
            const target = document.getElementById("target").value;
            const capacity = document.getElementById("capacity").value;
            addEdge(source, target, capacity);
          }}
        >
          Add Edge
        </button>
      </div>

      <button
        className="bg-purple-500 text-white px-4 py-2 rounded my-4"
        onClick={handleCreateGraph}
      >
        Create Graph
      </button>
    </div>
  );
};

export default GraphBuilder;
