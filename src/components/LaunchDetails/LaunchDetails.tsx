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
          <h1>
            {data.launch.mission_name} - {data.launch.rocket?.rocket_name}            
          </h1>  
          <p>
            Launched from  {data.launch.launch_site?.site_name} in {data.launch.launch_year} 
          </p>  
          <p>
            {data.launch.details}
          </p>     
        
          {!!data.launch.links && !!data.launch.links.flickr_images && (
             <div>
               {data.launch.links.flickr_images.map(image => 
                   image ? <img src={image} className="img" />  : null
               )}
             </div>
          )}
        </div>
    )
}


export default LaunchDetails;