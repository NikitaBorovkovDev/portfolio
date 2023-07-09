import './Technologies.scss';

const Technologies = () => {
	return (
		<section className="technologies" id="technologies">
			<h2 className="technologies__heading">Technologies</h2>
			<div className="technologies__container">
				<ul className="technologies__list">
					<li className="technologies__list-item">
						<span>React,&nbsp;</span>
						<span>JavaScript ES6,&nbsp;</span>
						<span>Scss, Css</span>
					</li>
				</ul>
				<div className="technologies__progress-bar technologies__progress-bar-first"></div>
				<ul className="technologies__list">
					<li className="technologies__list-item">
						<span>Semantic,&nbsp;</span>
						<span>TypeScript,&nbsp;</span>
						<span>Redux (Redux Toolkit),&nbsp;</span>
						<span>React Router 6</span>
					</li>
				</ul>
				<div className="technologies__progress-bar technologies__progress-bar-second"></div>
				<ul className="technologies__list">
					<li className="technologies__list-item">
						<span>Accessibility,&nbsp;</span>
						<span>Git,&nbsp;</span>
						<span>Webpack,&nbsp;</span>
						<span>Tailwind CSS,&nbsp;</span>
						<span>Vite,&nbsp;</span>
						<span>Node.js,&nbsp;</span>
						<span>Jest & Testing Library</span>
					</li>
				</ul>
				<div className="technologies__progress-bar technologies__progress-bar-third"></div>
			</div>
		</section>
	);
};

export default Technologies;
