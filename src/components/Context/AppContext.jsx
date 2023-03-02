import { createContext, useState } from 'react';
import { productData } from '../../data';

export const AppContext = createContext(null);
export const AppContextProvider = ({ children }) => {
	const [product, setProduct] = useState(productData[0]);
	const [cart, setCart] = useState([]);
	const [openCart, setOpenCart] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const value = {
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
