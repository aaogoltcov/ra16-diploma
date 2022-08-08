import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/store';
import {
	letsProductsSearch,
	productsByCategory,
	productsSearchField, setLetsProductsSearch,
	setProductsSearchField
} from '../features/productsSlice';

/**
 * Представляет виджет с поиском продукии.
 * **/
export default function ProductsSearchField() {
	const dispatch = useAppDispatch();
	const productsSearchFieldInput = useAppSelector(productsSearchField);

	function productsSearchFieldInputEvenHandler(event: React.ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
		const value = event.currentTarget.value;
		dispatch(setProductsSearchField(value));
	}

	function letsProductsSearchEventHandler(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			event.preventDefault();
			dispatch(setLetsProductsSearch(true));
		}
	}
    
	return (
		<form className="catalog-search-form form-inline">
			<input 
				className="form-control" 
				placeholder="Поиск"
				onChange={productsSearchFieldInputEvenHandler}
				onKeyDown={letsProductsSearchEventHandler}
				value={productsSearchFieldInput}/>
		</form>
	);
}