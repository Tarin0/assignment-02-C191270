import TransactionItem from './TransactionItem';

const IncomeList = () => {
  const incomeData = [
    { name: 'Website project', amount: '+11,999.99' },
    { name: 'Salary', amount: '+35,000.00' },
    { name: 'Mobile app project', amount: '+10,000.00' },
    // Add more income items as needed
  ];

  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>

      <ul id="income-list" className="divide-y">
        {incomeData.map((item, index) => (
          <TransactionItem
            key={index}
            {...item}
            textColor="text-green-600"
            deleteText="Delete"
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
