import React from "react";

type DisplayResultProps = {
  result: {
    totalCost: number;
    materialCost: number;
    laborCost: number;
  };
};

const DisplayResult: React.FC<DisplayResultProps> = ({ result }) => {
  return (
    <div>
      <div>Total Cost: €{result.totalCost.toFixed(2)}</div>
      <div>Material Cost: €{result.materialCost.toFixed(2)}</div>
      <div>Labor Cost: €{result.laborCost.toFixed(2)}</div>
    </div>
  );
};

export default DisplayResult;
