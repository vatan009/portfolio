import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodeStyle = {
  
};

const labelTitleStyle = {
  fontWeight: 600,
  color: "#111827",
  lineHeight: 1.1,
};

const labelDescStyle = {
  color: "#6b7280",
  lineHeight: 1.1,
};

const UpcomingProjects = () => {
  const nodes = [
    {
      id: "0",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>Upcoming Projects</div>
            <div style={labelDescStyle}>Overview</div>
          </div>
        ),
      },
      position: { x: 300, y: 50 },
    },
    {
      id: "1",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>AI Chatbot</div>
            <div style={labelDescStyle}>React & AI</div>
          </div>
        ),
      },
      position: { x: 150, y: 150 },
    },
    {
      id: "2",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>Graph Visualizer</div>
            <div style={labelDescStyle}>DFS/BFS/Dijkstra</div>
          </div>
        ),
      },
      position: { x: 500, y: 200 },
    },
    {
      id: "3",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>Portfolio V2</div>
            <div style={labelDescStyle}>Interactive</div>
          </div>
        ),
      },
      position: { x:150, y: 300 },
    },
    {
      id: "4",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>Stock Tracker</div>
            <div style={labelDescStyle}>Prices</div>
          </div>
        ),
      },
      position: { x: 500, y: 450 },
    },
    {
      id: "5",
      type: "default",
      data: {
        label: (
          <div style={nodeStyle}>
            <div style={labelTitleStyle}>Video Call</div>
            <div style={labelDescStyle}>WebRTC</div>
          </div>
        ),
      },
      position: { x: 150, y: 500 },
    },
  ];

  const edges = [
    { id: "e0-1", source: "0", target: "1", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
    { id: "e0-2", source: "0", target: "2", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
    { id: "e0-3", source: "0", target: "3", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
    { id: "e0-4", source: "0", target: "4", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
    { id: "e0-5", source: "0", target: "5", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 } },
  ];

  return (
    <div style={{ width: "100%", height: "600px", borderRadius: "12px", overflow: "hidden" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap nodeColor="#3b82f6" />
        <Controls />
        <Background color="#e5e7eb" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default UpcomingProjects;
