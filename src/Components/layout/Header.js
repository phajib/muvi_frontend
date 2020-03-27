import React from 'react'
// import Link  from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id="wrapper">
                    <div className="">
                        <h3 className="">MUVI</h3>
                        {/* <button className="button home-browse animated bounceIn">
                            <Link to="/movies">Search</Link> 
                        </button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
