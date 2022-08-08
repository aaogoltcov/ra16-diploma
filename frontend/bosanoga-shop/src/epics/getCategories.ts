import {ofType} from 'redux-observable';
import {map, switchMap, retry, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {of} from 'rxjs';
import {Observable} from 'rxjs';
import {Action} from 'redux';
import {setCategories} from '../features/categoriesSlice';
import {ProductCategoryModel} from '../entites/models/ProductCategory.model';

/**
 * Получает категории продуктов.
 * **/
export const getCategories = (action$: Observable<Action>) => action$.pipe(
	ofType('getCategories'),
	switchMap(() => ajax.getJSON('http://localhost:7070/api/categories')
		.pipe(
			retry(10),
			map(categories => setCategories(categories as ProductCategoryModel[])),
			catchError(error => {
				console.log(error);
				return of(error);
			}),
		)),
);