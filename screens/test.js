import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';

const tableName = 'exp_list';

enablePromise(true);

/**
 * @typedef {Object} expenses_list
 * @property {string} exp_name - The ID of the to-do item.
 * @property {number} exp_amount - The value of the to-do item.
 */

/**
 * Retrieves to-do items from the database.
 * @param {Object} db - The database connection.
 * @returns {Promise<expenses_list[]>} - A promise that resolves to an array of to-do items.
 */

export const getDBConnection = async () => {
  return openDatabase({ name: 'new_expenses.db', location: 'default' });
};

export const createTable = async (db) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
        ID PRIMARY KEY AUTOINCREMENT, expense_name TEXT NOT NULL, expense_amount REAL NOT NULL
    );`;

  await db.executeSql(query);
};

export const getTodoItems = async (db) => {
  try {
    /** @type {expenses_list[]} */
    const expenses_list = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        expenses_list.push(result.rows.item(index));
      }
    });
    return expenses_list;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get Expenses List!!!');
  }
};

export const saveTodoItems = async (db, expenses) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(ID, expense_amount, expense_name) values` +
    todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db, id) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};