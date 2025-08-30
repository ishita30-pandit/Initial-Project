import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constants"

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeToCart = (item) => {
    return {
        type: REMOVE_TO_CART,
        payload: item
    }
}

export const emptyCart = (item) => {
    return {
        type: EMPTY_CART,
        payload: item
    }
}
