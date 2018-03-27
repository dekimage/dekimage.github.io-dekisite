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
		<div> 

			<div className="Features"> 
			<h1 id="myFeatures"> My Features </h1>
				<div className="row1">
					<div className="feature">
						<img src={f1}/>
						<h2>Goals Oriented </h2>		
					</div>
					<div className="feature">	
						<img className="horse" src={f2}/>						
						<h2> Strategic Thinker </h2>
					</div>
					<div className="feature">
						<img className="airplane" src={f3}/>
						<h2> Ultra Responsive </h2>
					</div>
				</div>


				<div className="row1">
						<div className="feature">
							<img src={f4}/>
							<h2> High Achiever </h2>		
						</div>
						<div className="feature">
							<img src={f5}/>
							<h2> Open Minded </h2>
						</div>
						<div className="feature">
							<img src={f6}/>
							<h2> Visionery </h2>
						</div>
				</div>


				<div className="row1">
						<div className="feature">
							<img src={f7}/>
							<h2> Creative </h2>		
						</div>
						<div className="feature">
							<img src={f8}/>
							<h2> Fast Learner </h2>
						</div>
						<div className="feature">
							<img src={f9}/>
							<h2> Mindful</h2>
						</div>
				</div>	
			</div>
	 	</div>
	 );
}

export default Features;