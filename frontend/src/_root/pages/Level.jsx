import React, { useState } from "react";
import StagesCard from "../../components/cards/StagesCard";

const stages = [
  {
    stage: "Standard",
    level: 1,
    registerWith: 16000,
    referralMax: 6,
    grossEarning: 96000,
    splitRule: "50%",
    commissionPercent: 10,
    commissionAmount: 9600,
    adFee: 5000,
    rewards: ["Package"],
    takeHomeFee: 33400,
  },
  {
    stage: "Standard",
    level: 2,
    registerWith: 48000,
    referralMax: 6,
    grossEarning: 288000,
    commissionPercent: 10,
    commissionAmount: 28800,
    newAccounts: 6,
    newAccountCost: 96000,
    upgradeTo: "Bronze",
    adFee: 5000,
    takeHomeFee: 58200,
    rewards: ["Package"],
  },
  {
    stage: "Bronze",
    level: 1,
    registerWith: 100000,
    referralMax: 6,
    grossEarning: 600000,
    splitRule: "50%",
    commissionPercent: 10,
    commissionAmount: 60000,
    adFee: 5000,
    packageFee: 40000,
    takeHomeFee: 195000,
  },
  {
    stage: "Bronze",
    level: 2,
    registerWith: 300000,
    referralMax: 6,
    grossEarning: 1800000,
    commissionPercent: 10,
    commissionAmount: 180000,
    newAccounts: 6,
    newAccountCost: 96000,
    upgradeTo: "Silver",
    adFee: 180000,
    packageFee: 200000,
    takeHomeFee: 644000,
  },
  {
    stage: "Silver",
    level: 1,
    registerWith: 500000,
    referralMax: 6,
    grossEarning: 3000000,
    splitRule: "50%",
    commissionPercent: 10,
    commissionAmount: 300000,
    adFee: 5000,
    packageFee: 300000,
    takeHomeFee: 895000,
  },
  {
    stage: "Silver",
    level: 2,
    registerWith: 1500000,
    referralMax: 6,
    grossEarning: 9000000,
    commissionPercent: 10,
    commissionAmount: 900000,
    newAccounts: 6,
    newAccountCost: 96000,
    upgradeTo: "Gold",
    adFee: 180000,
    packageFee: 800000,
    takeHomeFee: 3024000,
  },
  {
    stage: "Gold",
    level: 1,
    registerWith: 4000000,
    referralMax: 6,
    grossEarning: 24000000,
    splitRule: "50%",
    commissionPercent: 10,
    commissionAmount: 2400000,
    adFee: 5000,
    packageFee: 3000000,
    takeHomeFee: 6595000,
  },
  {
    stage: "Gold",
    level: 2,
    registerWith: 12000000,
    referralMax: 6,
    grossEarning: 72000000,
    commissionPercent: 10,
    commissionAmount: 7200000,
    newAccounts: 6,
    newAccountCost: 96000,
    adFee: 180000,
    packageFee: 10000000,
    rewards: ["Car"],
    carValue: 10000000,
    takeHomeFee: 44524000,
  },
];

const Level = () => {
  const refBaseLink =
    import.meta.env.REF_BASE_LINK || "https://blue-haven-gamma.vercel.app/sign-up";

  const [currentLevel, setCurrentLevel] = useState({
    type: "Gold",
    level: 1,
  });

  return (
    <section>
      <h1 className="text-2xl font-bold">Stage</h1>
      <div className="pt-5 space-y-5">
        {stages.map((item, index) => (
          <StagesCard key={index} details={item} />
        ))}
      </div>
    </section>
  );
};

export default Level;
