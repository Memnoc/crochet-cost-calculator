import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayResult from "./components/DisplayResult";
import { calculatePrice } from "./utils/calculatePrice";
import { InputData } from "./types/types.ts";
import "./App.css";

const App: React.FC = () => {
  const [result, setResult] = useState({
    totalCost: 0,
    materialCost: 0,
    laborCost: 0,
    profit: 0,
    sellingPrice: 0,
    profitPercentage: 0,
  });

  const handleCalculation = (inputData: InputData) => {
    const calculationResult = calculatePrice(inputData);
    setResult(calculationResult);
  };

  return (
    <div>
      <h1>Crochet Product Cost Calculator</h1>
      <InputForm onSubmit={handleCalculation} />
      <DisplayResult result={result} />
    </div>
  );
};

export default App;
