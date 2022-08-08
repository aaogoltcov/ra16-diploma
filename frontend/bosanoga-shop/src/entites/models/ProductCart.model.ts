/**
 * Представляет модель продукта в корзине покупок.
 * **/

export class ProductCartModel {
	/**
	 * @param id Идентификатор.
	 * @param title Наименование продукта.
	 * @param size Размер.
	 * @param price Цена.
	 * @param count Количество
	 * **/
	constructor(
        readonly id: number,
		readonly title: string,
		readonly size: string,
        readonly price: number,
        readonly count: number,
	) {}
}