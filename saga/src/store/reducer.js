import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constants"

export const reducer1 = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...data, action.payload];

        case REMOVE_TO_CART:
            data.length = data?.length ? data?.length - 1 : [];
            return [...data];

        case EMPTY_CART:
            return [];

        default:
            return []

    }
}