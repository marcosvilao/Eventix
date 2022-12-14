import { GET_ALL_EVENTS, ERROR, ORDER_BY_NAME, FILTER_BY_DATE, GET_NAME_EVENT, GET_EVENT_ID, CREATE_EVENT, SORT, GET_ALL_EVENT_LIST } from "../actions";


const initialState = {
    events : [],
    allevent : [],
    eventsToFilter : [],
    error : {},
    post: {}
};


function rootReducer (state = initialState, action) {

    switch (action.type) {

        case GET_ALL_EVENTS:
            
            return {
                ...state,
                events: action.payload,
                eventsToFilter: action.payload
            }
        case GET_ALL_EVENT_LIST:
            
            return {
                ...state,
                allevent : action.payload
            }
        case ERROR:

            return {
                ...state,
                error: action.payload
            }
        case ORDER_BY_NAME:

            return {
                ...state,
                events: action.payload
            }
        case FILTER_BY_DATE:

            return {
                ...state,
                events: action.payload
            }
        
        case GET_NAME_EVENT:
            return {
                ...state,
                events : action.payload
            }
        case GET_EVENT_ID:
            return {
                ...state,
                events : action.payload
            }
        case CREATE_EVENT:
            return {
                ...state,
                post: action.payload
            }
        case SORT:
            return {
                ...state,
                events: action.payload
            }          
        default:
            
            return {
                ...state
            }
        }
}


export default rootReducer;