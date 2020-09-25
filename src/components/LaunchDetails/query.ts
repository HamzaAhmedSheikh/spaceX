import gql from 'graphql-tag';

export const QUERY_LAUNCH_DETAILS = gql`
    query launchInfo($id: String) {
        launch(id: $id) {
            flight_number
            mission_name
            launch_year
            launch_success
            details
            launch_site {
                site_name
            }
            rocket {
                rocket_name
                rocket_type
            }
            links {
                video_link
                flickr_images
      }
    }
  }
`;