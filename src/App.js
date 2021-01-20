import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Grid class = "space">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>/</Button>
        </ButtonGroup>
        </Grid>

        <Grid class = "space">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </ButtonGroup>
        </Grid>
        <Grid class = "space">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>--</Button>
        </ButtonGroup>
        </Grid>
        <Grid class = "space">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>0</Button>
        < Button>+</Button>
        </ButtonGroup>
        </Grid>
      </React.Fragment>


    </div>
  );
}

export default App;
