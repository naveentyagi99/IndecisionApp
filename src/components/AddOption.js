import React from 'react';

class AddOption extends React.Component{
    state = {
        error: undefined
    };
    handleAddOption = (event) => {
        event.preventDefault();
        const value = event.target.option.value.trim();
        const error = this.props.handleAddOption(value);
        this.setState(()=>({error}));
        if(!error){
            event.target.option.value = '';
        }
    }
    render(){
        return (
        <div>
        {this.state.error && <p className="add-option-error">Error: {this.state.error}</p>}
        <form className="add-option"
        onSubmit={this.handleAddOption}>
        <input className="add-option__input"
         type='text' name='option'></input>
        <button className="button">Add Option</button>
       </form>
        </div>

        );
    }
}

export {AddOption};
