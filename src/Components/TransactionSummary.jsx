
const TransactionSummary = ({ title, amount, textColor, bgColor }) => (
  <div className={`mt-2 flex items-center justify-between ${bgColor} px-4 py-3 text-sm`}>
    <p>{title}</p>
    <p>{amount}</p>
  </div>
);

export default TransactionSummary;
