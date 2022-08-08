import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {ProductCategoriesEnum, ProductCategoryModel} from '../entites/models/ProductCategory.model';
import {NavigationLinkModel} from '../entites/models/NavigationLink.model';

export interface CategoriesState {
    categoryList: ProductCategoryModel[];
	categoryChosen: number;
}

const initialState: CategoriesState = {
	categoryList: [],
	categoryChosen: ProductCategoriesEnum.allShoes,
};

/**
 * Представляет категории продуктов.
 * **/
export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories: (state, action: PayloadAction<ProductCategoryModel[]>) => {
			state.categoryList = action.payload;
		},
		setChosenCategory: (state, action: PayloadAction<number>) => {
			state.categoryChosen = action.payload;
		}
	},
});

export const { setCategories, setChosenCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const categories = (state: RootState) => state.categories.categoryList;
export const categoryChosen = (state: RootState) => state.categories.categoryChosen;

