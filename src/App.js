import logo from './logo.svg';
import './App.css';
import React from 'react';
class TextInput extends React.Component {
render(){
return(
<label>
<input type="text" onChange={this.props.changing}/>
</label>
 )
 }
}
function wasauimmer(gewicht, groesse){
let body = 0;
body = gewicht/(groesse**2);
body = body.toFixed(2);
return body;
}
function a(bmi){
  let b ="";
  if(bmi>25){
      b = "FETT"
    }
  if(bmi<18.5){
      b = "Dünn"
    }
  if(bmi>18.5 && bmi<25){
      b = "Perfekt"
    }
  return b;
}
class App extends React.Component{
constructor(props) {
super(props);
this.state = {name: "", groesse: 0, gewicht: 0, labelius: "", bmi: 0, gutodernicht: ""};
this.handleChangedname = this.handleChangedname.bind(this);
this.handleChangedgewicht = this.handleChangedgewicht.bind(this);
this.handleChangedgroesse = this.handleChangedgroesse.bind(this);
this.handleClicked = this.handleClicked.bind(this);
 }
handleClicked(event){
this.setState({labelius: this.state.name});
let bmi1 = wasauimmer(this.state.gewicht, this.state.groesse);
this.setState({bmi: bmi1});
let gutodernicht1 = a(this.state.bmi);
this.setState({gutodernicht: gutodernicht1});
 }
handleChangedname(event){
this.setState({name: event.target.value});
 }
handleChangedgroesse(event){
this.setState({groesse: event.target.value});
 }
handleChangedgewicht(event){
this.setState({gewicht: event.target.value});
 }
handle
render(){
return(
<div className="App">
<h1>Der Fett-O-Detektor 3000</h1>
<label>Name der Zielperson<TextInput
changing = {this.handleChangedname}
/>
</label>
<br></br>
<label>Masse der Zielperson
<TextInput
changing = {this.handleChangedgewicht}
/>
</label>
<br></br>
<label>Grosser der Zielperson (in m)
<TextInput
changing = {this.handleChangedgroesse}
/>
</label>
<br></br>
<button onClick={this.handleClicked}>drück mich</button>
<br></br>
<label>{"Die Analyse hat ergeben, dass " + this.state.labelius + " ein BMI von " + this.state.bmi + " hat und damit " + this.state.gutodernicht + " ist."}</label>
</div>
 )
 }
}
export default App;