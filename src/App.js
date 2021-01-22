import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        num1: 0,
        storeNum: 0,
        currentOperation: "",
        display: ""
    };
      }
  // CheckNumber() function add all numbers press to form one digit number
  checkNumber(number)
  {

    // this.setState is updated to give a new number
    // every time you press a numnber button
    this.setState({
      num1: 10 * this.state.num1 + number});
    this.setState({
      display: this.state.num1
    });
    //console.log(this.state.num1);
  }

  //mathOperators() stores in the current num1 number and reset num1 to 0. 
  mathOperators(opera)
  {
    this.setState({
      storeNum: this.state.num1,
      currentOperation: opera,
      display: this.state.currentOperation,
      num1: 0
    });
  }

  render()
  {
    return (
      
      <div className="App">
          <div>
            {this.state.display}
          </div>
          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(1);}}>1</Button>
            <Button onClick = {() => {this.checkNumber(2);}}>2</Button>
            <Button onClick = {() => {this.checkNumber(3);}}>3</Button>
            <Button>/</Button>
          </ButtonGroup>
          </Grid>

          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(4);}}>4</Button>
            <Button onClick = {() => {this.checkNumber(5);}}>5</Button>
            <Button onClick = {() => {this.checkNumber(6);}}>6</Button>
            <Button>*</Button>
          </ButtonGroup>
          </Grid>
          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(7);}}>7</Button>
            <Button onClick = {() => {this.checkNumber(8);}}>8</Button>
            <Button onClick = {() => {this.checkNumber(9);}}>9</Button>
            <Button>--</Button>
          </ButtonGroup>
          </Grid>
          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(0);}}>0</Button>
          < Button onClick = {() => {this.checkNumber("+");}}>+</Button>
          </ButtonGroup>
          </Grid>


      </div>
    );
  }
}

export default App;
