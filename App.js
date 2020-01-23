import React, {Component} from 'react';
import './App.css';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import TooltipContent from './TooltipContent';

class App extends Component {

  defaultValue=70;
  maxValue=100;

  constructor(props) {
    super(props);
    this.state = {height:this.defaultValue};
  }
   marks = [
    {
      value: 10,
      label: '10',
    },
  
    {
      value: 100,
      label: '100'
    }
  ];
  
   handleChange = (event, newValue) => {
    this.setState({height: newValue});
  };
 
   classes = {
    tooltip: {
      backgroundColor:'white',
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: 11,
    },
  };

 render(){
  const styles = {
    normalDivStyle: {
        height: this.state.height
    },
    alertDivStyle:{
     height: 100-this.state.height
    }
};
  const {normalDivStyle,alertDivStyle } = styles;
    return (
       <div className="mainDiv">
       <Tooltip  arrow classes={this.classes} title={<TooltipContent normalValue={this.state.height} allValue={this.maxValue}></TooltipContent>} placement="top">
       <div>
          <div className="divAlertStyle" style={alertDivStyle}></div>
          <div className="divNormalStyle" style={normalDivStyle}></div>
      </div> 
      </Tooltip>
          <div className="divSlider" >
         <Slider
            onChange={this.handleChange}
            defaultValue={this.defaultValue}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={3}
            marks={this.marks}
            min={10}
            max={this.maxValue}

      />
         </div>
        
       </div>
    );
 }

}

export default App;
