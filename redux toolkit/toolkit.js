import * as toolkit from "@reduxjs/toolkit"

// reducer
const { configureStore, createAction, createReducer} = toolkit;

const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})

const login = createAction("CREATE_SESSION")

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})


// store
const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer
    }
})

console.log("oncreate store : ", store.getState());


// subscribe
store.subscribe(() => {
    console.log("onchange store : ", store.getState());
})


// dispatch
// const action1 = addToCart({
//      id:1,
//      name: "fixie",
//      price: 1000000,
//   })

store.dispatch(addToCart({ id: 1, name: "fixie", price: 1000000 }))
store.dispatch(login())