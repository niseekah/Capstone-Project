import "./App.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      storeNum: 0,
      currentOperation: "",
      negative: "",
      display: "",
      answer: 0,
      calcList: []
    };
  }
  // CheckNumber() function add all numbers press to form one digit number
  checkNumber(number) {
    //
    if (this.state.currentOperation === "sin") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        },
        () => {
          this.setState({ display: "sin(" + this.state.num1 + ")" });
        }
      );
      // A callback is a function passed as an argument to another function.
      // I used the callback fuction to updated display after num1
    } else if (this.state.currentOperation === "cos") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        },
        () => {
          this.setState({ display: "cos(" + this.state.num1 + ")" });
        }
      );
    } else if (this.state.currentOperation === "tan") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        },
        () => {
          this.setState({ display: "tan(" + this.state.num1 + ")" });
        }
      );
    }

    if (this.state.negative === "(-)") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number
        },
        () => {
          this.setState({ display: this.state.num1 });
        }
      );
    }

    else {
      this.setState({
        display: this.state.display + number,
        num1: 10 * this.state.num1 + number,
      });
    }
  }

 

  //mathOperators() stores in the current num1 number and reset num1 to 0.
  mathOperators(opera) {
    if (this.state.negative === "-") {
      this.setState({
        display: this.state.display + opera,
        storeNum: -Math.abs(this.state.num1),
        currentOperation: opera,
        num1: 0,
        negative: ""
      })
    }
    // calcList: [...calcList, ...math] is taking whatever is in the calcList array and the math array and
    // putting it into the calcList array. the three dots (...) are a spread operator
    else {
      let math = []
      // Hers's the problem
      math.push(this.state.num1);
      math.push(opera);
      // Hers's the problem
      this.setState({
        display: this.state.display + opera,
        storeNum: this.state.num1,
        calcList: [...this.state.calcList, ...math],
        currentOperation: opera,
        num1: 0,
      });
    }
  }
  sin() {
    this.setState({
      currentOperation: "sin",
      display: "sin",
    });
  }
  async cosine() {
    this.setState({
      currentOperation: "cos",
      display: "cos",
    });
  }

  async tangent() {
    this.setState({
      currentOperation: "tan",
      display: "tan",
    });
  }
  negative() {
    this.setState({
      negative: "-",
    }, () => {this.setState({display: this.state.display + this.state.negative})});
  }
  // The result() function is created to display the result number
  result() {
    // using an else/if statements to check if currentOperation has a certain math operator
    // then use that math operator to get the result number and display the number.
  this.state.calcList.push(this.state.num1);
  console.log( "num1 is " + this.state.num1);
  let i;
  let dig = null 
  let math 
  let digTwo = 0
  console.log("array list " + this.state.calcList)
  while(this.state.calcList.length != 0)
  {
    if(dig === null)
    {
      dig = this.state.calcList.shift()
    }
    else
    {
      math = this.state.calcList.shift()
      console.log("math = "+ math)
      digTwo = this.state.calcList.shift() 
      console.log("digTwo = "+ digTwo)
      if(math == "+")
      {
        dig = dig + digTwo
        console.log(dig)
      }
      else if (math == "-")
      {
        dig = dig - digTwo
        console.log(dig)
      }
      else if (math == "*")
      {
        dig = dig * digTwo
      }
      else if (math == "/")
      {
        dig = dig / digTwo
      }
    }
  }
  console.log(dig);

  this.setState({
    answer: dig,
    display: this.state.display + " = " + dig
  })

  }

  // The clear() function is created to clear the displayed screen
  clear() {
    this.setState({
      num1: 0,
      storeNum: 0,
      currentOperation: "",
      display: "",
      answer: 0,
      negative: ""
    });
  }

  render() {
    return (
      <div className="App">
        <Typography class="displayField">
          <Box>{this.state.display}</Box>
        </Typography>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(1); }}><h1>1</h1></Button>
            <Button onClick={() => { this.checkNumber(2); }}><h1>2</h1></Button>
            <Button onClick={() => { this.checkNumber(3); }}><h1>3</h1></Button>
            <Button onClick={() => { this.mathOperators("/"); }}><h1>/</h1></Button>
          </ButtonGroup>
        </Grid>

        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(4); }}><h1>4</h1></Button>
            <Button onClick={() => { this.checkNumber(5); }}><h1>5</h1></Button>
            <Button onClick={() => { this.checkNumber(6); }}><h1>6</h1></Button>
            <Button onClick={() => { this.mathOperators("*"); }}><h1>*</h1></Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.checkNumber(7); }}><h1>7</h1></Button>
            <Button onClick={() => { this.checkNumber(8); }}><h1>8</h1></Button>
            <Button onClick={() => { this.checkNumber(9); }}><h1>9</h1></Button>
            <Button onClick={() => { this.mathOperators("-"); }}><h1>-</h1></Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.clear(); }}><h1>C</h1></Button>
            <Button onClick={() => { this.checkNumber(0); }}><h1>0</h1></Button>
            < Button onClick={() => { this.mathOperators("+"); }}><h1>+</h1></Button>
            < Button onClick={() => { this.result(); }}><h1>=</h1></Button>
          </ButtonGroup>
        </Grid>
        <Grid class="space">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => { this.sin(); }}><h3>SIN</h3></Button>
            < Button onClick={() => { this.cosine(); }}><h3>COS</h3></Button>
            < Button onClick={() => { this.tangent(); }}><h3>TAN</h3></Button>
            < Button onClick={() => { this.negative(); }}><h3>(-)</h3></Button>
          </ButtonGroup>
        </Grid>
      </div>
    );
  }
}

export default App;




// ADD three or more numbers to do math operations with
// I would want to put each number in a stack data structures
// Example: 45+23-12
// 45 -> stack[]
// +  -> stack[]
// 23 -> stack[]
// ......etc 
//stack[45,"+",23,"-","12"]
//result function 
// use a for loop to loop through the stack
// check to see if the first element is a number and store it into a variable num1
//  if the second element is a math operation either add, subtract or divide 
//  and if the next element is a number either add, subtract, or divide
//  store the results in storeNum
//  



/*
 stack[45,"+",23,"-","12"]
 if stack[0] is a number
  num1 = stack[1]
 loop i = 1
 if stack[i] is a math operator
  if stack[i+1] is a number
    storeNum = storeNum +, -, /, or * num1
 */