import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the pageSearchTrendingHashtag state domain
 */

const selectTodo = (state: any) => state.todo || initialState;

const makeSelectTodo = () => createSelector(selectTodo, (substate) => substate);

export { makeSelectTodo };
