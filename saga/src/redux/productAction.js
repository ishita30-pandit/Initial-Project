// import { PRODUCT_LIST } from "./constants"

// export const productReducer = (data = [], action) => {
//     switch (action.type) {
//         case PRODUCT_LIST:
//             return [action.data];

//         default:
//             return data

//     }
// }

import { PRODUCT_LIST } from "./constants"

export const ProductList = () => {
    let item = "Hello from product"
    return {
        type: PRODUCT_LIST,
        payload: item
    }
}