import React from 'react'

function About() {
    return (
        <div className="mx-auto animated bounceIn" style={{ width:"400px" }}>
                <div className="about-page-card">
                    <div className="api-container">
                        <div className="api-image">
                            <img
                                alt="the movie db logo"
                                src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
                                width="240" height = "100"
                            />
                        </div>
                        <div className="api-text">
                            The Movie DB API was utilized in creating the movie data for MUVI. Muvi is not endorsed or certified by TMDB.
                        </div>
                    </div>

                    <div className="container">
                        <div className ="mx-auto">
                            <img
                                alt="ruby on rails logo" 
                                src="https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-ruby-on-rails_l_primaria_1_1520261687.jpg"
                                width="100" height = "50"
                             />

                            <img
                                alt="react logo"
                                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                width="80" height = "80"
                            />
                            <img
                                alt="react redux"
                                src="https://img.stackshare.io/service/7374/react-redux.png"
                                width="80" height = "80"
                            />
                        </div>

                        <div className="buld-text-container">
                           Ruby on Rails was used in creating the api for Muvi.
                           React and Redux was user in creating the frontend.
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About
