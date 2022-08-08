/**
 * Представляет модель категории продукта.
 * **/
export class ProductCategoryModel {
	/**
     * @param id Идентификатор.
     * @param title Наименование категории.
     * **/
	constructor(
        readonly id: number,
        readonly title: string,
	) {}
}

/**
 * Определяет категории продукта.
 * **/
export enum ProductCategoriesEnum {
	/**
	 * Мужская обувь
	 * **/
	allShoes = 11,

	/**
	 * Мужская обувь
	 * **/
	manShoes = 12,

	/**
	 * Женская обувь
	 * **/
	womenShoes = 13,

	/**
	 * Унисекс обувь
	 * **/
	unisexShoes = 14,

	/**
	 * Десткая обувь
	 * **/
	kidsShoes = 15,
}