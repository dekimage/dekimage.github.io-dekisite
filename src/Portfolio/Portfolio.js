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
import route3 from './projects/route3.png';
import s1 from '../Skills/Skills/s1.png';
import s2 from '../Skills/Skills/s2.png';
import s3 from '../Skills/Skills/s3.png';
import s4 from '../Skills/Skills/s4.png';
import s5 from '../Skills/Skills/s5.png';
import s6 from '../Skills/Skills/s6.png';
import s8 from '../Skills/Skills/s8.png';
import s9 from '../Skills/Skills/s9.png';

const Portfolio = () => {
	return (
		
		<div className="portfoliobig">
			<h1 className="heading"> Portfolio of my personal projects </h1>
			<div className="images">
			

			<div className="card"> 
				<div className="container">
				  <img src={project1} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Omnifood Project</h5>
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/omnifood/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/omnifood" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div>

			<div className="card"> 
				<div className="container">
				  <img src={project2} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Budgety App</h5>
					
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/Budgety/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/Budgety" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project3} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Pig Game</h5>
					
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/PigGame/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/PigGame" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project4} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Puzzle Network Shop</h5>
					
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/PuzzleProject/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/PuzzleProject" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 


				<div className="card"> 
				<div className="container">
				  <img src={project9} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s2} alt="skill" />
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Mini Library View</h5>
					
				</div>

				<div className="buttons">
				<a href="https://github.com/dekimage/BooksView" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/BooksView" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project5} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s6} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">RoboFriends Search App</h5>
					
				</div>

				<div className="buttons">
				<a href="https://github.com/dekimage/robofriends" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/robofriends" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project6} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s3} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Background Generator</h5>
					
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/BackgroundGenerator/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/BackgroundGenerator" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project8} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Youtube Mini + APIs</h5>
					
				</div>

				<div className="buttons">
				<a href="https://github.com/dekimage/MiniVideoApp" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/MiniVideoApp" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project7} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s8} alt="skill" />
				   				<img src={s9} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Image Recognition AI-in progress...</h5>
					
				</div>

				<div className="buttons">
				<a href="https://github.com/dekimage/smartbrain" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/smartbrain" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={project10} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s4} alt="skill" />
				   				<img src={s5} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Weather Fetch App</h5>
					
				</div>

				<div className="buttons">
				<a href="https://github.com/dekimage/WeatherAPI" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://github.com/dekimage/WeatherAPI" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

			<div className="card"> 
				<div className="container">
				  <img src={route3} alt="Avatar" className="image"/>
				  	<div className="overlay">
				   		<div className="text">
				   			<div className="fleximages">
				   				<img src={s1} alt="skill" />
				   				<img src={s2} alt="skill" />
				   				<img src={s4} alt="skill" />
				   			</div>
				   		</div>
					</div>
				</div>
				<div className="textcard">
					<h5 className="cardtitle">Personal Portfolio Page</h5>
					
				</div>

				<div className="buttons">
				<a href="https://dekimage.github.io/dekisite/" target="_blank">
					<p href className="btnlink">Visit page</p></a>
					<a href="https://dekimage.github.io/dekisite/" target="_blank">
					<p href className="btngit">View Code</p> </a>
				</div>
			</div> 

				
				
			</div>
		</div>
	);
}
		
export default Portfolio;