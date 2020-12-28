import React from 'react'
import './widgets.css';

class ThermWidget extends React.Component {
 

   
    render(){
        const sensors = this.props.temp_data.map(item=>(
        <div name={item.sensor_id} className='termWidget'>
            <p className="sensor_id">{item.sensor_id}</p>   
            <p className="temp">{item.temp}&#176;</p>
        </div>
        ))
    
        return(
          <>
          {sensors}
          </>
        )
    }
}

export default ThermWidget

