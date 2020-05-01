import React, { useContext } from 'react'
import useToggleState from "../hooks/useToogleState";
import { UpdateTransaction } from './UpdateTransaction'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const [isEditing, toggle] = useToggleState(false);
    const sign = transaction.amount < 0 ? '-' : '+'
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div>
            
            {isEditing ? (
            <UpdateTransaction transaction={transaction} toggleEditForm={toggle} />) : ( <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text} <span>{sign}£{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button><button className="edit-btn" onClick={toggle}>Update</button>
        </li>) }
            
        </div>
    )
}
