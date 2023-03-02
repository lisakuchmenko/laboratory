import { Routes, Route } from 'react-router-dom';
import { ProductPage, MainPage } from './pages';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/product/:product' element={<ProductPage />} />
		</Routes>
	);
}

export default App;
