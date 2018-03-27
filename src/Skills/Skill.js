import React from 'react';
import './skills.css';


const Skill = ({id, name, progressBar}) => {
	return(
		<div className="skillbox">
			<div className="imagebox">
				<img alt={"skill"} src={require(`./Skills/s${id}.png`)}/>	
			</div>
			<div className="magicbox">
				<h3>{name}</h3>
				<h3 className="progress">Skill Level: {progressBar}</h3>
			</div>	
			
		</div>
		
	);
}

export default Skill;