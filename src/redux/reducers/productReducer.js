import {
  ADD_TO_BASKET,
  REMOVE_TO_BASKET,
  DELETE_TO_BASKET,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  product: [],
  basket: [],
};

const addToBasket = (state, product) => {
  // const basket = state.basket;
  // if (basket?.length && basket.filter((pr) => pr.id === product.id).length) {
  //   basket.filter((pr) =>
  //     pr.id === product.id ? { ...pr, count: pr.count++ } : pr
  //   );
  // } else basket.push({ ...product, count: 1 });
  // return { ...state, basket };
  const basket = state.basket;
  const prod = basket.find((pr) => pr.id === product.id);
  console.log(prod);

  if (prod) {
    basket.map((pr) =>
      pr.id === product.id ? { ...basket, count: pr.count++ } : pr
    );
  } else {
    basket.push({ ...product, count: 1 });
  }
  // console.log(basket);
  return { ...state, basket };
};

const removeToBasket = (state, product) => {
  console.log("state", state);
  const basket = state.basket;
  const prod = basket.find((pr) => pr.id === product.id);

  if (prod.count > 1) {
    basket.map((pr) =>
      pr.id === product.id ? { ...basket, count: pr.count-- } : pr
    );
  } else {
    basket.forEach((pr, index) => {
      if (pr.id === product.id) {
        basket.splice(index, 1);
      }
    });
  }

  return { ...state, basket };
};

const deleteToBascked = (state, product) => {
  const basket = state.basket;
  basket.forEach((pr, index) => {
    if (pr.id === product.id) {
      basket.splice(index, 1);
    }
  });
  return { ...product, basket };
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return addToBasket(state, action.payload);
    case REMOVE_TO_BASKET:
      return removeToBasket(state, action.payload);
    case DELETE_TO_BASKET:
      return deleteToBascked(state, action.payload);
    default:
      return state;
  }
};
