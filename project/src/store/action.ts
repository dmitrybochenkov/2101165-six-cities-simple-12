import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeCity = createAction<string>('data/changeCity');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const loadOffersByCity = createAction('data/loadOffersByCity');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setAuthorizationStatus = createAction<string>('user/setAuthorizationStatus');
