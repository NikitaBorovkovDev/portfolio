import './footer.scss';

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="footer__container">
				<a
					href="mailto:nikitaborovkovnn@gmail.com"
					className="footer_email neon underline-link">
					NikitaBorovkovNN@gmail.com
				</a>
				<a
					href="tel:+79588369051"
					className="footer_tel neon underline-link">
					+7 958 836-90-51
				</a>
			</div>
			<div className="footer__container">
				<a
					href="https://codepen.io/NikitaBorovkov"
					className="footer_CodePen neon underline-link">
					CodePen
				</a>
				<a
					href="https://github.com/NikitaBorovkovDev"
					className="footer_GitHub neon underline-link">
					GitHub
				</a>
				<a
					className="footer_GitHub neon underline-link"
					href="https://nn.hh.ru/applicant/resumes/view?resume=ea37c114ff0be92f1b0039ed1f7577634d4b66">
					hh.ru
				</a>
			</div>
		</footer>
	);
};

export default Footer;
