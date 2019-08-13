import React from "react";
import { Field } from "redux-form";
import "./OrderForm.css";

const OrderForm = props => {
  const {
    getDate,
    handleSubmit,
    validateWarning,
    sendWarning,
    newOrderId,
    history
  } = props;

  return (
    <div className="order-form">
      <div className="form-header">
        <span>{`Заказ ${newOrderId} от ${getDate().fullDate}`}</span>
        <span
          className="fa fa-times-circle"
          onClick={() => history.push("/orders")}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-part">
          <span className="part-header">Заказчик</span>
          <div className="form-box">
            <label>Email</label>
            <Field
              name="email"
              className="form-control"
              component="input"
              type="email"
            />
          </div>
          <div className="form-box">
            <label>Имя</label>
            <Field
              name="firstName"
              className="form-control"
              component="input"
              type="text"
            />
          </div>
          <div className="form-box">
            <label>Фамилия</label>
            <Field
              name="lastName"
              className="form-control"
              component="input"
              type="text"
            />
          </div>
          <div className="form-box">
            <label>Мобильный</label>
            <Field
              name="phone"
              className="form-control"
              component="input"
              type="text"
            />
          </div>
        </div>
        <div className="form-part">
          <span className="part-header">Заказ</span>
          <div className="form-box">
            <label>Позиция</label>
            <Field
              name="product"
              className="form-control"
              component="input"
              type="text"
            />
          </div>
          <div className="form-box">
            <label>Тип заказа</label>
            <Field
              name="orderType"
              component="select"
              className="custom-select"
            >
              <option>Выберите тип заказа</option>
              <option value="retail">Розница</option>
              <option value="wholesale">Опт</option>
            </Field>
          </div>
          <div className="form-box">
            <label>Поставщик</label>
            <Field name="provider" component="select" className="custom-select">
              <option>Выберите поставщика</option>
              <option value="needMeat">NeedMeat</option>
              <option value="bunnyForMoney">BunnyForMoney</option>
            </Field>
          </div>
          <div className="form-box">
            <label>ID заказа</label>
            <Field
              name="orderId"
              component={props => {
                return (
                  <input
                    className="form-control"
                    type="text"
                    disabled="disabled"
                    value={newOrderId}
                    {...props}
                  />
                );
              }}
            />
          </div>
          <div className="form-box">
            <label>Дата выполнения</label>
            <Field
              name="dateToDone"
              className="form-control"
              component="input"
              type="date"
            />
          </div>
          <div className="form-box">
            <label>Комментарий</label>
            <Field
              name="comment"
              className="form-control"
              component="textarea"
            />
          </div>
        </div>
        <div className="form-part submit-box">
          {validateWarning()}
          {sendWarning()}
          <button type="submit" className="btn btn-primary btn-lg">
            СОХРАНИТЬ
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
