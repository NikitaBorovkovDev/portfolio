import { useEffect, useRef } from 'react';
import './parallax.scss';
import Header from '../header/Header';
import {
	MouseParallaxChild,
	MouseParallaxContainer,
} from 'react-parallax-mouse';
import img from '../../images/bg-image.png';
import { isMobile } from 'react-device-detect';

interface IProps {
	children?: JSX.Element;
}

const Parallax = (props: IProps) => {
	const parallaxRef = useRef<HTMLDivElement>(null);
	const content = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollFactorForParallaxContent = 9;
		const scrollFactorForImage = 6;
		const image = document.querySelector<HTMLDivElement>(
			'.parallax__container'
		);

		if (parallaxRef.current) {
			const scrollFunc = () => {
				if (parallaxRef.current) {
					if (
						parallaxRef.current.offsetHeight - window.pageYOffset >
						0
					) {
						const scrollTopPercent =
							(window.pageYOffset /
								parallaxRef.current.offsetHeight) *
							100;
						setParallaxItemStyle(scrollTopPercent);
					}
				}
			};
			window.addEventListener('scroll', scrollFunc);
		}
		function setParallaxItemStyle(scrollTopPercent: number) {
			if (content.current && image) {
				content.current.style.transform = `translate(0%, -${
					scrollTopPercent / scrollFactorForParallaxContent
				}%)`;
				image.style.transform = `translate(0%, -${
					scrollTopPercent / scrollFactorForImage
				}%)`;
			}
		}
	}, [parallaxRef]);
	console.log('parallax');
	return (
		<div className="parallax" ref={parallaxRef}>
			<Header />
			<MouseParallaxContainer
				className="parallax__container"
				containerStyle={{
					position: 'fixed',
				}}
				resetOnLeave>
				<MouseParallaxChild
					className="parallax__image"
					factorX={isMobile ? 0 : -0.15}
					factorY={isMobile ? 0 : -0.15}
				/>
				<div className="parallax__content" ref={content}></div>
			</MouseParallaxContainer>
		</div>
	);
};

export default Parallax;
