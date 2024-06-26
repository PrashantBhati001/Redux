const redux=require('redux')
const createStore=redux.createStore


const BUY_CAKE="BUY_CAKE"
//Action creator
function buyCake()
{
    return {
        type:BUY_CAKE
    }
}

//state of the application
const initialState={
    numOfCakes:10
}
//Reducer
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_CAKE:return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

const store=createStore(reducer)

console.log("Initial State",store.getState())
const unsubscribe=store.subscribe(()=>{console.log("updated state",store.getState())});
store.dispatch(buyCake())
unsubscribe()