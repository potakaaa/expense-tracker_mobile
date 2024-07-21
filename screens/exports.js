import * as SQLite from 'expo-sqlite/legacy';
import { createContext } from 'react';

export let expenses = []
export const UpdateContext = createContext();

export const db = SQLite.openDatabase('other.db');

export const setExpenses = (newExpenses) => {
  expenses = [...newExpenses]
}