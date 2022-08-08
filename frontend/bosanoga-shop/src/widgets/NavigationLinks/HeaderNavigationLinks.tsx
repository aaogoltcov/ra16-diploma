import React from 'react';
import {NavigationLinkModel, NavigationLinks} from '../../entites/models/NavigationLink.model';
import NavigationLink from './NavigationLink/NavigationLink';

/**
 * Представляет список ссылок.
 * **/
export default function HeaderNavigationLinks({links}: NavigationLinks) {
	return (
		<ul className='navbar-nav mr-auto'>
			{links.map((link: NavigationLinkModel, index: number) => {
				return <NavigationLink url={link.url} name={link.name} isActive={link.isActive} key={index}/>;
			})}
		</ul>
	);
}