import { Routes, Route } from 'react-router-dom';
import { ProductPage, MainPage, AboutPage, ContactPage } from './pages';
import { ScrollToTop } from './components/ScrollToTop';

function App() {

	const pages = [
		{path: '/', element:<MainPage />},
		{path: '/about', element:<AboutPage />},
		{path: '/contact', element:<ContactPage />},
		{path: '/product/:product', element:<ProductPage />},
	]

	return (
		<ScrollToTop>
			<Routes>
				{pages.map( ({path, element })=> <Route key={path} path={path} element={element}/>)}
			</Routes>
		</ScrollToTop>
	);
}

export default App;
