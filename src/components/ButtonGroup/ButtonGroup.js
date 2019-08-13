import React from "react";
import EditButton from "./EditButton";
import CancelButton from "./CancelButton";
import { editCanceled, editStarted } from "../../actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { withOrderService } from "../hoc";
import "./ButtonGroup.css";

const ButtonGroup = ({ editableOrder, orderId, editStarted, editCanceled }) => {
  const onCancel = () => {
    editCanceled();
  };
  const onEdit = id => {
    editStarted(id);
  };
  const buttons = () => {
    if (editableOrder === orderId) {
      return <CancelButton onClick={() => onCancel()} />;
    } else {
      return <EditButton onClick={() => onEdit(orderId)} />;
    }
  };
  return buttons();
};

const mapStateToProps = ({ table }) => {
  const { editableOrder } = table;
  return { editableOrder };
};

const mapDispatchToProps = dispatch => {
  return {
    editCanceled: () => dispatch(editCanceled()),
    editStarted: id => dispatch(editStarted(id))
  };
};

export default compose(
  withOrderService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ButtonGroup);
