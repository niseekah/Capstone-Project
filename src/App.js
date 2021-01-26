import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class App extends React.Component {
  constructor(props) {
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
  checkNumber(number) {
  // 
    if (this.state.currentOperation === "sin") {
      this.setState({
        num1: 10 * this.state.num1 + number,
      },() => {this.setState({display: "sin(" + this.state.num1 + ")"})})
    // A callback is a function passed as an argument to another function.
    // I used the callback fuction to updated display after num1
    }
    else 
    {
      this.setState({
        display: this.state.display + number,
        num1: 10 * this.state.num1 + number
      });
    }
  }

  //mathOperators() stores in the current num1 number and reset num1 to 0. 
  mathOperators(opera) {
    this.setState({
      display: this.state.display + opera,
      storeNum: this.state.num1,
      currentOperation: opera,
      num1: 0
    });
  }
  sin() {
    this.setState({
      currentOperation: "sin",
      display: "sin"
    })
  }
  async cosine() {
    await this.setState({
      display: "cos(" + this.state.num1 + ")"
    })
    this.setState({
      answer: Math.cos(this.state.num1),
      display: this.state.display + this.state.answer
    })
  }
    
  async tangent() {
  
      await this.setState({
        display: "tan(" + this.state.num1 + ")"
      })
      this.setState({
      
        answer: Math.tan(this.state.num1),
        display: this.state.display + this.state.answer
    })
    }
// The result() function is created to display the result number
  result(){

  

    
    // using an else/if statements to check if currentOperation has a certain math operator
    // then use that math operator to get the result number and display the number.
    if (this.state.currentOperation === "+") {
      this.setState({
        answer: this.state.storeNum + this.state.num1,
        display: this.state.display + " = " + this.state.answer
        // num1: 0
      })
    }
    else if (this.state.currentOperation === "--") {
      this.setState({
        answer: this.state.storeNum - this.state.num1,
        display: this.state.display + " = " + this.state.answer
      })
    }
    else if (this.state.currentOperation === "*") {
      this.setState({
        answer: this.state.storeNum * this.state.num1,
        display: this.state.display + " = " + this.state.answer
      })
    }

    else if (this.state.currentOperation === "/") {
      if (this.state.num1 === 0) {
        return "undefined";
      }
      this.setState({
        answer: this.state.storeNum / this.state.num1,
        display: this.state.display + " = " + this.state.answer
      })
    }
    else if (this.state.currentOperation === "sin") {
      this.setState({
        answer: Math.sin(this.state.num1),
        
      },() => {this.setState({display: this.state.display + " = " + this.state.answer})})
      
    }
    else {

      console.log("Err");
    }

  }

  // The clear() function is created to clear the displayed screen
  clear() {
    this.setState({
      num1: 0,
      storeNum: 0,
      currentOperation: "",
      display: "",
      answer: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Typography class="displayField">
          <Box>
            {this.state.display}
          </Box>
        </Typography>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(1); }}>1</Button>
            <Button onClick={() => { this.checkNumber(2); }}>2</Button>
            <Button onClick={() => { this.checkNumber(3); }}>3</Button>
            <Button onClick={() => { this.mathOperators("/"); }}>/</Button>
          </ButtonGroup>
        </Grid>

        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(4); }}>4</Button>
            <Button onClick={() => { this.checkNumber(5); }}>5</Button>
            <Button onClick={() => { this.checkNumber(6); }}>6</Button>
            <Button onClick={() => { this.mathOperators("*"); }}>*</Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(7); }}>7</Button>
            <Button onClick={() => { this.checkNumber(8); }}>8</Button>
            <Button onClick={() => { this.checkNumber(9); }}>9</Button>
            <Button onClick={() => { this.mathOperators("--"); }}>--</Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(0); }}>0</Button>
            <Button onClick={() => { this.clear(); }}>C</Button>
            < Button onClick={() => { this.mathOperators("+"); }}>+</Button>
            < Button onClick={() => { this.result(); }}>=</Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.sin();}}>SIN</Button>
            < Button onClick={() => { this.cosine(); }}>COS</Button>
          </ButtonGroup>
        </Grid>

      </div>
    );
  }
}

export default App;
