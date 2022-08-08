import React from 'react';
import {NavigationLinkModel} from '../../../entites/models/NavigationLink.model';
import {useAppDispatch} from '../../../app/store';
import {setActiveNavigationLink} from '../../../features/navigationLinksSlice';
import {Link} from 'react-router-dom';

/**
 * Представляет ссылку.
 * **/
export default function NavigationLink({name, url, isActive}: NavigationLinkModel) {
	const dispatch = useAppDispatch();
	const navigationLinkClassName = isActive ? 'nav-item active' : 'nav-item';

	function navigationLinkClickEventHandler() {
		dispatch(setActiveNavigationLink(name));
	}

	return (
		<li className={navigationLinkClassName}>
			<Link className='nav-link' to={url} onClick={navigationLinkClickEventHandler}>{name}</Link>
		</li>
	);
}