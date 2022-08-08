import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Catalog from './Catalog';
import About from './About';
import Contacts from './Contacts';
import Product from './Product';
import Cart from './Cart';

/**
 * Представляет роутер.
 * **/
export const Routing = () => {
	return (
		<Routes>
			<Route path='' element={<Main />} />
			<Route path='catalog' element={<Catalog />} />
			<Route path='about' element={<About />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='catalog/:id' element={<Product />} />
			<Route path='cart' element={<Cart />} />
		</Routes>
	);
};
