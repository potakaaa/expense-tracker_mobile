import * as SQLite from 'expo-sqlite/legacy';
import { createContext } from 'react';

let expenses = []
const UpdateContext = createContext();

const db = SQLite.openDatabase('eXAMplE.db');

const setExpenses = (newExpenses) => {
  expenses = [...newExpenses]
}

let totalMoney = 0.0;
const setTotalMoney = (newTotalMoney) => {
  totalMoney = newTotalMoney
}

let currentMoney = 0.0;
const setCurrentMoney = (newCurrentMoney) => {
  currentMoney = newCurrentMoney
}

let totalExpense = 0.0;
const setTotalExpense = (newTotalExpense) => {
  totalExpense = newTotalExpense;
}

let currExpense = 0.0;
const setCurrExpense = (newCurrentExpense) => {
  currExpense = newCurrentExpense
}

export {
  expenses,
  UpdateContext,
  db,
  setExpenses,
  totalMoney,
  setTotalMoney,
  totalExpense,
  setTotalExpense,
  currentMoney,
  setCurrentMoney,
  currExpense,
  setCurrExpense
}