import { Routes, Route } from 'react-router-dom';
import { ProductPage, MainPage } from './pages';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
	return (
		<ScrollToTop>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/product/:product' element={<ProductPage />} />
			</Routes>
		</ScrollToTop>
	);
}

export default App;
