import {
   UPDATE_BOOK
} from 'src/actions/actions';


const initState = {
   path: './md/README.md'
};

function reducer(state = initState, action) {
   let newState = {...state};

   switch(action.type) {
      case UPDATE_BOOK:
         newState.path = action.path;
         return newState;
      default:
         return state;
   }
}


export default reducer;