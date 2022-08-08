import MainPreloader from '../shared/MainPreloader';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/store';
import ProductCard from './ProductCard/ProductCard';
import {
	isCalLoadMore, letsLoadMoreProducts, letsProductsSearch,
	productsByCategory,
	productsByCategoryIsLoading, productsSearchField, setLetsLoadMoreProducts,
} from '../features/productsSlice';
import arrayToChunksArray from '../shared/arrayToChunksArray';
import {nanoid} from 'nanoid';
import {categoryChosen} from '../features/categoriesSlice';
import CategoryList from './CategoryList/CategoryList';
import ProductsSearchField from './ProductsSearchField';

/**
 * Представляет виджет с каталогом продукии.
 * **/
export default function ProductsCatalog(props: any) {
	const dispatch = useAppDispatch();
	const {isSearchField} = props;
	const productsByCategoryList = useAppSelector(productsByCategory);
	const productsByCategoryListIsLoading = useAppSelector(productsByCategoryIsLoading);
	const productsCategoryChosen = useAppSelector(categoryChosen);
	const isCanLoadProductsMore = useAppSelector(isCalLoadMore);
	const letsLoadMoreCatalogProducts = useAppSelector(letsLoadMoreProducts);
	const letsSearchProducts = useAppSelector(letsProductsSearch);

	let productsByCategoryChunks = arrayToChunksArray(productsByCategoryList, 3);

	function loadMoreProductsClickEventHandler(event: { preventDefault: () => void; }) {
		event.preventDefault();
		dispatch(setLetsLoadMoreProducts(true));
	}

	useEffect(() => {
		dispatch(
			{
				type: 'getProductsByCategories',
			}
		);
		dispatch(
			{
				type: 'getCategories',
			}
		);
	}, []);

	useEffect(() => {
		dispatch(
			{
				type: 'getProductsByCategories',
			}
		);
		productsByCategoryChunks = arrayToChunksArray(productsByCategoryList, 3);
	}, [productsCategoryChosen]);

	useEffect(() => {
		if (letsLoadMoreCatalogProducts) {
			dispatch(
				{
					type: 'getProductsByCategories',
				}
			);
			productsByCategoryChunks = arrayToChunksArray(productsByCategoryList, 3);
		}
	}, [letsLoadMoreCatalogProducts]);

	useEffect(() => {
		if (letsSearchProducts) {
			dispatch(
				{
					type: 'getProductsByCategories',
				}
			);
			productsByCategoryChunks = arrayToChunksArray(productsByCategoryList, 3);
		}
	}, [letsSearchProducts]);

	return (
		<section className="catalog">
			<h2 className="text-center">Каталог</h2>
			{isSearchField && <ProductsSearchField />}
			<CategoryList />
			{productsByCategoryListIsLoading && <MainPreloader/>}
			{productsByCategoryChunks.length > 0 &&
				productsByCategoryChunks.map(chunk =>
					<div className="row m-2" key={nanoid()}>
						{chunk.map(product => <ProductCard
							key={product.id}
							id={product.id}
							images={product.images}
							title={product.title}
							price={product.price}
						/>)}
					</div>
				)
			}
			{isCanLoadProductsMore &&
				<div className="text-center">
					<button
						className="btn btn-outline-primary"
						onClick={loadMoreProductsClickEventHandler}>Загрузить ещё</button>
				</div>}
		</section>
	);
}