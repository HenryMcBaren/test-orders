import React from "react";
import EditForm from "../EditForm";
import ButtonGroup from "../ButtonGroup";
import { connect } from "react-redux";
import TableItem from "../TableItem";

const TableItemContainer = ({ order, editableOrder }) => {
  const buttonGroup = (status, orderId) => {
    if (status === "confirm") {
      return <ButtonGroup orderId={orderId} />;
    }
  };
  const showEditForm = (itemId, editableOrder) => {
    if (itemId === editableOrder) {
      return <EditForm order={order} />;
    }
  };
  const statusStyle = status => {
    let result = "";
    switch (status) {
      case "confirm":
        result = "status-confirm";
        break;
      case "done":
        result = "status-done";
        break;
      case "expired":
        result = "status-expired";
        break;
      case "failed":
        result = "status-failed";
        break;
      default:
    }
    return result;
  };
  return (
    <TableItem
      buttonGroup={buttonGroup}
      showEditForm={showEditForm}
      statusStyle={statusStyle}
      order={order}
      editableOrder={editableOrder}
    />
  );
};

const mapStateToProps = ({ table }) => {
  const { editableOrder } = table;
  return { editableOrder };
};

export default connect(mapStateToProps)(TableItemContainer);
