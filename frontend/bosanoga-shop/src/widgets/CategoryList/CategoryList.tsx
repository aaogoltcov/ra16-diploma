import React, {useEffect} from 'react';
import {ProductCategoriesEnum, ProductCategoryModel} from '../../entites/models/ProductCategory.model';
import {useAppDispatch, useAppSelector} from '../../app/store';
import {categories, categoryChosen} from '../../features/categoriesSlice';
import Category from './Category/Category';
import {nanoid} from 'nanoid';

/**
 * Представляет список категорий.
 * **/
export default function CategoryList() {
	const dispatch = useAppDispatch();
	const categoryList = useAppSelector(categories);

	useEffect(() => {
		dispatch(
			{
				type: 'getCategories',
			}
		);
	}, []);

	return (
		<ul className="catalog-categories nav justify-content-center">
			<Category key={nanoid()} id={ProductCategoriesEnum.allShoes} title='Все'/>
			{categoryList.length > 0 &&
                categoryList.map(category => <Category key={category.id} id={category.id} title={category.title}/>)}
		</ul>
	);
}