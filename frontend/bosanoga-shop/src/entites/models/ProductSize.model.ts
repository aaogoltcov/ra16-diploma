/**
 * Представляет модель размера продукта.
 * **/
export class ProductSizeModel {
	/**
     * @param size Размер продукта.
     * @param available Признак доступности продукта.
     * **/
	constructor(
        readonly size: string,
        readonly avalible: boolean,
	) {}
}