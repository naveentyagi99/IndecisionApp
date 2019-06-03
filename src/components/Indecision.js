import React from 'react';

import {AddOption} from './AddOption';
import { Options } from './Options';
import { Header } from './Header';
import { Action } from './Action';
import { OptionModal } from './OptionModal';

 export default class Indecision extends React.Component{
    state = {
        options : [],
        selectedOption: undefined
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter Valid Value of Option';
        } else if(this.state.options.indexOf(option)>-1){
                return 'This option already exists';
        }
        this.setState((prevState)=>({ options:prevState.options.concat(option) }));
}

handleReset = ()=>{ this.setState(()=>({options:[]}))};

handleDeleteOption = (removeOption)  => {
    this.setState((prevState)=>{
        return{
            options: prevState.options.filter(option=> removeOption!==option)
        }
    });
}

 
handlePick = () => {
  const randomNumber = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNumber];
  this.setState(() => ({
    selectedOption: option
  }));
}

componentDidMount(){
    try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(()=>({ options }));
        }
    }catch(e){
     console.log('error Occured');
    }
}

handleModelClose = () =>{
    this.setState(()=>({selectedOption: undefined }));
}

componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.props.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
    }
}
    render(){
        return(
            <div>
                <Header subtitle={'Put your life in hands of a computer'}/>
                <div className="container">
                <Action  hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick} />
                
                <div className="widget">
                <Options 
                options = {this.state.options}
                handleReset = {this.handleReset}
                handleDeleteOption = {this.handleDeleteOption}
                 />
                <AddOption handleAddOption = {this.handleAddOption} />
                </div>
                </div>
            
                <OptionModal selectedOption = {this.state.selectedOption} 
                handleModelClose = {this.handleModelClose}
                />
            </div>
        );

    }
}

Indecision.defaultProps = {options: []};
