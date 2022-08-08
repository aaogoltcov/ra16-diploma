import MainPreloader from '../shared/MainPreloader';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../app/store';
import {topSales, topSalesIsLoading} from '../features/productsSlice';
import ProductCard from './ProductCard/ProductCard';
import arrayToChunksArray from '../shared/arrayToChunksArray';
import {nanoid} from 'nanoid';

/**
 * Представляет виджет с "Хитами продаж".
 * **/
export default function TopSales() {
	const dispatch = useAppDispatch();
	const topSalesList = useAppSelector(topSales);
	const isLoading = useAppSelector(topSalesIsLoading);

	const topSalesChunks = arrayToChunksArray(topSalesList, 3);

	useEffect(() => {
		dispatch({type: 'getTopSales'});
	}, []);

	return (
		<section className="top-sales">
			<h2 className="text-center">Хиты продаж!</h2>
			{isLoading && <MainPreloader/>}
			{topSalesChunks.length > 0 &&
				topSalesChunks.map(chunk =>
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
		</section>
	);
}