import React from 'react';
import Skill from './Skill';
import './skills.css';


const SkillList = ({skills}) => {
	return (
		<div className="boxpos">
			<h1 className="skillz"> Skills </h1>
			<div className="skillFlex">
				{skills.map((skill, i)=>{
					return(
						<Skill 
						key={i}
						id={skills[i].id}
						name={skills[i].name}
						progressBar={skills[i].progressBar}
						/>
					);
				})

				}
			</div>
			
		</div>
	);
}

export default SkillList;