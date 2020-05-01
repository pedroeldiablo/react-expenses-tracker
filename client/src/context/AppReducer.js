export const AppReducer = (state, action) => {
    console.log();
    switch(action.type){
        case 'GET_TRANSACTIONS':
            return {
                ...state, 
                transactions: action.payload,
                loading: false
            }
        case  'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }

        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(transaction => {
                    if (transaction._id === action.payload._id) {
                    return action.payload
                    }
                    return transaction
                })
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}
