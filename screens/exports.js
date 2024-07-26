import * as SQLite from 'expo-sqlite/legacy';
import { createContext } from 'react';

let expenses = []
let userAcc = []
const UpdateContext = createContext();

const db = SQLite.openDatabase('ExAmPdlE.db');

const setExpenses = (newExpenses) => {
  expenses = [...newExpenses]
}

const setUserAcc = (newUserAcc) => {
  userAcc = [...newUserAcc]
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

let userMoney = 0.0;
const setUserMoney = (newCurrentMoney) => {
  userMoney = newCurrentMoney
}

let userExpense = 0.0;
const setUserExpense = (newCurrentExpense) => {
  userExpense = newCurrentExpense
}

export {
  expenses, UpdateContext, db, setExpenses,
  totalMoney, setTotalMoney, totalExpense,
  setTotalExpense, currentMoney, setCurrentMoney,
  currExpense, setCurrExpense, userAcc, setUserAcc,
  userMoney, setUserMoney, userExpense, setUserExpense
}