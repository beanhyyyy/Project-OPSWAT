import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the pageSearchTrendingHashtag state domain
 */

const selectLogin = (state: any) => state.login || initialState;

const makeSelectLogin = () => createSelector(selectLogin, (substate) => substate);

export { makeSelectLogin };
