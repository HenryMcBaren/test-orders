import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { fetchOrders, addOrder } from "../../actions";
import { withOrderService } from "../hoc";
import { connect } from "react-redux";
import { orderFormValidation } from "../formsValidation";
import OrderForm from "../OrderForm";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { withRouter } from "react-router-dom";

class OrderFormContainer extends React.Component {
  state = {
    id: "",
    invalid: null,
    sended: false
  };

  async componentDidMount() {
    this.props.initialize({ orderType: "" });
    await this.props.fetchOrders();
    this.modifyId();
  }
  componentWillReceiveProps(nextProps) {
    const { order: nextOrder } = nextProps;
    if (nextOrder.orderType) {
      this.modifyId(nextOrder.orderType);
    }
  }
  getDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    day = (day < 10 ? "0" : "") + day;
    month = (month < 10 ? "0" : "") + month;
    year = year.toString().substr(-2);
    const fullDate = `${day}.${month}.${date.getFullYear()}`;
    return {
      day,
      month,
      year,
      fullDate
    };
  }
  createId() {
    const { orders } = this.props;
    const id = orders.length;
    const date = this.getDate();
    const { day, month, year } = date;
    const idArr = [];
    idArr.push(year, month, day, id);
    return idArr.join("");
  }
  modifyId = orderType => {
    let data = "";
    switch (orderType) {
      case "retail":
        data = "р-";
        break;
      case "wholesale":
        data = "о-";
        break;
      default:
    }
    this.setState({ id: data + this.createId() });
  };
  modifyOrder = order => {
    let date = this.getDate();
    const { day, month, year } = date;
    const parseDate = date => {
      if (!date) return "";
      const dateArr = date.split("-");
      return [dateArr[2], dateArr[1], dateArr[0].substring(2)].join(".");
    };
    const createStatus = () => {
      const rand = Math.floor(Math.random() * (4 - 1)) + 1;
      let status = "";
      switch (rand) {
        case 1:
          status = "done";
          break;
        case 2:
          status = "expired";
          break;
        case 3:
          status = "confirm";
          break;
        case 4:
          status = "failed";
          break;
        default:
      }
      return status;
    };
    let test = Object.assign({}, order);
    test.orderId = this.state.id;
    test.status = createStatus();
    test.seller = "Иванов И.И.";
    test.customer = `${test.firstName} ${test.lastName}`;
    test.date = `${day}.${month}.${year}`;
    test.dateToDone = parseDate(test.dateToDone);
    delete test.firstName;
    delete test.lastName;
    return test;
  };
  validateWarning = () => {
    if (this.state.invalid) {
      return <span className="alert alert-danger">{this.state.invalid}</span>;
    }
  };
  sendWarning = () => {
    if (this.state.sended)
      return (
        <span className="alert alert-success">Данные отправлены успешно</span>
      );
  };
  handleSubmit = ev => {
    ev.preventDefault();
    const { order, addOrder } = this.props;
    const modifiedOrder = this.modifyOrder(order);
    const validateResult = orderFormValidation(modifiedOrder);
    if (!validateResult) {
      addOrder(modifiedOrder);
      this.setState({ sended: true });
    }
    this.setState({ invalid: validateResult });
  };
  render() {
    const { loading, error, history } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator err={error.toString()} />;
    }
    return (
      <OrderForm
        loading={loading}
        error={error}
        getDate={this.getDate}
        handleSubmit={this.handleSubmit}
        validateWarning={this.validateWarning}
        sendWarning={this.sendWarning}
        newOrderId={this.state.id}
        history={history}
      />
    );
  }
}

const mapStateToProps = state => {
  const formSelector = getFormValues("order");
  const { orders, loading, error } = state.table;
  return { order: formSelector(state), orders, loading, error };
};

const mapDispatchToProps = (dispatch, { orderService }) => {
  return {
    fetchOrders: fetchOrders(orderService, dispatch),
    addOrder: order => addOrder(order, orderService, dispatch)
  };
};
OrderFormContainer = withRouter(OrderFormContainer);

export default compose(
  withOrderService(),

  reduxForm({ form: "order" }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OrderFormContainer);
