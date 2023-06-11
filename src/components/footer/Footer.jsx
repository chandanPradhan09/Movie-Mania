import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footerStyle.scss";

const Footer = () => {
	return (
		<footer className='footer'>
			<ContentWrapper>
				<ul className='menuItems'>
					<li className='menuItem'>Terms Of Use</li>
					<li className='menuItem'>Privacy-Policy</li>
					<li className='menuItem'>Created By@Chandan</li>
					<li className='menuItem'>About</li>
					<li className='menuItem'>Blog</li>
					<li className='menuItem'>FAQ</li>
				</ul>
				<div className='infoText'>
					Welcome to Movie Mania, your go-to destination for
					comprehensive movie details. Discover a treasure trove of
					information about your favorite films, including cast
					members, ratings, plot summaries, and more. Whether you're a
					die-hard cinephile or simply seeking recommendations for
					your next movie night, Movie Mania has you covered. Dive
					into our meticulously curated database, updated regularly to
					ensure you have access to the latest and greatest in the
					world of cinema. Join us on this cinematic journey as we
					celebrate the art of storytelling through film. Sit back,
					relax, and let Movie Mania be your guide to the captivating
					world of movies.
				</div>
				<div className='socialIcons'>
					<a
						href='https://github.com/chandanPradhan09'
						target='_blank'
					>
						<span className='icon'>
							<FaGithub />
						</span>
					</a>
					<a
						href='https://www.linkedin.com/in/chandan09/'
						target='_blank'
					>
						<span className='icon'>
							<FaLinkedin />
						</span>
					</a>
					<a
						href='https://drive.google.com/file/d/1gYfQMgsdmBNJR1cH7HvQ4R1ZK6bo1AmH/view?usp=sharing'
						target='_blank'
					>
						<span className='icon'>
							<FaFilePdf />
						</span>
					</a>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
