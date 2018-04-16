import React from 'react';
import './skills.css';


const Skill = ({id, name, progressBar}) => {
	return(
		<div className="skillbox">

			<div className="flexer">
				<div className="imagebox">
					<img alt={"skill"} src={require(`./Skills/s${id}.png`)}/>	
				</div>
				<div className="magicbox">
					<h3 className="namebox">{name}</h3>
					<h3 className="progress">Skill Level:</h3>
				</div>	
			</div>

			<div id="progressbar">
  				<div id={name}>{progressBar}</div>
			</div>
			
		</div>
		
	);
}

export default Skill;