import React, { useState } from "react";

const GraphBuilder = ({ setGraph }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [capacity, setCapacity] = useState("");

  const addNode = () => {
    const nodeId = nodes.length + 1;
    setNodes([...nodes, { id: nodeId, label: `Node ${nodeId}` }]);
  };

  const addEdge = () => {
    if (source && target && capacity) {
      setEdges([
        ...edges,
        { source, target, capacity: parseInt(capacity) },
      ]);
      setSource(""); // Reset the source field
      setTarget(""); // Reset the target field
      setCapacity(""); // Reset the capacity field
    } else {
      alert("Please fill all edge fields.");
    }
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
          <input
            type="number"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border px-2 py-1 mx-2"
          />
        </label>
        <label>
          Target:
          <input
            type="number"
            id="target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="border px-2 py-1 mx-2"
          />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="border px-2 py-1 mx-2"
          />
        </label>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={addEdge}
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

      <div>
        <h3 className="text-xl font-semibold">Nodes:</h3>
        <ul>
          {nodes.map((node) => (
            <li key={node.id}>{node.label}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold">Edges:</h3>
        <ul>
          {edges.map((edge, index) => (
            <li key={index}>
              {`From Node ${edge.source} to Node ${edge.target}, Capacity: ${edge.capacity}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraphBuilder;
