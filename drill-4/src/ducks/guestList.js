const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';
const UPDATE_GUEST = 'UPDATE_GUEST';

const initialState = {
  guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
};

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}

export function removeGuest(i) {
  return {
    type: REMOVE_GUEST,
    payload: i
  }
}

export function updateName( name, index){
  return{
    type: UPDATE_GUEST,
    payload: {
      name: name,
      index: index,
    }
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return Object.assign({}, state, {guests: [...state, action.payload]});
    case REMOVE_GUEST:
      return Object.assign({}, state, {guests: state.guests.filter((guest, i) => i !== action.payload)});
    case UPDATE_GUEST:
    return {
      guests: state.guests.map( (name, i ) => {
        if( action.payload.index === i) return action.payload.name;
        return name;
      })
    }
    default:
      return state;
    }
}
