import React from 'react';
import './header.css';
import logo from './foxy.png';


const Header = ({onRouteChange}) => {
	return (
		<div className="header">
			<img src={logo} className="logo" alt={"logo"}/>
			<ul className="logoItems">
			
					<li onClick={() => onRouteChange('home')}> About Me </li>
					<li onClick={() => onRouteChange('portfolio')}> Portfolio </li>
					<li onClick={() => onRouteChange('skills')}> Skills </li>
					<li onClick={() => onRouteChange('features')}> Features </li>
					
			</ul>
				
			
		</div>
	);
}

export default Header;