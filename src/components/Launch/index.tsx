import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql';
import Launch, { OwnProps } from './Launch'

 const LaunchContainer = (props:OwnProps) => {
    const { data, error, loading } = useLaunchesQuery();

    if(loading) {
        return <div> Data is loading.... </div>
    }

    if(error || !data) {
        return <div> There was an error. </div>
    }

    return <Launch data={data} {...props} />

 }

 export default LaunchContainer