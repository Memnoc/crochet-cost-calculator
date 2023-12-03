import { InputData } from "../types/types.ts";

export const calculatePrice = ({
  timeTaken,
  hourlyRate,
  yarnBallWeight,
  yarnBallPrice,
  yarnUsed,
  accessoryCost,
  miscCost,
  profitPercentage,
}: InputData): {
  totalCost: number;
  materialCost: number;
  laborCost: number;
  profitPercentage: number;
  sellingPrice: number;
  profit: number;
} => {
  const materialCost =
    yarnBallWeight > 0 ? (yarnBallPrice / yarnBallWeight) * yarnUsed : 0;
  const laborCost = (hourlyRate / 60) * timeTaken;
  const totalCost = materialCost + laborCost + accessoryCost + miscCost;
  profitPercentage = !isNaN(profitPercentage) ? profitPercentage : 0;
  const profit = (totalCost * profitPercentage) / 100;
  const sellingPrice = totalCost + profit;
  return {
    totalCost,
    materialCost,
    laborCost,
    sellingPrice,
    profitPercentage,
    profit,
  };
};
