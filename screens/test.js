import * as SQLite from 'expo-sqlite/legacy';
import { useState } from "react";

const db = SQLite.openDatabase('./db/expenses.db');
export const [expenseArr, setExpensesArr] = useState([])
export const [nameArr, setNameArr] = useState([])
export const [listArr, setArr] = useState([])


export default function createTable() {
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS expense_list'
            + '(ID INTEGER PRIMARY KEY AUTOINCREMENT,'
            + 'expense_name TEXT, expense_amount REAL)')
    })
}

export default function addExpense() {
    db.transaction((tx) => {
        tx.executeSql("INSERT INTO expense_list (expense_name, expense_amount)"
            + " VALUES (?, ?)",
            [exp_name, exp_amount],
            (txObj, result) => {
                let prevExpName = [...nameArr];
                let prevExpAmount = [...amountArr];
                let listArr = [...listArr]
                prevExpName.push({id: result.insertId, 
                    expense_name: exp_name});
                prevExpName.push({id: result.insertId, 
                    expense_amount: exp_amount});
                listArr.push({id: result.insertId,
                    expense_name: exp_name, 
                    expense_amount: exp_amount})
                setArr(listArr)
            },
            (txObj, error) => console.log(error)
        )
    })
}

export default function getExpense() {
    db.transaction((tx) => {
        tx.executeSql('SELECT * FROM expense_list',
            null,
            (txObj, result) => setExpensesArr(result.rows._array),
            (txObj, error) => console.log(error)
        )
    })
}