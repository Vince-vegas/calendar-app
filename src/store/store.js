import { combineReducers, createStore } from 'redux';
import calendarReducer from './reducers/calendarReducer';
import meetingReducer from './reducers/meetingReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
  meetings: meetingReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
