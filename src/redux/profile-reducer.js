import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initializationState = {


    postsData: [
        { id: 1, message: 'Why are you ignor me? I wont to tell you about my new work...', like: 11 },
        { id: 2, message: 'PLeaseee, check your sms', like: 23 },
        { id: 3, message: 'Go away', like: 15 },
        { id: 4, message: 'How a U?', like: 9 },
        { id: 5, message: 'The weather is nice', like: 4 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [{
                    id: 10,
                    message: action.newPost,
                    like: 500
                }, ...state.postsData]
            }
        
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPost) =>
    ({ type: ADD_POST, newPost })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) =>
    ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
        }
    });
}

export default profileReducer;