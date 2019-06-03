import React from 'react';

const Option = (props) =>{
    return(
        <div className="option">
        <p className="option__text"> 
        {props.count}. {props.optionsText}</p>
        <button 
        className="button button--link" 
        onClick={(e)=>{
            props.handleDeleteOption(props.optionsText)
        }}>
        remove
        </button>
        </div>
    );
}

export  { Option } ;