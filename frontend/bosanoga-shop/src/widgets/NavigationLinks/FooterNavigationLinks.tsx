import React from 'react';
import {NavigationLinkModel, NavigationLinks} from '../../entites/models/NavigationLink.model';
import NavigationLink from './NavigationLink/NavigationLink';

export default function FooterNavigationLinks({links}: NavigationLinks) {
	return (
		<ul className='nav flex-column'>
			{links.map((link: NavigationLinkModel, index: number) => {
				return <NavigationLink url={link.url} name={link.name} isActive={link.isActive} key={index}/>;
			})}
		</ul>
	);
}