interface IProps {}

const ModalLoader = (props: IProps) => {
	let loader = (
		<div className="loader" data-testid="loader">
			<div className="spinner"></div>
		</div>
	);

	return loader;
};

export default ModalLoader;
