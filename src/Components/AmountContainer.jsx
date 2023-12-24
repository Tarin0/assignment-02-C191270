import TransactionSummary from './TransactionSummary';

const AmountContainer = () => {
  return (
    <div>
      <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
        <div>
          <h2>Available Budget</h2>
          <p className="mt-1 text-4xl font-medium">+ BDT <span id="available-budget">14,340.00</span></p>
        </div>

        <TransactionSummary
          title="Income"
          amount="+ BDT 3,391.45"
          textColor="text-green-500"
          bgColor="bg-green-500"
        />

        <TransactionSummary
          title="Expenses"
          amount="- BDT 1,762.69"
          textColor="text-red-500"
          bgColor="bg-red-500"
        />
      </div>
    </div>
  );
};

export default AmountContainer;
