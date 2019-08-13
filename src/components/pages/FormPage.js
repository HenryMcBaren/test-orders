import React from 'react'
import {OrderFormContainer} from '../containers';

const FormPage = ({orders}) =>{
    return(
        <OrderFormContainer orders={orders}/>
    )
}

export default FormPage