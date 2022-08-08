import React, {MouseEventHandler, useEffect} from 'react';
import {ProductCategoryModel} from '../../../entites/models/ProductCategory.model';
import {useAppDispatch, useAppSelector} from '../../../app/store';
import {categoryChosen, setChosenCategory} from '../../../features/categoriesSlice';

/**
 * Представляет категорию продукта.
 * **/
export default function Category({id, title}: ProductCategoryModel) {
	const dispatch = useAppDispatch();
	const productsCategoryChosen = useAppSelector(categoryChosen);
	const categoryClassName = productsCategoryChosen === id ? 'nav-link active' : 'nav-link';

	function categoryClickEventHandler(event: { preventDefault: () => void; }) {
		event.preventDefault();
		dispatch(setChosenCategory(id));
	}

	return (
		<li className="nav-item" id={id.toString()}>
			<a className={categoryClassName}
				href="#"
				onClick={categoryClickEventHandler}>{title}</a>
		</li>
	);
}