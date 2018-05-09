import { createStore } from 'redux';
import guestList_reducer from './ducks/guestList';

export default createStore(guestList_reducer);