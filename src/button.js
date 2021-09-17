import React from 'react';

const Button = (props) =>{
    return(
        <input class="button-css" onClick = {props.handleClick} type="button" value = {props.label}/>
    );
}

export default Button;