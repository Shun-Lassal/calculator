import React from 'react';

const CalculatorTitle = (props) => {
    return (
        <div className ="calculator-title">
            <h1>{props.value}</h1>
        </div>
    )
}

export default CalculatorTitle;
