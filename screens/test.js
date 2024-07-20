import * as SQLite from 'expo-sqlite/legacy';

export let expenses = []

export const db = SQLite.openDatabase('other.db');

export const setExpenses = (newExpenses) => {
  expenses = [...newExpenses]
}