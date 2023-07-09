import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'src/style/waveButton.scss';
import './latestProject.scss';
import img2 from 'src/images/2.jpg';
import img3 from 'src/images/3.jpg';
import playerPage from 'src/images/player-page.png';
import player from 'src/images/player.png';
import gptImg from 'src/images/gpt.png';
import { useRef } from 'react';

const LatestProject = () => {
	const swiperRef = useRef<SwiperRef>(null);
	return (
		<section className="project" id="latestProject">
			<h2 className="project__heading">Projects</h2>
			<div className="swiper-pagination"></div>
			<Swiper
				autoHeight={true}
				ref={swiperRef}
				modules={[Navigation, Pagination]}
				loop={true}
				navigation={{
					enabled: true,
					nextEl: 'swiper-button-next',
					prevEl: 'swiper-button-prev',
				}}
				pagination={{ clickable: true, el: '.swiper-pagination' }}>
				<SwiperSlide>
					<div className="project__container store">
						<div className="project__desc">
							<div className="project__about">
								<h3 className="project__title">
									Интернет-магазин
								</h3>
								<p className="project__about-text regular-text">
									Небольшой интернет-магазин, с реализованной
									корзиной в локальном хранилище, динамически
									генерируемыми страницами товаров, поиском по
									названию и изменением цвет текста, на
									главном слайдере, в зависимости от фонового
									изображения
								</p>
								<div className="project__flex-container">
									<div className="project__list-container">
										<ul className="project__list">
											<h4 className="project__list-title">
												В проекте использовались:
											</h4>
											<li className="project__list-item regular-text">
												Redux, Redux Persist,{' '}
												<span>Redux Toolkit</span>
											</li>
											<li className="project__list-item regular-text">
												React Router Dom
											</li>
											<li className="project__list-item regular-text">
												TypeScript
											</li>
											<li className="project__list-item regular-text">
												Firebase
											</li>
											<li className="project__list-item regular-text">
												Swiper
											</li>
											<li className="project__list-item regular-text">
												Scss
											</li>
										</ul>
										<a
											href="https://net-store-bn.netlify.app"
											className="project__e-shop-link wave-button">
											<span className="wave-button__text">
												Просмотр
											</span>
											<span className="wave-button__waves"></span>
										</a>
									</div>
									<div className="project__images">
										<img
											src="https://s11.gifyu.com/images/SWNbF.gif"
											alt=""
											className="project__image"
										/>
										<img
											src={img3}
											alt=""
											className="project__image"
										/>
									</div>
								</div>
								<div className="project__links">
									<a
										href="https://www.figma.com/file/vKHkRcH44r1TnsXy59cAmd/Free-%234.-E-Commerce?node-id=0-1&t=3uau7hfyYf3r1QLW-0"
										className="project__figma-link underline-link neon">
										Макет Figma
									</a>
									<a
										href="https://github.com/NikitaBorovkovDev/ts-redux-net-store"
										className="project__github-link underline-link neon">
										Исходный код
									</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project__container">
						<div className="project__desc">
							<div className="project__about">
								<h3 className="project__title">
									Первый опыт в вёрстке
								</h3>
								<p className="project__about-text regular-text">
									Адаптив, слайдеры, простые и приятные
									анимации.
								</p>
								<div className="project__flex-container">
									<div className="project__list-container">
										<ul className="project__list">
											<h4 className="project__list-title">
												В проекте использовались:
											</h4>
											<li className="project__list-item regular-text">
												HTML
											</li>
											<li className="project__list-item regular-text">
												CSS
											</li>
											<li className="project__list-item regular-text">
												JS
											</li>
										</ul>
										<a
											href="https://first-complicated-layout.netlify.app"
											className="project__e-shop-link wave-button">
											<span className="wave-button__text">
												Просмотр
											</span>
											<span className="wave-button__waves"></span>
										</a>
									</div>
									<div className="project__images">
										<img
											src="https://s12.gifyu.com/images/SWNba.gif"
											alt=""
											className="project__image"
										/>
									</div>
								</div>
								<div className="project__links">
									<a
										href="https://www.figma.com/file/8T4byFDAV5REmnVyQlsFO1/clean_and_simple_website_freebie_work_file?node-id=3%3A2"
										className="project__figma-link underline-link neon">
										Макет Figma
									</a>
									<a
										href="https://github.com/NikitaBorovkovDev/first-little-complicated-layout"
										className="project__github-link underline-link neon">
										Исходный код
									</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project__container">
						<div className="project__desc">
							<div className="project__about">
								<h3 className="project__title">Мини игра</h3>
								<p className="project__about-text regular-text">
									Интерактивная форма ввода
								</p>
								<div className="project__flex-container">
									<div className="project__list-container">
										<ul className="project__list">
											<h4 className="project__list-title">
												В проекте использовались:
											</h4>
											<li className="project__list-item regular-text">
												HTML
											</li>
											<li className="project__list-item regular-text">
												CSS
											</li>
											<li className="project__list-item regular-text">
												JS
											</li>
										</ul>
										<a
											href="https://codepen.io/NikitaBorovkov/pen/GRYPqxr"
											className="project__e-shop-link wave-button">
											<span className="wave-button__text">
												Просмотр
											</span>
											<span className="wave-button__waves"></span>
										</a>
									</div>
									<div className="project__images">
										<img
											src="https://s12.gifyu.com/images/SWNbY.gif"
											alt=""
											className="project__image"
										/>
									</div>
								</div>
								<div className="project__links">
									<a
										href="https://github.com/NikitaBorovkovDev/interactive-input"
										className="project__github-link underline-link neon">
										Исходный код
									</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project__container player">
						<div className="project__desc">
							<div className="project__about">
								<h3 className="project__title">Плеер</h3>
								<p className="project__about-text regular-text">
									Плеер для воспроизведения аудио из ссылок.
									Без js страница адаптивна и корректно
									отображается, присутствует валидация формы и
									проверка url, при неверной ссылке
									показывается сообщение с типом ошибки. При
									буферизации показывается лоадер, прогресс
									бар показывает не только текущее время, но и
									прогресс буферизации. Последние 4 ссылки
									отображаются в подсказках к форме
								</p>
								<div className="project__flex-container">
									<div className="project__list-container">
										<ul className="project__list">
											<h4 className="project__list-title">
												В проекте использовались:
											</h4>
											<li className="project__list-item regular-text">
												React, TypeScript и CSS модули.
											</li>
											<li className="project__list-item regular-text">
												Сборщик Vite
											</li>
										</ul>
										<a
											href="https://audio-player-bn.netlify.app"
											className="project__e-shop-link wave-button">
											<span className="wave-button__text">
												Просмотр
											</span>
											<span className="wave-button__waves"></span>
										</a>
									</div>
									<div className="project__images">
										<img
											src={playerPage}
											alt=""
											className="project__image"
										/>
										<img
											src={player}
											alt=""
											className="project__image"
										/>
									</div>
								</div>
								<div className="project__links">
									<a
										href="https://www.figma.com/file/a5GiybFrpqEbalfx6RjND4/Open-Media-Frontend-test-task?type=design&node-id=0-1&t=wWV9JCDk4yUc7L09-0"
										className="project__figma-link underline-link neon">
										Макет Figma
									</a>
									<a
										href="https://github.com/NikitaBorovkovDev/test-assignment-open-media"
										className="project__github-link underline-link neon">
										Исходный код
									</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="project__container chatgpt">
						<div className="project__desc">
							<div className="project__about">
								<h3 className="project__title">Telegram bot</h3>
								<p className="project__about-text regular-text">
									Telegram bot для более удобного
									использования ChatGPT, поддерживает не
									только текст, но и голосовые сообщения +
									сохраняет контекст
								</p>
								<div className="project__flex-container">
									<div className="project__list-container">
										<ul className="project__list">
											<h4 className="project__list-title">
												В проекте использовались:
											</h4>
											<li className="project__list-item regular-text">
												Node.js
											</li>
											<li className="project__list-item regular-text">
												Axios
											</li>
											<li className="project__list-item regular-text">
												OpenAI Library, Telegraf
											</li>
											<li className="project__list-item regular-text">
												fluent-ffmpeg
											</li>
										</ul>
									</div>
									<div className="project__images">
										<img
											src={gptImg}
											alt=""
											className="project__image"
										/>
									</div>
								</div>
								<div className="project__links">
									<a
										href="https://github.com/NikitaBorovkovDev/chat-gpt"
										className="project__github-link underline-link neon">
										Исходный код
									</a>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<div className="project__container project__other">
					<span className="regular-text">Прочие проекты на </span>
					<a
						href="https://github.com/NikitaBorovkovDev"
						className="project__other-link underline-link neon">
						GitHub
					</a>
				</div>
			</Swiper>

			<div
				className="swiper-button-prev"
				onClick={() => {
					if (swiperRef.current) {
						swiperRef.current.swiper.slidePrev();
					}
				}}></div>
			<div
				className="swiper-button-next"
				onClick={() => {
					if (swiperRef.current) {
						swiperRef.current.swiper.slideNext();
					}
				}}></div>
		</section>
	);
};

export default LatestProject;
