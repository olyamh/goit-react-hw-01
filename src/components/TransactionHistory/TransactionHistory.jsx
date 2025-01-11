import React from "react";
import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead className={clsx(css.tbHead)}>
        <tr className={clsx(css.headTr)}>
          <th className={clsx(css.headCell)}>Type</th>
          <th className={clsx(css.headCell)}>Amount</th>
          <th className={clsx(css.headCell)}>Currency</th>
        </tr>
      </thead>

      <tbody className={clsx(css.tableBody)}>
        {items.map((item) => (
          <tr key={item.id} className={clsx(css.bodyRow)}>
            <td className={clsx(css.bodyCell)}>{item.type}</td>
            <td className={clsx(css.bodyCell)}>{item.amount}</td>
            <td className={clsx(css.bodyCell)}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
