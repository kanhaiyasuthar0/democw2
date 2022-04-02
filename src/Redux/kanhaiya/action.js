//exporting the type
export const Add_Todo = "ADD_TODO";
export const Delete_Todo = "DELETE_TODO";

// exporting the payload for dispatch
export const addTodo = (payload)=>({
    // console.log(payload);
    type: Add_Todo,
    payload

    
})


export const deleteTodo = (payload)=>({
    
    type: Delete_Todo,
    payload

    
})