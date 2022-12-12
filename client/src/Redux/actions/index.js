import axios from "axios";

//-------------------------------------------------
export const GET_ALL_EVENTS = "GET_ALL_EVENTS";

export const ERROR = "ERROR";

export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const FILTER_BY_DATE = "FILTER_BY_DATE";

export const GET_EVENT_ID = "GET_EVENT_ID";

export const GET_NAME_EVENT = "GET_NAME_EVENT";

export const CREATE_EVENT = "CREATE_EVENT";

//-------------------------------------------------
const URL = "http://localhost:3001";
//-------------------------------------------------



export const getAllEvents = () => {

  return async function (dispatch) {

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

export const getNameEvent = (name) => {

  return async function (dispatch) {

    try {

      const event = await axios.get(`${URL}/events?name=${name}`);

      dispatch({

        type: GET_NAME_EVENT,
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

  return async function (dispatch) {

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

  return async function (dispatch) {

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

export const searchEventById = (id) => {
  return async function (dispatch){
    try {
    
      const eventDetailed = await axios.get(URL + `/events/${id}`)
      console.log(eventDetailed.data)
      dispatch({
        type: GET_EVENT_ID,
        payload: eventDetailed.data
      })

    } catch (error) {
      dispatch({

        type: ERROR,
        payload: error.message
      })
    }
  }
}

export const createEvent = (data) => {

  return async function(dispatch){

    try {
      
      const event = await axios.post(`${URL}/events`, data);

      dispatch({

        type: CREATE_EVENT,
        payload: event.data
      })

    } catch (error) {

      dispatch({

        type: ERROR,
        payload: error.message
      })
    }
  };
};