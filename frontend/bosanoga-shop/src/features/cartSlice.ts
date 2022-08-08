import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {ProductCategoriesEnum, ProductCategoryModel} from '../entites/models/ProductCategory.model';
import {NavigationLinkModel} from '../entites/models/NavigationLink.model';
import {OwnerModel} from '../entites/models/Owner.model';
import {ProductCartModel} from '../entites/models/ProductCart.model';
import { WritableDraft } from 'immer/dist/internal';

export interface CartState {
	ownerPhone: string;
	ownerAddress: string;
	ownerIsAgreeWithDelivery: boolean;
	cartProductList: ProductCartModel[];
	confirmOrderIsLoading: boolean,
	confirmOrderIsError: boolean,
}

const initialState: CartState = {
	ownerPhone: '',
	ownerAddress: '',
	ownerIsAgreeWithDelivery: false,
	cartProductList: [],
	confirmOrderIsLoading: false,
	confirmOrderIsError: false,
};

/**
 * Представляет корзину пользователя.
 * **/
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setOwnerPhone: (state, action: PayloadAction<string>) => {
			state.ownerPhone = action.payload;
		},
		setOwnerAddress: (state, action: PayloadAction<string>) => {
			state.ownerAddress = action.payload;
		},
		setOwnerIsAgreeWithDelivery: (state, action: PayloadAction<boolean>) => {
			state.ownerIsAgreeWithDelivery = action.payload;
		},
		setCartProductList: (state, action: PayloadAction<ProductCartModel>) => {
			const newProduct = action.payload;
			let isProductExist = false;
			const cartProductList = state.cartProductList.map(product => {
				if (
					product.id === newProduct.id &&
					product.size === newProduct.size &&
					product.price === newProduct.price
				) {
					product.count += newProduct.count;
					isProductExist = true;
				}
				return product;
			});
			if (isProductExist) {
				state.cartProductList = cartProductList;
				isProductExist = false;
			} else {
				state.cartProductList = [...state.cartProductList, ...[newProduct]];
			}
			window.sessionStorage.setItem('bosaNoga', JSON.stringify([...state.cartProductList]));
		},
		clearCartProductList: (state) => {
			state.cartProductList = [];
		},
		deleteFromCartProductList: (state, action: PayloadAction<number>) => {
			state.cartProductList = state.cartProductList.filter(product => product.id !== action.payload);
			window.sessionStorage.setItem('bosaNoga', JSON.stringify([...state.cartProductList]));
		},
		setConfirmOrderIsLoading: (state, action: PayloadAction<boolean>) => {
			state.confirmOrderIsLoading = action.payload;
		},
		setConfirmOrderIsError: (state, action: PayloadAction<boolean>) => {
			state.confirmOrderIsError = action.payload;
		},
	},
});

export const {
	setCartProductList,
	deleteFromCartProductList,
	setOwnerPhone,
	setOwnerAddress,
	setOwnerIsAgreeWithDelivery,
	clearCartProductList,
	setConfirmOrderIsLoading,
	setConfirmOrderIsError,
} = cartSlice.actions;
export default cartSlice.reducer;

export const cartProductList = (state: RootState) => state.cart.cartProductList;
export const ownerPhone = (state: RootState) => state.cart.ownerPhone;
export const ownerAddress = (state: RootState) => state.cart.ownerAddress;
export const ownerIsAgreeWithDelivery = (state: RootState) => state.cart.ownerIsAgreeWithDelivery;

