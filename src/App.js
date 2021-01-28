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
    else {
      this.setState({
        display: this.state.display + opera,
        storeNum: this.state.num1,
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
    let net = this.state.num1
    if (this.state.negative === "-") {
      net = -Math.abs(this.state.num1)
    }

    if (this.state.currentOperation === "+") {
      this.setState({
        answer: this.state.storeNum + net,
      }, () => { this.setState({ display: this.state.display + " = " + this.state.answer }) })
    }
    else if (this.state.currentOperation === "-") {
      this.setState({
        answer: this.state.storeNum - net,
      }, () => { this.setState({ display: this.state.display + " = " + this.state.answer }) })
    }
    else if (this.state.currentOperation === "*") {
      this.setState({
        answer: this.state.storeNum * net,
      }, () => { this.setState({ display: this.state.display + " = " + this.state.answer }) })
    }

    else if (this.state.currentOperation === "/") {
      if (this.state.num1 === 0) {
        return "undefined";
      }
      this.setState({
        answer: this.state.storeNum / net,
      }, () => { this.setState({ display: this.state.display + " = " + this.state.answer }) })
    }

    else if (this.state.currentOperation === "sin") {
      this.setState(
        {
          answer: Math.sin(net),
        },
        () => {
          this.setState({
            display: this.state.display + " = " + this.state.answer,
          });
        }
      );
    }
    else if (this.state.currentOperation === "cos") {
      this.setState(
        {
          answer: Math.cos(net),
        },
        () => {
          this.setState({
            display: this.state.display + " = " + this.state.answer,
          });
        }
      );
    }
    else if (this.state.currentOperation === "tan") {
      this.setState(
        {
          answer: Math.tan(net),
        },
        () => {
          this.setState({
            display: this.state.display + " = " + this.state.answer,
          });
        }
      );
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
