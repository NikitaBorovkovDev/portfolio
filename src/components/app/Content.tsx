import About from '../about/About';
import Parallax from '../parallax/Parallax';
import LatestProject from '../lastProject/LatestProject';
import { useEffect } from 'react';
import Technologies from '../technologies/Technologies';
import Footer from '../footer/Footer';

interface IProps {
	onLoadEnd: () => void;
}

function Content(props: IProps) {
	useEffect(() => {
		if (document.querySelector('.loader')) {
			props.onLoadEnd();
		}
	}, []);
	return (
		<>
			<Parallax />
			<div className="content">
				<main className="container">
					<LatestProject />
					<Technologies />
					<About />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default Content;
