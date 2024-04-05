import { Routes, Route } from 'react-router-dom';
import { ProductPage, MainPage, AboutPage, ContactPage } from './pages';
import { ScrollToTop } from './components/ScrollToTop';
import FAQPage from './pages/FAQPage';

function App() {

	const pages = [
		{path: '/', element:<MainPage />},
		{path: '/about', element:<AboutPage />},
		{path: '/contact', element:<ContactPage />},
		{path: '/faq', element:<FAQPage />},
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
