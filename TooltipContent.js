import React  from 'react';
import './TooltipContent.css';

export default function TooltipContent(props) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const dayName = days[d.getDay()];
  const monthName=monthNames[d.getMonth()];

  return (
    <div  className='toolDiv'>
        <div>{dayName},{monthName}  {d.getDay()} {d.getFullYear()}</div>
        <div  className='rowDiv' style={{marginTop:'7px'}}>
          <div>Total</div>
          <div style ={{marginLeft:'30px'}}>{props.allValue}</div>
        </div>
        <div className='rowDiv'>
         <div className='circleBlue'></div>
         <div style={{marginLeft:'4px'}}>Norm</div>
         <div style={{marginLeft:'4px'}}>{props.normalValue}</div>
         <div style={{marginLeft:'60px'}}>{parseInt(props.normalValue/props.allValue*100)} %</div>
        </div>
        <div  className='rowDiv'>
         <div className='circleRed'></div>
         <div style={{marginLeft:'4px'}}>Alert</div>
         <div style={{marginLeft:'8px'}}>{props.allValue-props.normalValue}</div>
         <div style={{marginLeft:'62px'}}>{props.allValue-props.normalValue}%</div>
        </div>
    </div>
  );
}