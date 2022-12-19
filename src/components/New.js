import React, {useState} from "react";


function NewExpense(props) {

  const [inputs, setInputs] = useState({
    title: "",
    amount: "",
    date: ""
  })

  function titleHandler(event) {
    setInputs(prevstate => { 
      return {...prevstate, title: event.target.value};
    })
  }

  function amountHandler(event) {
    setInputs(prevstate => {
      return {...prevstate, amount: event.target.value}
    })
  }

  function dateHandler(event) {

    setInputs(prevstate => {
      return {...prevstate, date: event.target.value}
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    const addedExpense = {
      title: inputs.title,
      amount: +inputs.amount,
      date: new Date(inputs.date)
    };

    props.onTransferExpense(addedExpense);

    setInputs({
      title: "",
      amount: "",
      date: ""
    });

  }

  return (
    <div className="new-expense-box">
      <form onSubmit={handleSubmit}>
        <div className="new-expense-form">
          <div>
            <label>Title</label>
            <input onChange={titleHandler} value={inputs.title} type="text"></input>
          </div>
          <div>
            <label>Amount</label>
            <input onChange={amountHandler} value={inputs.amount} type="number" min="0.1" step="0.1"></input>
          </div>
          <div>
            <label>Date</label>
            <input onChange={dateHandler} value={inputs.date} type="date" min="2019-01-01" max="2022-12-31"></input>
          </div>
        </div>
        <div className="new-expense-action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default NewExpense;
