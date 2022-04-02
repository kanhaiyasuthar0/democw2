// type of the action
 
export const INC_COUNT = 'INC_COUNT';

// action creator function which returns an obje
export const updateTodo = (payload)=>{
    return { 
        type:INC_COUNT,
      payload,
    }
}


// obj is basically {type:"INC_COUNT", payload:1}