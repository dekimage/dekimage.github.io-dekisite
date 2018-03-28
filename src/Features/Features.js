import React from 'react';
import './features.css';
import f1 from './features/f1.png';
import f2 from './features/f2.png';
import f3 from './features/f3.png';
import f4 from './features/f4.png';
import f5 from './features/f5.png';
import f6 from './features/f6.png';
import f7 from './features/f7.png';
import f8 from './features/f8.png';
import f9 from './features/f9.png';

const Features = () => {
	return(
		<div className="backgroundfeat"> 
		
			<div className="Features"> 
			<h1 id="myFeatures"> My Features </h1>
				<div className="row1">
					<div className="feature">
						<img src={f1} alt="feature"/>
						<h2>Goals Oriented </h2>		
					</div>
					<div className="feature">	
						<img className="horse" src={f2} alt="feature"/>						
						<h2> Strategic Thinker </h2>
					</div>
					<div className="feature">
						<img className="airplane" src={f3} alt="feature"/>
						<h2> Ultra Responsive </h2>
					</div>
				</div>


				<div className="row1">
						<div className="feature">
							<img src={f4} alt="feature"/>
							<h2> High Achiever </h2>		
						</div>
						<div className="feature">
							<img src={f5} alt="feature"/>
							<h2> Open Minded </h2>
						</div>
						<div className="feature">
							<img src={f6} alt="feature"/>
							<h2> Visionary </h2>
						</div>
				</div>


				<div className="row1">
						<div className="feature">
							<img src={f7} alt="feature"/>
							<h2> Creative </h2>		
						</div>
						<div className="feature">
							<img src={f8} alt="feature"/>
							<h2> Fast Learner </h2>
						</div>
						<div className="feature">
							<img src={f9} alt="feature"/>
							<h2> Mindful</h2>
						</div>
				</div>	
			</div>
	 	</div>
	 );
}

export default Features;