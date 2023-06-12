import React, { useEffect, useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Upcoming = () => {
	const [endpoint, setEndpoint] = useState("movie");
	const [endpoint2, setEndpoint2] = useState("upcoming");

	const { data, loading } = useFetch(`/${endpoint}/${endpoint2}`);
	const onTabChange = (tab) => {
		setEndpoint(tab === "Movies" ? "movie" : "tv");
		setEndpoint2(tab === "Movies" ? "upcoming" : "on_the_air");
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Upcoming</span>
				<SwitchTabs
					data={["Movies", "TV Shows"]}
					onTabChange={onTabChange}
				/>
			</ContentWrapper>
			<Carousel
				endpoint={endpoint}
				data={data?.results}
				loading={loading}
			/>
		</div>
	);
};

export default Upcoming;
