import React from "react";
import incomePic from "../../assets/images/income.png";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "13/3/23", id: "1" },
    { amount: 560, date: "18/2/23", id: "2" },
    { amount: 980, date: "25/1/23", id: "3" },
  ];

  const incomeComponent = transactionsData.map((data) => {
    return (
      <div key={data.id} className="income-component">
        <h2>${data.amount}</h2>
        <span>{data.date}</span>
      </div>
    );
  });

  return (
    <div className="income">
      <h2>Income</h2>
      <h3>
        Last <span>30 days</span>
      </h3>
      <h1>$2,260</h1>
      <img src={incomePic} alt="income" />
      <div className="income-heading">
        <h3>Your transactions ({transactionsData.length})</h3>
        <span>
          Last <span>30 days</span>
        </span>
      </div>
      {incomeComponent}
    </div>
  );
}
