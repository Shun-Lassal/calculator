import React from 'react';

import OutPutScreenRow from './outputScreenRow';

const OutPutScreen = (props) => {
    return(
        <div className="screen">
            <OutPutScreenRow value = {props.calcul.question}/>
            <OutPutScreenRow value = {props.calcul.answer}/>
        </div>
    )
}

export default OutPutScreen;

