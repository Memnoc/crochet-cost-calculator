type InputData = {
  timeTaken: number;
  hourlyRate: number;
  yarnBallWeight: number;
  yarnBallPrice: number;
  yarnUsed: number;
  accessoryCost: number;
  miscCost: number;
};

export const calculatePrice = ({
  timeTaken,
  hourlyRate,
  yarnBallWeight,
  yarnBallPrice,
  yarnUsed,
  accessoryCost,
  miscCost,
}: InputData): {
  totalCost: number;
  materialCost: number;
  laborCost: number;
} => {
  const materialCost =
    yarnBallWeight > 0 ? (yarnBallPrice / yarnBallWeight) * yarnUsed : 0;
  const laborCost = (hourlyRate / 60) * timeTaken;
  const totalCost = materialCost + laborCost + accessoryCost + miscCost;

  return { totalCost, materialCost, laborCost };
};
