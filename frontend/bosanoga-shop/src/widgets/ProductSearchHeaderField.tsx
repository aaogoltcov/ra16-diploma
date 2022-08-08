import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../app/store';
import {
	isHeaderProductsSearchVisible,
	letsProductsSearch,
	productsByCategory,
	productsSearchField, setIsHeaderProductsSearchVisible, setLetsProductsSearch,
	setProductsSearchField
} from '../features/productsSlice';

/**
 * Представляет виджет с поиском продукии в хидере.
 * **/
export default function ProductSearchHeaderField() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const productsSearchFieldInput = useAppSelector(productsSearchField);
	const isProductsSearchVisible = useAppSelector(isHeaderProductsSearchVisible);
	const formClassName = isProductsSearchVisible ?
		'header-controls-search-form form-inline invisible' :
		'header-controls-search-form form-inline';

	function productsSearchFieldInputEvenHandler(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const value = event.currentTarget.value;
		dispatch(setProductsSearchField(value));
	}

	function letsProductsSearchEventHandler(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			event.preventDefault();
			navigate('catalog');
			dispatch(setLetsProductsSearch(true));
			dispatch(setIsHeaderProductsSearchVisible(false));
		}
	}

	return (
		<form data-id='search-form' className={formClassName}>
			<input className='form-control' 
				placeholder='Поиск' 
				onChange={productsSearchFieldInputEvenHandler}
				onKeyDown={letsProductsSearchEventHandler}
				value={productsSearchFieldInput}/>
		</form>
	);
}