import {ofType} from 'redux-observable';
import {tap, map, switchMap, retry, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {store, useAppSelector} from '../app/store';
import {
	addProductsByCategory,
	productsSearchField,
	setIsCanLoadMore,
	setLetsLoadMoreProducts,
	setLetsProductsSearch,
	setProduct,
	setProductIsError,
	setProductIsLoading,
	setProductsByCategory,
	setProductsByCategoryIsError,
	setProductsByCategoryIsLoading,
	setProductsSearchField,
	setTopSales,
	setTopSalesIsError,
	setTopSalesIsLoading
} from '../features/productsSlice';
import {ProductModel} from '../entites/models/Product.model';
import {Observable} from 'rxjs';
import {Action} from 'redux';
import {categories, categoryChosen} from '../features/categoriesSlice';
import {ProductCategoriesEnum} from '../entites/models/ProductCategory.model';

/**
 * Получает информацию по продукту.
 * **/
export const getProduct = (action$: Observable<Action>) => action$.pipe(
	ofType('getProduct'),
	tap(() => {
		store.dispatch(setProductIsLoading(true));
	}),
	switchMap(action => {
		const productId = store.getState().products.productId;
		const url = 'http://localhost:7070/api/items/' + productId;
		return ajax.getJSON(url)
			.pipe(
				retry(10),
				map(product => store.dispatch(setProduct(product as ProductModel))),
				tap(() => {
					store.dispatch(setProductIsLoading(false));
					store.dispatch(setProductIsError(false));
				}),
				catchError(error => {
					console.log(error);
					store.dispatch(setProductIsError(false));
					return of(error);
				}),
			);
	}
	),
);