// taking action and act on that action then update the state according to that action
// then updated value of obj should be passed to the global store object

import {INC_COUNT} from './action';




export const reducer = (store={count : 0},{type,payload})=>{
    switch (type){
     
        case INC_COUNT:
            return{
                ...store,
                count:payload+store.count
            }

            default:
                return store
    }
}

// store={reducer,{count:0,todos:[{},{},{}]}}