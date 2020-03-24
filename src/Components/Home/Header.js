import React from 'react'
import Link  from 'react-router-dom'

function Header() {
    return (
        <div className="header ">
            <div id="wrapper">
                <div className="future-cop">
                    <h1 className="animated bounceIn">MUVI</h1>
                    <button className="button home-browse animated bounceIn">
                        <Link to="/movies">Search</Link> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header