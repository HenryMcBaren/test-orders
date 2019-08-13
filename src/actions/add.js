const addRequested = () =>{
    return {
        type: "ADD_ORDER_REQUEST"
    }
}

const addSuccessfully = (msg) =>{
    return {
        type: "ADD_ORDER_SUCCESS",
        payload: msg
    }
}

const addFailed = (err) =>{
    return{
        type:"ADD_ORDER_FAILURE",
        payload: err
    }
}

const addOrder = (order, orderService, dispatch) => {
    dispatch(addRequested())
    orderService.postOrder(order)
    .then(()=>dispatch(addSuccessfully()))
    .catch((err) => dispatch(addFailed(err)))
}

export default addOrder