/**
 * Представляет модель покупателя.
 * **/

export class OwnerModel {
	/**
	 * @param phone Телефон покупателя.
	 * @param address Адресс покупателя.
	 * @param isAgreeWithDelivery Признак согласия с условиями доставки.
	 * **/
	constructor(
        readonly phone: string,
        readonly address: string,
		readonly isAgreeWithDelivery: boolean,
	) {}
}