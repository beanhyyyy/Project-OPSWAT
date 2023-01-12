import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the pageSearchTrendingHashtag state domain
 */

const selectArticles = (state: any) => state.articles || initialState;

const makeSelectArticles = () => createSelector(selectArticles, (substate) => substate);

export { makeSelectArticles };
