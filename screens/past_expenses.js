

const PAST_EXPENSES = [
    {
        ID: 1,
        name: 'Snackbar',
        amount: '₱21'
    },

]

let i = 1;
for (i = PAST_EXPENSES.length + 1; i < 5; i++) {
    PAST_EXPENSES.push({
        id: i,
        name: `New Expense ${i}`,
        amount: `₱${i * 10}`
    });
}

console.log(PAST_EXPENSES)

