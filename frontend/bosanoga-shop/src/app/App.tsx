import React from 'react';
import './App.scss';
import { Routing } from 'pages/Routing';
import Header from 'pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import {clearCartProductList, setCartProductList} from '../features/cartSlice';
import {ProductCartModel} from '../entites/models/ProductCart.model';
import {useAppDispatch} from './store';

/**
 * Представляет центральный компонент приложения.
 * **/
function App() {
	const dispatch = useAppDispatch();

	// Загружает корзину пользователя.
	const cartProducts =
		(JSON.parse(window.sessionStorage.getItem('bosaNoga') ?? '[]'));
	if (cartProducts && cartProducts.length > 0) {
		dispatch(clearCartProductList());
		cartProducts.forEach((product: ProductCartModel) => dispatch(setCartProductList(product as ProductCartModel)));
	}
	
	return (
		<>
			<Header />
			<Routing />
			<Footer />
		</>
	);
}

export default App;
