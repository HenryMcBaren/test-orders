import React from 'react'

const CancelButton = ({onClick}) =>{
    return(
        <button type='button' onClick={onClick} className="btn btn-danger btn-sm">ОТМЕНА</button>
    )
}

export default CancelButton