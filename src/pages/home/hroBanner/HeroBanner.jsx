import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
	const [background, setBackground] = useState("");
	const [query, setQuery] = useState("");
	const [showMouse, setMouse] = useState(true);
	const navigate = useNavigate();

	const { url } = useSelector((state) => state.home);

	const { data, loading } = useFetch("/movie/upcoming");
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", mouseHide);
		return () => {
			window.removeEventListener("scroll", mouseHide);
		};
	}, [lastScrollY]);

	useEffect(() => {
		const bg =
			url.backdrop +
			data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data]);
	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	const mouseHide = () => {
		if (window.scrollY > 100) {
			setMouse(false);
		} else {
			setMouse(true);
		}
		setLastScrollY(window.scrollY);
	};

	return (
		<div className='heroBanner'>
			{!loading && (
				<div className='backdrop_img'>
					<Img src={background} />
				</div>
			)}

			<div className='opacity-layer'>
				{showMouse && <div className='mouse'></div>}
			</div>

			<ContentWrapper>
				<div className='heroBannerContent'>
					<span className='title'>Welcome.</span>
					<span className='subTitle'>
						Millions of Movies, TV shows and people to discover.
						Explore Now.
					</span>
					<div className='searchInput'>
						<input
							type='text'
							placeholder='Search for a movie or tv show....'
							onKeyUp={searchQueryHandler}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<button>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
