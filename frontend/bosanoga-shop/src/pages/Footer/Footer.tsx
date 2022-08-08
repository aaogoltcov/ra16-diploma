import React from 'react';
import {useSelector} from 'react-redux';
import {footerNavigationLinks} from '../../features/navigationLinksSlice';
import Contacts from './Contacts/Contacts';
import Information from './Information/Information';
import Payments from './Payment/Payments';
import {useAppSelector} from '../../app/store';

/**
 * Представляет футер.
 * **/
export default function Footer() {
	const footerNavigationLinkList = useAppSelector(footerNavigationLinks);
	return (
		<footer className="container bg-light footer">
			<div className="row">
				<Information links={footerNavigationLinkList} />
				<Payments />
				<Contacts />
			</div>
		</footer>
	);
}