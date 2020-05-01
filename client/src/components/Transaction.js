import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const { deleteTransaction, updateTransaction, getTransaction } = useContext(GlobalContext);
    return (
        <div>
             <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
                {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button><button className="delete-btn edit-btn" onClick={() => updateTransaction(transaction)}>Update</button>
            </li>
            
        </div>
    )
}
