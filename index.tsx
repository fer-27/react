
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}


class Formulario extends Component{

  constructor(props){

     super(props);


     this.state={
       email:'',
       password:''


     }


  }

  

   syncChanges(value,property){

    let state={}
    state[property]=value;
    this.setState(state)

  }




   submitForm=()=>{

  console.log(this.state)







   }

   render(){

      return(


        

        <form>

        <input
        
          onChange={(ev)=>{this.syncChanges(ev.target.value,'email' )}}
          type="email"  
          value={this.state.email} 
          placeholder="email"
          
          />


        <input type="password"  
        onChange={(ev)=>{this.syncChanges(ev.target.value,'password')}} 
        type="password"  
        value={this.state.password} 
        placeholder="***"/>



        <div>

          <input 
          
          onClick={this.submitForm} 

          type="submit" 
          
          value="iniciar sesion" />
          
        </div>


        </form>



      )

   }

  }

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }






  render() {

    let nombre="thanos"

    return(

     <div>

         <Formulario/>

     </div>



   );


  }
}
 
   
 



render(<App />, document.getElementById('root'));

