import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import './style.css'

interface Props {
    data: LaunchInfoQuery
}


const LaunchDetails: React.FC<Props> = ({data}) => {
    if(!data.launch) {
        return <div> Launch unavailable. </div>
    }    

    return (
        <div className="LaunchDetails">
          <div className="LaunchDetailsStatus">
            <span> Flight {data.launch.flight_number}: </span>  
          </div>            
        </div>
    )
}


export default LaunchDetails;