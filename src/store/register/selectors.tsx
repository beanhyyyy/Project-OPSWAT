import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the pageSearchTrendingHashtag state domain
 */

const selectRegister = (state: any) => state.register || initialState;

const makeSelectRegister = () => createSelector(selectRegister, (substate) => substate);

export { makeSelectRegister };
