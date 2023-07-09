import { lazy, useState } from 'react';
import ModalLoader from '../modalLoader/ModalLoader';
const Content = lazy(() => import('./Content'));

const App = () => {
	const [loadEnd, setLoadEnd] = useState(false);

	const handleLoadEnd = () => {
		setTimeout(() => {
			document.querySelector<HTMLDivElement>(
				'.spinner'
			)!.style.transform = 'scale(0)';
			document.querySelector<HTMLDivElement>('.loader')!.style.opacity =
				'0';
			setTimeout(() => {
				setLoadEnd(true);
			}, 300);
		}, 500);
	};
	return (
		<>
			{loadEnd ? null : <ModalLoader />}
			<Content onLoadEnd={handleLoadEnd} />
		</>
	);
};

export default App;
