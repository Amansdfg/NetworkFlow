import ReactFlow, { Background, Controls } from "react-flow-renderer";
const Visualizer = ({ graph, setGraph }) => {
    const onNodesChange = (changes) => {
      setGraph((prevGraph) => ({
        ...prevGraph,
        nodes: prevGraph.nodes.map((node) => {
          const change = changes.find((ch) => ch.id === node.id);
          return change ? { ...node, ...change } : node;
        }),
      }));
    };
  
    const nodes = graph.nodes.map((node) => ({
      id: node.id.toString(),
      data: { label: node.label },
      position: node.position || { x: Math.random() * 300, y: Math.random() * 300 },
    }));
  
    const edges = graph.edges.map((edge, index) => ({
      id: `e${edge.source}-${edge.target}-${index}`,
      source: edge.source.toString(),
      target: edge.target.toString(),
      label: `Cap: ${edge.capacity}`,
      animated: true,
    }));
  
    return (
      <div className="h-96 border">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          nodesDraggable
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  };
  
  export default Visualizer;