import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/store';
import {selectedSize, setSelectedSize} from '../features/productsSlice';

/**
 * Представляет виджет с отображением вариантов размеров продукта.
 * **/
export default function ProductSize(props: { size: any; }) {
	const {size} = props;
	const dispatch = useAppDispatch();
	const selectedProductSize = useAppSelector(selectedSize);
	const productSizeClassname = selectedProductSize === size ? 'catalog-item-size selected' : 'catalog-item-size';

	function productSizeEventHandler(event: { preventDefault: () => void; }) {
		event.preventDefault();
		if (size === selectedProductSize) {
			dispatch(setSelectedSize(''));
		} else {
			dispatch(setSelectedSize(size));
		}
	}

	return (
		<span className={productSizeClassname} onClick={productSizeEventHandler}>{size}</span>
	);
}