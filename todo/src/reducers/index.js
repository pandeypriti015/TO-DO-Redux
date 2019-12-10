import { combineReducers} from "redux";

const INITAL_STATE = {
    items: [
        {title: 'Buy pen'},
        {title: 'Buy laptop'},
        {title: 'Buy Books'},
    ]
};

const todosReducer = (state = INITAL_STATE,action) => {
    switch(action.type) {
        case 'ITEM_CREATED':
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    todo: todosReducer,
})