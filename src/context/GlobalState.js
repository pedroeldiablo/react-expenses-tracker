import React, { createContext, useReducer } from 'react'
import { AppReducer }  from './AppReducer'

//Intial State
const initialState = {
    transactions: [
        { id: 1, text: 'Book', amount: -7.99 },
        { id: 2, text: 'Book', amount: -14.99 },
        { id: 3, text: 'Salary', amount: 2700.99 },
        { id: 4, text: 'OnlyFans', amount: 207.00 },
    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )

}
