
const TransactionItem = ({ name, amount, textColor, deleteText }) => (
  <li className="py-2.5">
    <div className="group flex justify-between gap-2 text-sm">
      <span>{name}</span>
      <div>
        <span className={textColor}>{amount}</span>
        <button
          type="button"
          className="delete-button ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block">
          {deleteText}
        </button>
      </div>
    </div>
  </li>
);

export default TransactionItem;
