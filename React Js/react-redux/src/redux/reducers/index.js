import {combineReducers} from "redux"
import { productReducer, selectedProductReducer } from "./productReducer"

const reducers = combineReducers({
    allproducts: productReducer, //allProduct is the key we use in useSelector Callback.
    singleProduct: selectedProductReducer
})

export default reducers