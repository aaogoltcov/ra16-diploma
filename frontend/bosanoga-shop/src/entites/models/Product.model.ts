import {ProductSizeModel} from './ProductSize.model';

/**
 * Представляет модель продукта.
 * **/
export class ProductModel {
	/**
     * @param id Идентификатор.
     * @param category Категория продукта.
     * @param title Наименование продукта.
     * @param images Ссылки на фотографии продукта.
     * @param sku Единица складского учета.
     * @param manufacturer Производитель.
     * @param color Цвет продукта.
     * @param material Материал продукта.
     * @param reason Назначение.
     * @param season Сезон.
     * @param heelSize Размер каблука.
     * @param price Цена.
     * @param oldPrice Старая цена.
     * @param sizes Список доступных размеров продукта.
     * **/
	constructor(
        readonly id: number,
        readonly category?: number,
        readonly title?: string,
        readonly images?: string[],
        readonly sku?: string,
        readonly manufacturer?: string,
        readonly color?: string,
        readonly material?: string,
        readonly reason?: string,
        readonly season?: string,
        readonly heelSize?: string,
        readonly price?: number,
        readonly oldPrice?: number,
        readonly sizes?: ProductSizeModel[],
	) {}
}