import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const UpdateTransaction = ({transaction, toggleEditForm}) => {
    const [text, setText] = useState(transaction.text);
    const [amount, setAmount] = useState(transaction.amount);

    const { updateTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
       transaction = {
           ...transaction,
            text,
            amount: +amount
      }

      updateTransaction(transaction);
      toggleEditForm();
    }

    return (
        <>
        <h3>Update transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Update transaction</button>
        </form>
            
        </>
    )
}
