import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch'

 const LaunchContainer = () => {
    const { data, error, loading } = useLaunchesQuery();

    if(loading) {
        return <div> Data is loading.... </div>
    }

    if(error || !data) {
        return <div> There was an error. </div>
    }

    return <Launch data={data} />

 }

 export default LaunchContainer