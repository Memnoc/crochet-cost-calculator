import React, { useState } from "react";

type InputData = {
  timeTaken: number;
  hourlyRate: number;
  yarnBallWeight: number;
  yarnBallPrice: number;
  yarnUsed: number;
  accessoryCost: number;
  miscCost: number;
  profitPercentage: number;
};

type InputFormProps = {
  onSubmit: (data: InputData) => void;
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [timeTaken, setTimeTaken] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [yarnBallWeight, setYarnBallWeight] = useState("");
  const [yarnBallPrice, setYarnBallPrice] = useState("");
  const [yarnUsed, setYarnUsed] = useState("");
  const [accessoryCost, setAccessoryCost] = useState("");
  const [miscCost, setMiscCost] = useState("");
  const [profitPercentage, setProfitPercentage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      timeTaken: parseFloat(timeTaken) || 0,
      hourlyRate: parseFloat(hourlyRate) || 0,
      yarnBallWeight: parseFloat(yarnBallWeight) || 0,
      yarnBallPrice: parseFloat(yarnBallPrice) || 0,
      yarnUsed: parseFloat(yarnUsed) || 0,
      accessoryCost: parseFloat(accessoryCost) || 0,
      miscCost: parseFloat(miscCost) || 0,
      profitPercentage: parseFloat(profitPercentage) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Time Taken (minutes)"
        value={timeTaken}
        onChange={(e) => setTimeTaken(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hourly Rate (€/hour)"
        value={hourlyRate}
        onChange={(e) => setHourlyRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Yarn Ball Weight (grams)"
        value={yarnBallWeight}
        onChange={(e) => setYarnBallWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Yarn Ball Price (€)"
        value={yarnBallPrice}
        onChange={(e) => setYarnBallPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Yarn Used per Doll (grams)"
        value={yarnUsed}
        onChange={(e) => setYarnUsed(e.target.value)}
      />
      <input
        type="number"
        placeholder="Accessory Cost"
        value={accessoryCost}
        onChange={(e) => setAccessoryCost(e.target.value)}
      />
      <input
        type="number"
        placeholder="Miscellaneous Cost"
        value={miscCost}
        onChange={(e) => setMiscCost(e.target.value)}
      />
      <input
        type="number"
        placeholder="How much profit in %"
        value={profitPercentage}
        onChange={(e) => setProfitPercentage(e.target.value)}
      />
      <button type="submit">Calculate Cost</button>
    </form>
  );
};

export default InputForm;
