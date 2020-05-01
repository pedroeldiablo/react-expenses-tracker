import React, { createContext, useReducer } from 'react'
import { AppReducer }  from './AppReducer'
import axios from 'axios'

//Intial State
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    async function getTransactions() {
        try {
            const res = await axios.get('api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        
        }
    }

    async function getTransaction(id) {
      console.log({id});
      try {
          console.log('Get transaction', id);
          const res = await axios.get(`api/v1/transactions/${id}`);

          console.log('Get response', res)

          // dispatch({
          //     type: 'GET_TRANSACTIONS',
          //     payload: res.data.data
          // })
      
      } catch (err) {
          dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
          })
      
      }
  }

    async function deleteTransaction(id) {
        try {
          await axios.delete(`/api/v1/transactions/${id}`);
    
          dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }

      function editTransaction(transaction) {
        console.log({transaction});
      }


      async function updateTransaction(transaction) {
        console.log({transaction});
        const update = {
          ...transaction,
        }

        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // } 
        console.log({update});
        try {
          await axios.post(`/api/v1/transactions/${transaction._id}`, update)

          dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: update
          });
        
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        
        }
      }

      async function addTransaction(transaction) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        try {
          const res = await axios.post('/api/v1/transactions', transaction, config);
    
          dispatch({
            type: 'ADD_TRANSACTION',
            payload: res.data.data
          });
        } catch (err) {
          dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
          });
        }
      }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions, 
            error: state.error,
            loading: state.loading,
            getTransactions,
            getTransaction,
            deleteTransaction,
            editTransaction,
            updateTransaction, 
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )

}
