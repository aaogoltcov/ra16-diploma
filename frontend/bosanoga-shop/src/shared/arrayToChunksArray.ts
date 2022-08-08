import {ProductModel} from '../entites/models/Product.model';

/**
 * Возвращает массив деленный на блоки (чанки).
 * **/
export default function arrayToChunksArray(
	productList: ProductModel[],
	chunkSize: number
): ProductModel[][] {
	const productChunks = [];
	for (let i = 0; i < productList.length; i += chunkSize) {
		const chunk = productList.slice(i, i + chunkSize);
		productChunks.push(chunk);
	}
	return productChunks;
}