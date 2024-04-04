import { legacy_createStore }  from  "redux"

// reducer
const cartReducer = (
    state ={
        cart: [{
            id: 1,
            name: "fixie",
            price: 1000000,
        }],
    },
    action
    ) => {
        switch(action.type) {
            case "ADD_TO_CART": {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                }
            }
            default: return state
        }
    }

// store
const store = legacy_createStore(cartReducer)
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
    console.log("onchange store : ", store.getState());
})

// dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: {
        id: 2,
        name: "road bike",
        price: 1000000,
    },
}
const action2 = {
    type: "ADD_TO_CART",
    payload: {
        id: 5,
        name: "dildo ukuran xl",
        price: 10000,
    },
}
store.dispatch(action1)
store.dispatch(action2)