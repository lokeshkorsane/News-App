import React from 'react'
import { Outlet,Link } from "react-router-dom";

const Sports = () => {
    return (
      <>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="nav-link active link-dark" aria-current="page" to="/sports/all">Sports</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/sports/cricket">Cricket</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/sports/football">Football</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


<Outlet />
       
      </>
    )
}
  
  export default Sports








/*const Sports = () => {
  return (
    <News url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0894111e580846cf80c553cc90b39958"/>
  )
}

export default Sports*/