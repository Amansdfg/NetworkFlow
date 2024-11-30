export const fordFulkerson = (graph, source, sink) => {
    let maxFlow = 0;
  
    const residual = {};
    graph.edges.forEach((edge) => {
      residual[`${edge.source}-${edge.target}`] = edge.capacity;
    });
  
    const bfs = () => {
      const visited = new Set();
      const queue = [source];
      const parent = {};
  
      while (queue.length > 0) {
        const node = queue.shift();
        if (node === sink) return parent;
  
        graph.nodes.forEach(({ id }) => {
          const edgeKey = `${node}-${id}`;
          if (
            !visited.has(id) &&
            residual[edgeKey] &&
            residual[edgeKey] > 0
          ) {
            visited.add(id);
            queue.push(id);
            parent[id] = node;
          }
        });
      }
      return null;
    };
  
    let path = bfs();
    while (path) {

      let flow = Infinity;
      let node = sink;
      while (node !== source) {
        const prev = path[node];
        flow = Math.min(flow, residual[`${prev}-${node}`]);
        node = prev;
      }
  
      node = sink;
      while (node !== source) {
        const prev = path[node];
        residual[`${prev}-${node}`] -= flow;
        residual[`${node}-${prev}`] = (residual[`${node}-${prev}`] || 0) + flow;
        node = prev;
      }
  
      maxFlow += flow;
      path = bfs();
    }
  
    return maxFlow;
  };
  