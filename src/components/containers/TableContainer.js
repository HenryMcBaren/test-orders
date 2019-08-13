import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withOrderService } from "../hoc";
import { fetchOrders } from "../../actions";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import Table from "../Table";

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator err={error.toString()} />;
    }
    return <Table orders={orders} />;
  }
}
const mapStateToProps = ({ table }) => {
  const { orders, loading, error } = table;
  return {
    orders,
    loading,
    error
  };
};
const mapDispatchToProps = (dispatch, { orderService }) => {
  return {
    fetchOrders: fetchOrders(orderService, dispatch)
  };
};
export default compose(
  withOrderService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(TableContainer);
