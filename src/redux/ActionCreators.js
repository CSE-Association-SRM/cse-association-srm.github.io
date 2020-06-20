import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

//Redux-thunk to fetch dishes
export const fetchEvents=()=>(dispatch)=>{

    return fetch(baseUrl +'events')
    .then(response=>{
        if(response.ok){
            return response;
        }
        else{
            var err=new Error('Error '+response.status+' : '+response.statusText);
            err.response=response;
            throw err;//when there is a trouble in response
        }
    },error=>{
        var errmess=new Error(error.message);
        throw errmess;//this is the error where server doesnot provide a response
    })
    .then(response=>response.json())
    .then(events =>dispatch(getEvents(events)))
    .catch(error=>dispatch(eventsFailed(error.message)));
}


//list of action definition related to events


export const eventsFailed=(errmess)=>({
    type:ActionTypes.EVENT_FAILED,
    payload:errmess
});

export const getEvents=(events)=>({
    type:ActionTypes.GET_EVENT,
    payload:events
})