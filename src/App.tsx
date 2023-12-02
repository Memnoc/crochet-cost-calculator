import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DisplayResult from "./components/DisplayResult";
import { calculatePrice } from "./utils/calculatePrice";
import "./App.css";

type InputData = {
  timeTaken: number;
  hourlyRate: number;
  yarnBallWeight: number;
  yarnBallPrice: number;
  yarnUsed: number;
  accessoryCost: number;
  miscCost: number;
};

const App: React.FC = () => {
  const [result, setResult] = useState({
    totalCost: 0,
    materialCost: 0,
    laborCost: 0,
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
