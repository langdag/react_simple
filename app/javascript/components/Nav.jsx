import React from 'react'
import Select from '../components/Select'

const Nav = props => {
   return (
   	<div>
    	<ul className="nav nav-pills">
    	  <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
    	  <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
    	  <li className="nav-item"><a className="nav-link" href="#">Messages</a></li>
    	</ul>
    	<Select />
    </div>
  )
};

export default Nav