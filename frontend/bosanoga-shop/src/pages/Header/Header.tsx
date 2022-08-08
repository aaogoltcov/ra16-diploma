import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {headerNavigationLinks} from '../../features/navigationLinksSlice';
import HeaderNavigationLinks from '../../widgets/NavigationLinks/HeaderNavigationLinks';
import {AppConstants} from '../../entites/models/App.constants';
import {useAppDispatch, useAppSelector} from 'app/store';
import ProductSearchHeaderField from '../../widgets/ProductSearchHeaderField';
import {isHeaderProductsSearchVisible, setIsHeaderProductsSearchVisible} from '../../features/productsSlice';
import {cartProductList} from '../../features/cartSlice';
import {useNavigate} from 'react-router-dom';

/**
 * Представляет хидер страницы.
 * **/
export default function Header() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const headerNavigationLinkList = useAppSelector(headerNavigationLinks);
	const isProductsSearchVisible = useAppSelector(isHeaderProductsSearchVisible);
	const cartProducts = useAppSelector(cartProductList);

	function searchHeaderEventHandler() {
		dispatch(setIsHeaderProductsSearchVisible(!isProductsSearchVisible));
	}

	function navigateToCart(event: React.MouseEvent<HTMLDivElement>) {
		event.preventDefault();
		navigate('/cart');
	}

	return (
		<header className='container'>
			<div className='row'>
				<div className='col'>
					<nav className='navbar navbar-expand-sm navbar-light bg-light'>
						<a className='navbar-brand' href='/'>
							<img src={require('../../assets/img/header-logo.png')} alt={AppConstants.shopName} />
						</a>
						<div className='collapase navbar-collapse' id='navbarMain'>
							<HeaderNavigationLinks links={headerNavigationLinkList} />
							<div>
								<div className='header-controls-pics'>
									<div
										data-id='search-expander'
										className='header-controls-pic header-controls-search'
										onClick={searchHeaderEventHandler}></div>
									<div className='header-controls-pic header-controls-cart' onClick={navigateToCart}>
										<div className='header-controls-cart-full'>{cartProducts.length}</div>
										<div className='header-controls-cart-menu'></div>
									</div>
								</div>
								<ProductSearchHeaderField />
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
