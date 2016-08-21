import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(arr){
    return _.round(_.sum(arr) / arr.length);
}

const Chart = (props) => {
    console.log(props.data)
    
    return(
        <td>
            <Sparklines width={100} height={20} data={props.data}>
              <SparklinesLine color={props.color} />
              <SparklinesReferenceLine type='avg'/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </td>
    )
}

export default Chart
