import * as actions from '../actionTypes/actionTypes';

const initialState = {
  current_full_date: {},
  display_monthdays: [],
  display_year: '',
  display_month: '',
  display_date: '',
  selected_full_date: {},
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  weekdays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CURRENT_DATE: {
      let { current_year, current_month, current_date } = action.payload;
      return {
        ...state,
        current_full_date: { ...action.payload },
        display_year: current_year,
        display_month: current_month,
        display_date: current_date,
        selected_full_date: {
          year: current_year,
          month: current_month,
          date: current_date,
        },
      };
    }

    case actions.GET_DISPLAYED_MONTH_DAYS: {
      return { ...state, display_monthdays: action.payload };
    }

    case actions.GET_PREVIOUS_MONTH: {
      return { ...state, display_month: state.display_month - 1 };
    }

    case actions.GET_NEXT_MONTH: {
      return { ...state, display_month: state.display_month + 1 };
    }

    case actions.GET_PREVIOUS_YEAR: {
      return {
        ...state,
        display_year: state.display_year - 1,
        display_month: 11,
      };
    }

    case actions.GET_NEXT_YEAR: {
      return {
        ...state,
        display_year: state.display_year + 1,
        display_month: 0,
      };
    }

    case actions.UPDATE_YEAR_MONTH_DATE: {
      return {
        ...state,
        display_year: action.payload.year,
        display_month: action.payload.month,
        display_date: action.payload.date,
        selected_full_date: { ...action.payload },
      };
    }

    case actions.SELECTED_FULL_DATE: {
      return { ...state, selected_full_date: { ...action.payload } };
    }

    default: {
      return state;
    }
  }
};

export default calendarReducer;
