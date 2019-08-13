class OrderService {
  getOrders = async () => {
    const res = await fetch("http://localhost:3004/orders");
    if (!res.ok) {
      throw new Error(res.status);
    }
    return await res.json();
  };

  postOrder = async data => {
    const res = await fetch("http://localhost:3004/orders", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error(res.status);
    }
    return "Data posted";
  };

  patchOrder = async (data, orderId) => {
    const res = await fetch(`http://localhost:3004/orders/${orderId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });
    if (!res.ok) {
      throw new Error("Data did not edit: " + res.status);
    }
    return "Patched";
  };
}

export default OrderService;
