import React from 'react';
import { NavLink } from 'react-router-dom';
import Discussion from './discussion';

export default function() {
  return(
    <div>
			
      <div>
        <NavLink exact to="/">Discussion</NavLink>
      </div>

			<div>
        <NavLink exact to="/rules">Rules</NavLink>
      </div>

			<div>
        <NavLink exact to="/workflow">Workflow</NavLink>
      </div>

    </div>
    )
}