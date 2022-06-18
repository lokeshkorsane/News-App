import React from 'react'
import { Outlet,Link } from "react-router-dom";

const World = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
  <Link className="nav-link active link-dark" aria-current="page" to="/world/all">All</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/in">India</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/us">United States</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/cn">China</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/jp">Japan</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/ru">Russia</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/gb">Britain</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/fr">France</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/ca">Canada</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/kr">South Korea</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/de">Germany</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/br">Brazil</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/au">Australia</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/it">Italy</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/world/tr">Turkey</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


<Outlet />
       
      </>
  )
}

export default World

