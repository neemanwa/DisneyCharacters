import {GET_DISNEY_CHAR_REDUCERS} from '../../Constants/constants';

const initialState = {
  disneyCharacters: []
};

function disneyCharReducer(state = initialState, action) {

  switch(action.type) {
    case GET_DISNEY_CHAR_REDUCERS:
      return {...state, disneyCharacters: action.payload};
    
    default:
      return state;
  }
}

export default disneyCharReducer;
