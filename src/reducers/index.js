import { FETCH_TODOS,ADD_TODO,DELETE_TODO ,UPDATE_TODO_STATUS,CATCH_TODO_ERROR} from "../actions/types";


const initialState = {
  data: []
};

//error/success message state.

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_TODOS:
      console.log("Updating todos with payload:", action.payload);
      return {...state, data: action.payload };
 
      case ADD_TODO:
        return{...state,data:[state.data,action.payload]};

      case DELETE_TODO:
        return {
          ...state,
          data: state.data.filter(todo => todo.id !== action.payload)
        };

      case UPDATE_TODO_STATUS:
        return {
          ...state,
          data: state.data.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          )
        };

        case CATCH_TODO_ERROR:
          return {
            ...state,
            error: action.payload
          };

      default:
        return state;
  }
}