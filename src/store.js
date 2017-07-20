import {createStore} from 'redux'

// Import reducers here
import cart from './ducks/cart' 

export default createStore(cart)