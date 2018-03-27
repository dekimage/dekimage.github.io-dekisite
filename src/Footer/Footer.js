import React from 'react';
import './footer.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



const Footer = () => {
	return (
		<div className="footer1">
			<div className="footerblock">
			
			<ul className="socialMenu">
				<div className="socialicon1">
					<li><SocialIcon url="https://www.linkedin.com/in/dejan-gavrilovik/" /></li>
				</div>
				<div className="socialicon2">
					<li><SocialIcon url="mailto:dejan.gavrilovikk@gmail.com" /></li>
				</div>
				<div className="socialicon3">
					<li><SocialIcon url="https://github.com/dekimage" /></li>
				</div>
				<div className="socialicon4">
					<li><SocialIcon url="https://www.facebook.com/dejan.gavrilovic.73" /></li>
				</div>
			</ul>
		
			<h2 className="copyright"> Copyright Dejan Gavrilovic © 2018 </h2>
			</div>
		</div>
	);
}

export default Footer;