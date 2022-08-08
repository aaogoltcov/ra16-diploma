import { NavigationLinkModel } from 'entites/models/NavigationLink.model';

/**
 * Определяет константы навигации для ссылок.
 * **/
export class NavigationLinksConstants {
	/**
     * Возвращает на главную страницу.
     * **/
	static readonly main = new NavigationLinkModel('Главная', '/', true);

	/**
     * Возвращает путь 'О магазине'.
     * **/
	static readonly about = new NavigationLinkModel('О магазине', 'about', false);

	/**
     * Возвращает путь 'Каталог'.
     * **/
	static readonly catalog = new NavigationLinkModel('Каталог', 'catalog', false);

	/**
     * Возвращает путь 'Контакты'.
     * **/
	static readonly contacts = new NavigationLinkModel('Контакты', 'contacts', false);
}
