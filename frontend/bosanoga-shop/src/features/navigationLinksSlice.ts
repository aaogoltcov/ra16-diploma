import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NavigationLinkModel} from 'entites/models/NavigationLink.model';
import {NavigationLinksConstants} from 'entites/models/NavigationLinks.constants';
import {RootState} from '../app/store';

export interface NavigationLinksState {
    headerNavigationLinks: NavigationLinkModel[];
    footerNavigationLinks: NavigationLinkModel[];
}

const initialState: NavigationLinksState = {
	headerNavigationLinks: [
		NavigationLinksConstants.main,
		NavigationLinksConstants.catalog,
		NavigationLinksConstants.about,
		NavigationLinksConstants.contacts,
	],
	footerNavigationLinks: [
		NavigationLinksConstants.about,
		NavigationLinksConstants.catalog,
		NavigationLinksConstants.contacts,
	],
};

/**
 * Представляет ссылки.
 * **/
export const navigationLinksSlice = createSlice({
	name: 'navigationLinks',
	initialState,
	reducers: {
		setActiveNavigationLink: (state, action: PayloadAction<string>) => {
			state.headerNavigationLinks = state.headerNavigationLinks.map(link => {
				if (link.name === action.payload) {
					link.isActive = true;
				} else {
					link.isActive = false;
				}
				return link;
			});
			state.footerNavigationLinks = state.footerNavigationLinks.map(link => {
				if (link.name === action.payload) {
					link.isActive = true;
				} else {
					link.isActive = false;
				}
				return link;
			});
		},
		setHeaderNavigationLinks: (state, action: PayloadAction<NavigationLinkModel[]>) => {
			state.headerNavigationLinks = action.payload;
		},
		setFooterNavigationLinks: (state, action: PayloadAction<NavigationLinkModel[]>) => {
			state.footerNavigationLinks = action.payload;
		},
	},
});

export const {
	setHeaderNavigationLinks,
	setFooterNavigationLinks,
	setActiveNavigationLink,
} = navigationLinksSlice.actions;
export default navigationLinksSlice.reducer;

export const headerNavigationLinks = (state: RootState) => state.navigationLinks.headerNavigationLinks;
export const footerNavigationLinks = (state: RootState) => state.navigationLinks.footerNavigationLinks;

