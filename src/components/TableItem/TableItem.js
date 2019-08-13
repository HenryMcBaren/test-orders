import React from "react";
import "./TableItem.css";

const TableItem = ({
  order,
  editableOrder,
  buttonGroup,
  showEditForm,
  statusStyle
}) => {
  const {
    date,
    seller,
    orderId,
    id,
    orderType,
    customer,
    provider,
    dateToDone,
    status
  } = order;
  return (
    <div className="table-container">
      <div className="table-item">
        <span className="table__cell" data-label="Дата">
          {date}
        </span>
        <span className="table__cell" data-label="Имя">
          {seller}
        </span>
        <span className="table__cell" data-label="ID заказа">
          {orderId}
        </span>
        <span className="table__cell" data-label="Тип заказа">
          {orderType}
        </span>
        <span className="table__cell" data-label="Заказчик">
          {customer}
        </span>
        <span className="table__cell" data-label="Поставщик">
          {provider}
        </span>
        <span className="table__cell" data-label="Выполнен">
          {dateToDone}
        </span>
        <span className="table__cell" data-label="Статус">
          <span className={`table__status ${statusStyle(status)}`}>
            {status}
          </span>
        </span>
        <span className="button-group">{buttonGroup(status, id)}</span>
      </div>
      {showEditForm(id, editableOrder)}
    </div>
  );
};

export default TableItem;
