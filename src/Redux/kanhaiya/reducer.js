import { Add_Todo , Delete_Todo } from "./action";

export const reducer = (store = {todo : []} , action)=>{ // action ko lananek dispacth
    switch (action.type) {
        case Add_Todo:
            console.log(store);
            return {
                ...store,  //  ...store = todo : []                        ]
                 todo :  [...store.todo ,action.payload]
               
               
            
         
            
                
            }
        case Delete_Todo:
            // console.log(store , action.payload);
            
            return {
                ...store,
                 todo : action.payload
                
                 
            }
            
    
        default:
            // break;
            return store
    }
}