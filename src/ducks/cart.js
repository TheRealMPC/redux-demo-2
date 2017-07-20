// Initial State
const initialState = {
   items: [
      {
         id: 1,
         species: "Beluga",
         name: "Forehead",
         price: 50
      },
      {
         id: 2,
         species: "Blue",
         name: "Tiny",
         price: 100
      },
      {
         id: 3,
         species: "Killer",
         name: "Terminator",
         price: 100
      },
   ],
   cart: [],
   currentItem: {}
}

// Actions (constants)
const ADD_ITEM = 'ADD_ITEM'
const ADD_CURRENT_ITEM = 'ADD_CURRENT_ITEM'

// Action Creators (functions that we export to components)
export function addItem(item) {
   return {
      type: ADD_ITEM,
      payload: item
   }
}

export function addCurrentItem(item) {
   return {
      type: ADD_CURRENT_ITEM,
      payload: item
   }
}

// Reducer (function we default export to store)
export default function cartReducer(state=initialState, action) {
   switch(action.type) {
      case ADD_ITEM:
         // let newCart = state.cart.slice()
         // newCart.push(action.payload)
         return Object.assign({}, state, {cart: [...state.cart, action.payload]})
      case ADD_CURRENT_ITEM:
         return Object.assign({}, state, {currentItem: action.payload})
      default:
         return state
   }
   
}