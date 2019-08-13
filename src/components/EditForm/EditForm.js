import React from "react";
import { editOrder, fetchOrders, editCanceled } from "../../actions";
import { Field, reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { withOrderService } from "../hoc";
import { editFormValidation } from "../formsValidation";

import "./EditForm.css";

class EditForm extends React.Component {
  state = {
    validWarning: null
  };
  onSubmit = async ev => {
    ev.preventDefault();
    const { editOrder, fetchOrders, editedOrder } = this.props;
    const validator = editFormValidation(editedOrder);
    if (!validator) {
      await editOrder(editedOrder);
      fetchOrders();
    } else {
      this.setState({ validWarning: validator });
    }
  };
  onCancel = () => {
    this.props.editCanceled();
  };
  validateWarning = () => {
    if (this.state.validWarning) {
      return (
        <span className="alert alert-danger fixed-msg">
          {this.state.validWarning}
        </span>
      );
    }
  };

  render() {
    const {
      date,
      seller,
      id,
      orderId,
      customer,
      provider,
      dateToDone
    } = this.props.order;

    return (
      <form key={id} onSubmit={this.onSubmit} className="edit-form">
        {this.validateWarning()}
        <div className="edit-form__box" data-label="Дата">
          <Field
            component="input"
            name="date"
            type="text"
            className="form-control"
            placeholder={date}
          />
        </div>
        <div className="edit-form__box" data-label="Имя">
          <Field
            component="input"
            name="seller"
            type="text"
            className="form-control"
            placeholder={seller}
          />
        </div>
        <div className="edit-form__box" data-label="ID заказа">
          <Field
            component="input"
            name="orderId"
            type="text"
            className="form-control"
            placeholder={orderId}
          />
        </div>
        <div className="edit-form__box" data-label="Тип заказа">
          <Field
            component="select"
            name="orderType"
            type="text"
            className="custom-select"
          >
            <option value="retail">retail</option>
            <option value="wholesale">wholesale</option>
          </Field>
        </div>
        <div className="edit-form__box" data-label="Заказчик">
          <Field
            component="input"
            name="customer"
            type="text"
            className="form-control"
            placeholder={customer}
          />
        </div>
        <div className="edit-form__box" data-label="Поставщик">
          <Field
            component="input"
            name="provider"
            type="text"
            className="form-control"
            placeholder={provider}
          />
        </div>
        <div className="edit-form__box" data-label="Выполнен">
          <Field
            component="input"
            name="dateToDone"
            className="form-control"
            type="text"
            placeholder={dateToDone}
          />
        </div>
        <div className="edit-form__box" data-label="Статус">
          <Field
            data-label="Статус"
            component="select"
            name="status"
            className="custom-select"
          >
            <option value="confirm">confirm</option>
            <option value="done">done</option>;
            <option value="expired">expired</option>;
            <option value="failed">failed</option>;
          </Field>
        </div>
        <div className="edit-form__btn-box">
          <button
            type="submit"
            className="btn btn-success btn-sm edit-form__button"
          >
            СОХРАНИТЬ
          </button>
          <button
            type="button"
            onClick={this.onCancel}
            className="btn btn-danger btn-sm edit-form__cancel-button"
          >
            ОТМЕНА
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  const formSelector = getFormValues("edit-order");
  return { editedOrder: formSelector(state) };
};
const mapDispatchToProps = (dispatch, { orderService, order }) => {
  return {
    editCanceled: () => dispatch(editCanceled()),
    editOrder: editedOrder =>
      editOrder(editedOrder, order.id, orderService, dispatch),
    fetchOrders: fetchOrders(orderService, dispatch)
  };
};

export default compose(
  withOrderService(),
  reduxForm({ form: "edit-order" }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditForm);
