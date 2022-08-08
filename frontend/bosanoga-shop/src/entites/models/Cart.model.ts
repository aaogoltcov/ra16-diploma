import {OwnerModel} from './Owner.model';
import {ProductCartModel} from './ProductCart.model';

/**
 * Представляет модель корзины покупок.
 * **/
export class CartModel {
	/**
     * @param owner Покупатель.
     * @param items Список покупок.
     * **/
	constructor(
        readonly owner: OwnerModel,
        readonly items: ProductCartModel[],
	) {}
}