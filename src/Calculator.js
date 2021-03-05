import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



class Calculator extends React.Component
{
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
    // CheckNumber() function add all numbers pressed to form one digit number
  checkNumber(number) {
  
    // used else/if statements to check whether a trigonometric function button was pressed
    // used a callback is a function passed as an argument to another function.
    // I used the callback fuction to updated display after num1
    if (this.state.currentOperation === "sin") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        }, // What I put on line 34-36 will run after line 31-33 is done.
        () => {
          this.setState({ display: "sin(" + this.state.num1 + ")",
           });
           this.state.calcList.push(Math.sin(this.state.num1)); 
        }
      );

      
    } else if (this.state.currentOperation === "cos") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        },
        () => {
          this.setState({ display: "cos(" + this.state.num1 + ")",
           });
            this.state.calcList.push(Math.cos(this.state.num1));
        }  
      );
      

    } else if (this.state.currentOperation === "tan") {
      this.setState(
        {
          num1: 10 * this.state.num1 + number,
        },
        () => {
          this.setState({ display: "tan(" + this.state.num1 + ")" ,
          });
          this.state.calcList.push(Math.tan(this.state.num1));
        }
      );
    }
    // else the number will display and store the number into num1
    else {
    // used the else statement to check if the variable called negative equals "-" 
    // 3 -> display : 3
    // + -> display : display + "+" = "3,+"
    // -7 -> display : display + "-7" = "3,+,-7"
      if(this.state.negative === "-")
      {
        this.setState({
          display: this.state.display + number,
          num1: -Math.abs(10 * this.state.num1 + number)
        });
      }
      else
      {
        this.setState({
          display: this.state.display + number,
          num1: 10 * this.state.num1 + number,
        });
      }
    }

    console.log( "calcList is " + this.state.calcList);
  }
  //mathOperators() displays and use any math operation button pressed.
  mathOperators(opera) {
    //Created a new empty array
    let math = []

    // used the else/if statement 
    if (this.state.negative === "-") 
    {
      math.push(-Math.abs(this.state.num1));
    }
    
    if(this.state.currentOperation === "cos")
    {
      math.push(this.state.answer);

    }
    else if(this.state.currentOperation === "sin")
    {
      math.push(this.state.answer);
      
    }
    else if(this.state.currentOperation === "tan")
    {
      math.push(this.state.answer);
    
    }
    else 
    {
      math.push(this.state.num1); 
    }

     // calcList: [...calcList, ...math] is taking whatever is in the calcList array and the math array and
    // putting it into the calcList array. the three dots (...) are a spread operator
    math.push(opera)
    this.setState({
      display: this.state.display + opera,
      storeNum: this.state.num1,
      calcList: [...this.state.calcList, ...math],
      // currentOperation: opera,
      num1: 0,
    });
    console.log( "calcList is " + this.state.calcList);
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
      display: this.state.display + "-"
    });
  }
  //new function
  // The result2() function is created to calculate and display the result number
  result2()
  {
    if(this.state.currentOperation !== "")
    {
      this.setState({
        calcList: this.state.answer
      });
        console.log("clacList is now: "+ this.state.calcList); 
    }
    else
    {
  
      this.state.calcList.push(this.state.num1);
      
      console.log("clacList: "+ this.state.calcList); 
      let sign = 0;
      let sum = 0; 
      while(this.state.calcList.length !== 1)
      {

        if(this.state.calcList.indexOf("*") !== -1)
        {
          sign = this.state.calcList.indexOf("*");
          console.log(sign);
          sum = this.state.calcList[sign-1] * this.state.calcList[sign+1];
          console.log(sum);
          // remove calcList[sign-1], calcList[sign], calcList[sign+1] replace with sum.
          this.state.calcList.splice(sign-1,3,sum);
          console.log("calcList looks like this now :" + this.state.calcList);
        }
        else if (this.state.calcList.indexOf("/") !== -1)
        {
          sign = this.state.calcList.indexOf("/");
          sum = this.state.calcList[sign-1] / this.state.calcList[sign+1];
          this.state.calcList.splice(sign-1,3,sum);
        }
        else if(this.state.calcList.indexOf("+") !== -1)
        {
          sign = this.state.calcList.indexOf("+");
          console.log(sign);
          sum = this.state.calcList[sign-1] + this.state.calcList[sign+1];
          console.log(sum);
          this.state.calcList.splice(sign-1,3,sum);
          console.log(this.state.calcList);
        }
        else if(this.state.calcList.indexOf("-") !== -1)
        {
          sign = this.state.calcList.indexOf("-");
          sum = this.state.calcList[sign-1] - this.state.calcList[sign+1];
          this.state.calcList.splice(sign-1,3,sum);
          console.log(this.state.calcList)
        }

      }
    }
        console.log("result number: " + this.state.calcList);

      this.setState({
        answer: this.state.calcList,
        display: this.state.display + " = " + this.state.calcList
      })
      console.log( "calcList is " + this.state.calcList);
    
      
  }
   // The clear() function is created to clear the displayed screen and reset all the variables
   clear() {
    this.setState({
      num1: 0,
      storeNum: 0,
      currentOperation: "",
      display: "",
      answer: 0,
      negative: "",
      calcList: []
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
            < Button onClick={() => { this.result2(); }}><h1>=</h1></Button>
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
export default Calculator;

// ADD three or more numbers to do math operations with
// I would want to put each number in a queue data structures
// Example: 45+23-12
// 45 -> queue[]
// +  -> queue[]
// 23 -> queue[]
// ......etc 
// queue[45,"+",23,"-","12"]
// result function 
// use a for loop to loop through the queue
// check to see if the first element is a number and store it into a variable num1
//  if the second element is a math operation either add, subtract or divide 
//  and if the next element is a number either add, subtract, or divide
//  store the results in dig

/*
 stack[45,"+",23,"-","12","*","3"]
 if stack[0] is a number
  num1 = stack[1]
 loop i = 1
 if stack[i] is a math operator
  if stack[i+1] is a number
    storeNum = storeNum +, -, /, or * num1

    12 * 3 = 36

  PEMDAS
  M or D
  
 */

 /* */