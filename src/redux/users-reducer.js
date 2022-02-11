import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';


let initializationState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

//
const usersReducer = (state = initializationState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, usersData: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOOGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

//
export const followSuccess = (userId) =>
    ({ type: FOLLOW, userId })

export const unfollowSuccess = (userId) =>
    ({ type: UNFOLLOW, userId })

export const setUsers = (users) =>
    ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, currentPage })

export const setUsersTotalCount = (totalUserCount) =>
    ({ type: SET_TOTAL_USERS_COUNT, count: totalUserCount })

export const toogleIsFetching = (isFetching) =>
    ({ type: TOOGLE_IS_FETCHING, isFetching })

export const toogleFollowingProgress = (isFetching, userId) =>
    ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

//

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await userAPI.getUsers(page, pageSize);
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        const data = await userAPI.unfollow(userId);
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toogleFollowingProgress(false, userId));
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        const data = await userAPI.follow(userId)
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toogleFollowingProgress(false, userId));
    }
}
//

export default usersReducer;