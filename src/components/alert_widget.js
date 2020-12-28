import React from 'react'
import './widgets.css';


class AlertWidget extends React.Component {
    
       handleClick = (e)=>{
        console.log("klik");
        console.log(e.target.className);
      
    }
        render(){
          
        const alert_sensors = this.props.alert_data.map(item=>(
        <div className='alertWidget' onClick={this.handleClick}>
            <p className="sensor_id">{item.sensor_id}</p>   
            <p className="alert">{item.value}</p>
            </div>

        ))
    
        return(
          <>
                {alert_sensors}
          </>
        )
        }
}

export default AlertWidget