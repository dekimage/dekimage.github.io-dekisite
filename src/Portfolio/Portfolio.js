import React from 'react';
import './portfolio.css';
import project1 from './projects/project1.png';
import project2 from './projects/project2.png';
import project3 from './projects/project3.png';
import project4 from './projects/project4.png';
import project5 from './projects/project5.png';
import project6 from './projects/project6.png';
import project7 from './projects/project7.png';
import project8 from './projects/project8.png';
import project9 from './projects/project9.png';
import project10 from './projects/project10.png';
import project11 from './projects/project11.png';
import s1 from '../Skills/Skills/s1.png';
import s2 from '../Skills/Skills/s2.png';
import s3 from '../Skills/Skills/s3.png';
import s4 from '../Skills/Skills/s4.png';
import s5 from '../Skills/Skills/s5.png';
import s6 from '../Skills/Skills/s6.png';
import s8 from '../Skills/Skills/s8.png';
import s11 from '../Skills/Skills/s11.png';

const Portfolio = () => {
	return(
		<div className="portfoliobig">
			<h1> Portfolio of my personal projects </h1>
			<div className="images">
			
				
				<div className="container">
				<a href="https://github.com/dekimage/omnifood"> target="_blank"
				  <img src={project1} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   			</div>
				   			<p> OmniFood Project </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/Budgety" target="_blank">
				  <img src={project2} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   			<p> Budgety App </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/PigGame" target="_blank">
				  <img src={project3} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   			<p> Pig Game </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/PuzzleProject" target="_blank">
				  <img src={project4} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   			</div>
				   			<p> Puzzle Network Shop </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/BooksView" target="_blank">
				  <img src={project9} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s2} alt="skill" />
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   			<p> Mini Library View </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/robofriends" target="_blank">
				  <img src={project5} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s6} alt="skill" />
				   			</div>
				   			<p> RoboFriends Search App </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/BackgroundGenerator" target="_blank">
				  <img src={project6} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   			<p> Background Generator </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/MiniVideoApp" target="_blank">
				  <img src={project8} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   			<p> Youtube Mini + APIs</p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://github.com/dekimage/smartbrain" target="_blank">
				  <img src={project7} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s8} alt="skill" />
				   				<img src={s11} alt="skill" />
				   			</div>
				   			<p> Image Recognition AI-in progress...</p>
				   		</div>
					</div>
					</a>
				</div>
				<div className="container">
				<a href="https://github.com/dekimage/WeatherAPI" target="_blank">
				  <img src={project10} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   			<p> Weather Fetch App </p>
				   		</div>
					</div>
					</a>
				</div>

				<div className="container">
				<a href="https://dekimage.github.io/dekisite/" target="_blank"> 
				  <img src={project11} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s4} alt="skill" />
				   			</div>
				   			<p> Personal Portfolio Page </p>
				   		</div>
					</div>
				</a>
				</div>
				
				
			</div>
		</div>
	);
}
		
export default Portfolio;