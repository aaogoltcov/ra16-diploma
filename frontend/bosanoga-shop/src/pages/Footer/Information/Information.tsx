import FooterNavigationLinks from '../../../widgets/NavigationLinks/FooterNavigationLinks';
import React from 'react';
import {NavigationLinks} from '../../../entites/models/NavigationLink.model';

/**
 * Представляет дополнительную информацию.
 * **/
export default function Information({links}: NavigationLinks) {
	return (
		<div className="col">
			<section>
				<h5>Информация</h5>
				<FooterNavigationLinks links={links} />
			</section>
		</div>
	);
}