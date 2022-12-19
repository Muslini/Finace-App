import React from "react";
import Chartbar from "./Chartbar";

function Chart(props) {
  const expe = props.neededYear

  const dataPoints= [
    {label: "Jan", value: 0},
    {label: "Feb", value: 0},
    {label: "Mar", value: 0},
    {label: "Apr", value: 0},
    {label: "May", value: 0},
    {label: "Jun", value: 0},
    {label: "Jul", value: 0},
    {label: "Aug", value: 0},
    {label: "Sep", value: 0},
    {label: "Oct", value: 0},
    {label: "Nov", value: 0},
    {label: "Dec", value: 0},
  ]

  expe.forEach(element => {
    const month = element.date.getMonth();
    dataPoints[month].value += element.amount;
  });

  const  allAmount = expe.map(each=> {
      return each.amount
    });

  const maxAmount = allAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  function showdata(doc) {
    return <Chartbar 
      key={doc.label}
      value={doc.value}
      maxAmount={maxAmount}
      label={doc.label}
    />
  };

  return (
    <div className="chart-box">
      {dataPoints.map(showdata)}
    </div>
  );
}

export default Chart;
