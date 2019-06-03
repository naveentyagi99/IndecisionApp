import React from 'react';
import { Option } from './Option';

const Options = (props) => {
    return( 
        <div>
         <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
            className="button button--link" 
            onClick={props.handleReset}
        >
            Remove All
        </button>
        </div>
        
        {props.options.length<1 && <p className="widget__message">There is no element to show</p>}
        <ol>{
            props.options.map((option, index)=>
            <Option 
            key={option} 
            optionsText={option}
            count= {index+1}
            handleDeleteOption = {props.handleDeleteOption}
            >
            </Option>)
        }
        </ol>
        </div>
    ); 
}

export { Options };