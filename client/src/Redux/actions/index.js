import axios from "axios";

//-------------------------------------------------
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";

export const ERROR = "ERROR";

export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const FILTER_BY_DATE = "FILTER_BY_DATE";

//-------------------------------------------------
const URL = "http://localhost:3000"
//-------------------------------------------------



export const getAllEvents = () => {

    return async function (dispatch){

        try {
            
            const event = await axios.get(`${URL}/events`);

            dispatch({

                type: GET_ALL_EVENTS,
                payload: event.data
            });

        } catch (error) {
            
            dispatch({

                type: ERROR,
                payload: error.message
            });
        };
    };
};

export const orderByName = (order) => {

    return async function (dispatch){

        try {
            
            const eventOrder = await axios.get(`${URL}/order`, order);

            dispatch({

                type: ORDER_BY_NAME,
                payload: eventOrder.data
            })

        } catch (error) {
            
            dispatch({

                type: ERROR,
                payload: error.message
            })
        };
    };
};

export const filterByDate = (date) => {

    return async function (dispatch){

        try {
            
            const eventDate = await axios.get(`${URL}/filterdate`, date);

            dispatch({

                type: FILTER_BY_DATE,
                payload: eventDate.data
            })

        } catch (error) {
         
            dispatch({

                type: ERROR,
                payload: error.message
            })
        };
    };
};