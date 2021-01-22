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
        display: "",
        answer: 0
    };
      }
  // CheckNumber() function add all numbers press to form one digit number
  // The function has async because we want to use the await method 
  async checkNumber(number)
  {

    // On line 27 this.setState has an await method next to it so when line 27-28 is finish
    // then it can display the number that was pressed by the button
    await this.setState({
      num1: 10 * this.state.num1 + number});
    // display: this.state.display + number helps keep the type a string
    // so that we don't run into errors
    this.setState({
      display: this.state.display + number
    });
  }

  //mathOperators() stores in the current num1 number and reset num1 to 0. 
  async mathOperators(opera)
  {
    await this.setState({
      storeNum: this.state.num1,
      currentOperation: opera,
      num1: 0
    });
    await this.setState({
      display: this.state.display + this.state.currentOperation
    })
  }

  async result()
  {
    console.log("num1 equals " + Number(this.state.num1));
    console.log("operation equals " + this.state.currentOperation);
    if(this.state.currentOperation == "+")
    {
      await this.setState({
        answer: this.state.storeNum + this.state.num1,
      })
      await this.setState({
        display : this.state.display + " = " + this.state.answer
      })
    }
    else if(this.state.currentOperation == "--")
    {
      await this.setState({
        answer: this.state.storeNum - this.state.num1,
      })
      await this.setState({
        display : this.state.display + " = " + this.state.answer
      })
    }
    else if(this.state.currentOperation == "*")
    {
      await this.setState({
        answer: this.state.storeNum * this.state.num1,
      })
      await this.setState({
        display : this.state.display + " = " + this.state.answer
      })
    }
    else if(this.state.currentOperation == "/")
    {
      await this.setState({
        answer: this.state.storeNum / this.state.num1,
      })
      await this.setState({
        display : this.state.display + " = " + this.state.answer
      })
    }
    else
    {
      return "Err"
    }
    
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
            <Button onClick = {() => {this.mathOperators("/");}}>/</Button>
          </ButtonGroup>
          </Grid>

          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(4);}}>4</Button>
            <Button onClick = {() => {this.checkNumber(5);}}>5</Button>
            <Button onClick = {() => {this.checkNumber(6);}}>6</Button>
            <Button onClick = {() => {this.mathOperators("*");}}>*</Button>
          </ButtonGroup>
          </Grid>
          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(7);}}>7</Button>
            <Button onClick = {() => {this.checkNumber(8);}}>8</Button>
            <Button onClick = {() => {this.checkNumber(9);}}>9</Button>
            <Button onClick = {() => {this.mathOperators("--");}}>--</Button>
          </ButtonGroup>
          </Grid>
          <Grid class = "space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick = {() => {this.checkNumber(0);}}>0</Button>
            < Button onClick = {() => {this.mathOperators("+");}}>+</Button>
            < Button onClick = {() => {this.result();}}>=</Button>
            <Button onClick = {() => {;}}>Clear</Button>
          </ButtonGroup>
          </Grid>


      </div>
    );
  }
}

export default App;
