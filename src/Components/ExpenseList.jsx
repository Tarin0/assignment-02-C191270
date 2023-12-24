import TransactionItem from './TransactionItem';

const ExpenseList = () => {
  const expenseData = [
    { name: 'Groceries 1', amount: '-2,500.00' },
    { name: 'Electricity Bill', amount: '-2,500.00' },
    { name: 'House rent', amount: '-2,500.00' },
    { name: 'Phone bill', amount: '-2,500.00' },
    { name: '1 Week Travel', amount: '-2,500.00' },
    // Add more expense items as needed
  ];

  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

      <ul id="expense-list" className="divide-y">
        {expenseData.map((item, index) => (
          <TransactionItem
            key={index}
            {...item}
            textColor="text-red-600"
            deleteText="Delete"
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
