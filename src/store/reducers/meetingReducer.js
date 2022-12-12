import * as actions from '../actionTypes/actionTypes';

const meetingState = {
  isLoading: false,
  scheduled_meetings: [],
  openModal: false,
  sorting_categories: ['all', 'pending', 'on-going', 'done'],
  current_sorting_category: 'all',
  current_sorted: [],
};

const meetingReducer = (state = meetingState, action) => {
  switch (action.type) {
    case actions.GET_MEETINGS: {
      return { ...state, scheduled_meetings: action.payload };
    }

    case actions.DELETE_MEETING: {
      return {
        ...state,
        scheduled_meetings: state.scheduled_meetings.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case actions.MEETING_ADDED: {
      let { id, title, description, status, year, month, date, total_seconds } =
        action.payload.data;
      return {
        ...state,
        scheduled_meetings: state.scheduled_meetings.concat({
          id: id,
          title: title,
          description: description,
          status: status,
          year: year,
          month: month,
          date: date,
          total_seconds: total_seconds,
        }),
        openModal: false,
      };
    }

    case actions.TOGGLE_MEETING_MODAL: {
      return { ...state, openModal: !state.openModal };
    }

    // case actions.SET_SORTED_PENDING: {
    //   return {
    //     ...state,
    //     current_sorted: state.scheduled_meetings.filter(
    //       (item) => item.status === action.payload.category
    //     ),
    //   };
    // }

    // case actions.SET_SORTED_ONGOING: {
    //   return {
    //     ...state,
    //   };
    // }

    // case actions.SET_SORTED_DONE: {
    //   return {
    //     ...state,
    //   };
    // }

    case actions.SET_SORTING_TO_ALL: {
      return { ...state, current_sorted: action.payload };
    }

    case actions.START_SORTING_MEETINGS: {
      return {
        ...state,
        current_sorted: state.scheduled_meetings.filter(
          (item) => item.status === state.current_sorting_category
        ),
      };
    }

    case actions.SET_SORTING_CATEGORY: {
      return {
        ...state,
        // current_sorted: state.scheduled_meetings.filter(
        //   (item) => item.status === state.current_sorting_category
        // ),
        current_sorting_category: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default meetingReducer;
