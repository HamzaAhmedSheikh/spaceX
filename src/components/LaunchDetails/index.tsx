import React, { useEffect } from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

interface OwnProps {
    id: number;
}


 const LaunchDetailsContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch  } = useLaunchInfoQuery({
        variables: { id: String(id) }
    });
    
    useEffect(() => {
        refetch();
      }, [id]);

    if(loading) {
        return <div> Data is loading.... </div>
    }

    if(error) {
        return <div> There was an error. </div>
    }

    if(!data) {
        return <div> Please select a mission for it's details. </div>
    }

    return <LaunchDetails data={data} />
 }

 export default LaunchDetailsContainer;