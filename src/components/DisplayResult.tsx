import React from "react";

type DisplayResultProps = {
  result: {
    totalCost: number;
    materialCost: number;
    laborCost: number;
    profitPercentage: number;
    sellingPrice: number;
    profit: number;
  };
};

const DisplayResult: React.FC<DisplayResultProps> = ({ result }) => {
  return (
    <div>
      <div>Total Cost: €{result.totalCost.toFixed(2)}</div>
      <div>Material Cost: €{result.materialCost.toFixed(2)}</div>
      <div>Labor Cost: €{result.laborCost.toFixed(2)}</div>
      {result.profitPercentage && (
        <div>Profit %: {result.profitPercentage.toFixed(2)}</div>
      )}

      <div>Final Selling Price: €{result.sellingPrice.toFixed(2)}</div>
    </div>
  );
};

export default DisplayResult;
