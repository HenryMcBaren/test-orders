import React from "react";
import { TableItemContainer } from "../containers";
import "./Table.css";

const Table = ({ orders }) => {
  return (
    <div className="card">
      <h4 className="card-header">Простая таблица</h4>
      <div className="table">
        <div className="table-header">
          <span>Дата</span>
          <span>Имя</span>
          <span>ID заказа</span>
          <span>Тип заказа</span>
          <span>Заказчик</span>
          <span>Поставщик</span>
          <span>Выполнен</span>
          <span>Статус</span>
          <span />
        </div>
        <div className="table-body">
          {orders.map(order => {
            return <TableItemContainer key={order.id} order={order} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
