import React from 'react';
import './body.css';
import me from './me.gif';
import route1 from '../Portfolio/projects/route1.png';
import route2 from '../Portfolio/projects/route2.png';
import route3 from '../Portfolio/projects/route3.png';



const Body = () => {
	return (
		<div>
			<div className="body1">
				<div className="textbox">
					<p> Welcome to my world! </p>
					<p className="bigp"> Let's build something great together! </p>
				</div>
			</div>

			<div className="aboutme">
				<h1> About me </h1>
				<img src={me} alt="me" className="me"/>
				<p className="aboutmetext2">Helloo there! My name is Dejan Gavrilovic and I am currently working to become an amazing full-stack developer.
				I can help you design, build and deploy beautiful websites and web applications! </p>
				
				<div className="linkis">

					<div className="containerB">
				  		<img src={route1} alt="Avatar" className="imageB"/>
				  		<div className="overlayB">
				   			<div className="textB">
				   				<p> My Projects </p>
							</div>
						</div>
					</div>

					<div className="containerB">
				  		<img src={route2} alt="Avatar" className="imageB"/>
				  		<div className="overlayB">
				   			<div className="textB">
				   				<p> My Skills</p>
							</div>
						</div>
					</div>

					<div className="containerB">
				  		<img src={route3} alt="Avatar" className="imageB"/>
				  		<div className="overlayB">
				   			<div className="textB">
				   				<p> My Features </p>
							</div>
						</div>
					</div>
					
					
					
				</div>
			</div>
		</div>
		
	);
}

export default Body;