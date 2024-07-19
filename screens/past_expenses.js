{/*

useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY NOT NULL, description TEXT, amount REAL);',
        [],
        () => { console.log('Table created successfully'); },
        (tx, error) => { console.log('Error creating table: ' + error); }
      );

      tx.executeSql(
        'SELECT * FROM expenses;',
        [],
        (_, { rows: { _array } }) => setExpenses(_array),
        (tx, error) => { console.log('Error fetching data: ' + error); }
      );
    });
  }, []);

  */}