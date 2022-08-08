import React, {useEffect} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../app/store';
import {
	letsProductsSearch,
	product,
	productAmount,
	productId,
	selectedSize, setProductAmount,
	setProductId, setSelectedSize
} from '../features/productsSlice';
import {useParams} from 'react-router';
import ProductSize from '../widgets/ProductSize';
import {nanoid} from 'nanoid';
import {setCartProductList} from '../features/cartSlice';

/**
 * Представляет страницу с продуктом.
 * **/
export default function Product() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const selectedProductSize = useAppSelector(selectedSize);
	const { id } = useParams();
	const chosenProductId = useAppSelector(productId);
	const chosenProduct = useAppSelector(product);
	const amountOfProducts = useAppSelector(productAmount);
	const productImage = chosenProduct.images && chosenProduct.images?.length > 0 ?  chosenProduct.images[0] : '';
	const buttonCartClassName = selectedProductSize.length > 0 ?
		'btn btn-danger btn-block btn-lg' :
		'btn btn-danger btn-block btn-lg disabled';
	const productSizeList = chosenProduct.sizes?.filter(size => size.avalible);
	const isSizesList = productSizeList && productSizeList.length > 0;

	function productAmountDecrement(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (amountOfProducts > 1 && amountOfProducts < 11) {
			dispatch(setProductAmount(amountOfProducts - 1));
		}
	}

	function productAmountIncrement(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (amountOfProducts >= 1 && amountOfProducts < 10) {
			dispatch(setProductAmount(amountOfProducts + 1));
		}
	}

	if (id && parseInt(id) > 0) {
		dispatch(setProductId(parseInt(id)));
	}

	useEffect(() => {
		dispatch(setSelectedSize(''));
		dispatch(setProductAmount(1));
	}, []);

	useEffect(() => {
		if (chosenProductId && chosenProductId > 0) {
			dispatch({
				type: 'getProduct',
			});
		}
	}, [chosenProductId]);

	function productClickEventHandler(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (chosenProduct.price && chosenProduct.title && selectedProductSize.length > 0) {
			dispatch(setCartProductList({
				id: chosenProduct.id,
				title: chosenProduct.title,
				size: selectedProductSize,
				price: chosenProduct.price,
				count: amountOfProducts,
			}));
			navigate('/cart');
		}
	}

	return (
		<main className="container">
			<div className="row">
				<div className="col">
					<div className="banner">
						<img src={require('../assets/img/banner.jpg')} className="img-fluid" alt="К весне готовы!" />
						<h2 className="banner-header">К весне готовы!</h2>
					</div>

					<section className="catalog-item">
						<h2 className="text-center">{chosenProduct.title}</h2>
						<div className="row">
							<div className="col-5">
								<img src={productImage}
									className="img-fluid" alt={chosenProduct.title} />
							</div>
							<div className="col-7">
								<table className="table table-bordered">
									<tbody>
										<tr>
											<td>Артикул</td>
											<td>{chosenProduct.sku}</td>
										</tr>
										<tr>
											<td>Производитель</td>
											<td>{chosenProduct.manufacturer}</td>
										</tr>
										<tr>
											<td>Цвет</td>
											<td>{chosenProduct.color}</td>
										</tr>
										<tr>
											<td>Материалы</td>
											<td>{chosenProduct.material}</td>
										</tr>
										<tr>
											<td>Сезон</td>
											<td>{chosenProduct.season}</td>
										</tr>
										<tr>
											<td>Повод</td>
											<td>{chosenProduct.reason}</td>
										</tr>
									</tbody>
								</table>
								<div className="text-center">
									<p>Размеры в наличии: {
										productSizeList?.map(size => <ProductSize key={nanoid()} size={size.size}/>)}</p>
									{isSizesList && <p>Количество: <span className="btn-group btn-group-sm pl-2">
										<button className="btn btn-secondary"
											onClick={productAmountDecrement}>-</button>
										<span className="btn btn-outline-primary">{amountOfProducts}</span>
										<button className="btn btn-secondary"
											onClick={productAmountIncrement}>+</button>
									</span>
									</p>}
								</div>
								{isSizesList && <button
									className={buttonCartClassName}
									onClick={productClickEventHandler}>В корзину</button>}
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}