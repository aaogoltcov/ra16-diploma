import React from 'react';
import TopSales from '../widgets/TopSales';
import ProductsCatalog from '../widgets/ProductsCatalog';
import {setIsHeaderProductsSearchVisible, setProductsSearchField} from '../features/productsSlice';
import {useAppDispatch} from '../app/store';
import {setCartProductList} from '../features/cartSlice';
import {ProductCartModel} from '../entites/models/ProductCart.model';

/**
 * Представляет главную страницу.
 * **/
export default function Main() {
	const dispatch = useAppDispatch();
	dispatch(setProductsSearchField(''));
	dispatch(setIsHeaderProductsSearchVisible(true));

	return (
		<main className="container">
			<div className="row">
				<div className="col">
					<div className="banner">
						<img src={require('../assets/img/banner.jpg')} className="img-fluid" alt="К весне готовы!"/>
						<h2 className="banner-header">К весне готовы!</h2>
					</div>
					<TopSales />
					<ProductsCatalog isSearchField={false} />
				</div>
			</div>
		</main>
	);
}