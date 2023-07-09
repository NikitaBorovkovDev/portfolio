import './about.scss';

const About = () => {
	return (
		<section className="about" id="about">
			<h2 className="about__heading">About me</h2>
			<div className="about__text">
				<ul className="about__list">
					<h3 className="about__list-title">
						Языки с которыми работаю:
					</h3>
					<li className="about__list-item regular-text">
						JavaScript
					</li>
					<li className="about__list-item regular-text">
						TypeScript
					</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">
						Основные используемые библиотеки:
					</h3>
					<li className="about__list-item regular-text">React</li>
					<li className="about__list-item regular-text">
						Redux (Redux Toolkit)
					</li>
					<li className="about__list-item regular-text">
						React Router v6
					</li>
					<li className="about__list-item regular-text">Axios</li>
					<li className="about__list-item regular-text">Swiper</li>
					<li className="about__list-item regular-text">clsx</li>
					<li className="about__list-item regular-text">Chroma</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">CSS-препроцессоры:</h3>
					<li className="about__list-item regular-text">SCSS</li>
					<li className="about__list-item regular-text">
						Tailwind CSS
					</li>
					<li className="about__list-item regular-text">
						CSS Modules
					</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">Сборщики:</h3>
					<li className="about__list-item regular-text">Webpack</li>
					<li className="about__list-item regular-text">Vite</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">Дополнительно:</h3>
					<li className="about__list-item regular-text">Git</li>
					<li className="about__list-item regular-text">Node.js</li>
					<li className="about__list-item regular-text">
						Базовые unit-тесты с использованием Jest и Testing
						Library
					</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">План развития:</h3>
					<li className="about__list-item regular-text">
						Styled components
					</li>
					<li className="about__list-item regular-text">
						Material UI
					</li>
					<li className="about__list-item regular-text">Next</li>
					<li className="about__list-item regular-text">Express</li>
					<li className="about__list-item regular-text">
						React Native
					</li>
				</ul>
				<ul className="about__list">
					<h3 className="about__list-title">О себе:</h3>
					<li className="about__list-item regular-text">
						Мне нравится самостоятельно учиться и решать трудные
						задачи. Стараюсь всегда быть вежливым, хорошо отношусь к
						критике и не боюсь обсуждать проблемы. Коллеги, друзья и
						знакомые обычно гораздо более высокого мнения обо мне,
						чем я.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
