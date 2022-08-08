import React from 'react';
import ProductsCatalog from '../widgets/ProductsCatalog';
import {setIsHeaderProductsSearchVisible} from '../features/productsSlice';
import {useAppDispatch} from '../app/store';

/**
 * Представляет страницу с каталогом продукии.
 * **/
export default function Catalog() {
	const dispatch = useAppDispatch();
	dispatch(setIsHeaderProductsSearchVisible(true));

	return (
		<main className="container">
			<div className="row">
				<div className="col">
					<div className="banner">
						<img src={require('../assets/img/banner.jpg')} className="img-fluid" alt="К весне готовы!"/>
						<h2 className="banner-header">К весне готовы!</h2>
					</div>
					<ProductsCatalog isSearchField={true}/>
				</div>
			</div>
		</main>
	);
}