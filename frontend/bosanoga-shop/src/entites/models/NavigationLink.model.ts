/**
 * Представляет модель навигационной ссылки.
 * **/
export class NavigationLinkModel {
	/**
	 * @param name Наименование ссылки.
	 * @param url Адрес ссылки.
	 * @param isActive Признак активной ссылки.
	 * **/
	constructor(
		readonly name: string,
		readonly url: string,
		readonly isActive: boolean,
	) {}
}

/**
 * Представляет интерфейс списка навигационных ссылок.
 * **/
export interface NavigationLinks {
	links: NavigationLinkModel[],
}