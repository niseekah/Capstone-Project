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
  // The function has async because we want to use the await method 
  async checkNumber(number) {

    // On line 27 this.setState has an await method next to it so when line 27-28 is finish
    // then it can display the number that was pressed by the button
    await this.setState({
      num1: 10 * this.state.num1 + number
    });
    // display: this.state.display + number helps keep the type a string
    // so that we don't run into errors
    this.setState({
      display: this.state.display + number
    });
  }

  //mathOperators() stores in the current num1 number and reset num1 to 0. 
  async mathOperators(opera) {
    await this.setState({
      storeNum: this.state.num1,
      currentOperation: opera,
      num1: 0
    });
    await this.setState({
      display: this.state.display + this.state.currentOperation
    })
  }
  async sin() {
    Math.sin()
  }
  cosine() {
    console.log(Math.cos(this.state.num1))
  }
  async tangent() {
    Math.tan()
  }

  // The result() function is created to display the result number
  async result() {
    // using an else/if statements to check if currentOperation has a certain math operator
    // then use that math operator to get the result number and display the number.
    if (this.state.currentOperation === "+") {
      await this.setState({
        answer: this.state.storeNum + this.state.num1,
        // num1: 0
      })
      await this.setState({
        display: this.state.display + " = " + this.state.answer
      })
    }
    else if (this.state.currentOperation === "--") {
      await this.setState({
        answer: this.state.storeNum - this.state.num1,
      })
      await this.setState({
        display: this.state.display + " = " + this.state.answer
      })
    }
    else if (this.state.currentOperation === "cos") {
      await this.setState({
        answer: this.state.storeNum - this.state.num1,
      })
      await this.setState({
        display: this.state.display + " = " + this.state.answer
      })
    }
    else if (this.state.currentOperation === "*") {
      await this.setState({
        answer: this.state.storeNum * this.state.num1,
      })
      await this.setState({
        display: this.state.display + " = " + this.state.answer
      })
    }

    else if (this.state.currentOperation === "/") {
      if (this.state.num1 === 0) {
        return "undefined";
      }
      await this.setState({
        answer: this.state.storeNum / this.state.num1,
      })
      await this.setState({
        display: this.state.display + " = " + this.state.answer
      })
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
        </Grid>
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
            <Button onClick={() => { this.mathOperators("--"); }}>-</Button>
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
            <Button onClick={() => { ; }}>SIN</Button>
            < Button onClick={() => {this.cosine(); }}>COS</Button>
          </ButtonGroup>
        </Grid>


      </div>
    );
  }
}

export default App;
