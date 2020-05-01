const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction, getTransaction, updateTransaction} = require('../controllers/transactions')

router
.route('/')
.get(getTransactions)
.post(addTransaction);


router
.route('/:id')
.get(getTransaction)
.post(updateTransaction)
.delete(deleteTransaction);

module.exports = router;
