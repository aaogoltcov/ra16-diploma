import { configureStore } from '@reduxjs/toolkit';
import navigationLinksSlice from 'features/navigationLinksSlice';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import productsSlice from '../features/productsSlice';
import {getTopSales} from '../epics/getTopSales';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {getProductsByCategories} from '../epics/getProductsByCategories';
import categoriesSlice from '../features/categoriesSlice';
import {getCategories} from '../epics/getCategories';
import {getProduct} from '../epics/getProduct';
import cartSlice from '../features/cartSlice';
import {confirmOrder} from '../epics/confirmOrder';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(
	getTopSales,
	getProductsByCategories,
	getCategories,
	getProduct,
	confirmOrder,
);

export const store = configureStore({
	reducer: {
		navigationLinks: navigationLinksSlice,
		products: productsSlice,
		categories: categoriesSlice,
		cart: cartSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		thunk: false,
		serializableCheck: false,
	}).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;