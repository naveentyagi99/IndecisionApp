console.log('Getting startd with React js');


var userName = 'Kuldeep kumar';

function getLocation(location){
    if(location){
        return <p>Location:{location}</p>;
    }
}

var indecvisionAppr = {
    title: 'Indecision App',
    subTitle: "This is App info",
    location: 'Pune',
    options: []
};

const formSubmit = (event) =>{
    event.preventDefault();
 const value = event.target.option.value;
 if(value){
     console.log('Value is Indeed entered in the tect box');
     indecvisionAppr.options.push(value);
     event.target.option.value = '';
     console.log(indecvisionAppr.options.length);
     renderForm();
 }
}

const reset = ()=>{
    indecvisionAppr.options = [];
    renderForm();
}


const renderForm = ()=>{
    let template = (<div>
        <h1>Title: {indecvisionAppr.title}</h1>
        indecvisionAppr.subTitle && <p>{indecvisionAppr.subTitle}</p>
        <p>{indecvisionAppr.options && indecvisionAppr.options.length > 0 ? 'Here are you options': 'No options'}</p>
        <button onClick={reset}>Remove All</button>
         <form onSubmit={formSubmit}>
         <input type = "text" name="option"></input>
         <button >Add Options</button>
         <h1>{indecvisionAppr.options.length}</h1>
         </form>
    </div>);
    
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);


}


const appRoot = document.getElementById('app');
renderForm();