import { FETCH_TODOS,ADD_TODO} from "../actions/types";


const initialState = {
  data: []
};


export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_TODOS:
      console.log("Updating todos with payload:", action.payload);
      return {...state, data: action.payload };
 
      case ADD_TODO:
        return{...state,data:[state.data,action.payload]};

      default:
        return state;
  }
}