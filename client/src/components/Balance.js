import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/formatNumber'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    let total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const sign = total < 0 ? '-' : '+'
    total = Math.abs(total)
    total = numberWithCommas(+total);
   


    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{sign}£{total ? total : 0}</h1>
            
        </>
    )
}
