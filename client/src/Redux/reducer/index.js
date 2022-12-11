


const initialState = {
    events : [],
    error : {}
};


function rootReducer (state = initialState, action) {

    switch (action.type) {

        case GET_ALL_EVENTS:
            
            return {
                ...state,
                events: action.payload,
                eventsToFilter: action.payload
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

            }
        default:
            
            return {
                ...state
            }
    };
};

export default rootReducer;