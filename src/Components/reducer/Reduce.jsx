const taskReducer = (state, action) =>{
    switch(action.type){
        case "ADD_TASK":
        return [...state, {id:Date.now(),task:action.payload}];
        case "REMOVE_TASK":
        return state.filter((task)=>task.id != action.payload);
        case "REMOVE_ALL_TASK":
        return (state = [])
        default: 
        return state;
    }
}

export default taskReducer