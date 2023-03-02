import { createContext, useState, useEffect } from 'react';
import { productData } from '../../data';
import { useLocation } from 'react-router-dom';

export const AppContext = createContext(null);
export const AppContextProvider = ({ children }) => {
	const { pathname } = useLocation();
	const productName = pathname.split('/')[2];

	// get product data from productData array
	const [product, setProduct] = useState(productData.find((el) => el.name === productName) || productData[0]);
	const [cart, setCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	//refresh page when product is changed
	useEffect(() => {
		setProduct(productData.find((el) => el.name === productName));
	}, [productName]);

	const value = {
		productData,

		product,
		setProduct,

		cart,
		setCart,

		openCart,
		setOpenCart,

		openMenu,
		setOpenMenu,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
