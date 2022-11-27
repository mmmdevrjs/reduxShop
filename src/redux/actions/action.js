import {
  ADD_TO_BASKET,
  REMOVE_TO_BASKET,
  DELETE_TO_BASKET,
} from "./actionTypes";

export const addToBascked = (product) => ({
  type: ADD_TO_BASKET,
  payload: product,
});

export const removeToBascked = (product) => ({
  type: REMOVE_TO_BASKET,
  payload: product,
});

export const deleteToBascked = (product) => ({
  type: DELETE_TO_BASKET,
  payload: product,
});
