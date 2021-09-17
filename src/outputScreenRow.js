import React from 'react';

const OutPutScreenRow = (props) =>{
    return(
        <div className="screen-row">
            <input class="input-screen-row" type="text" readOnly value = {props.value}/>
        </div>
    )
}

export default OutPutScreenRow;