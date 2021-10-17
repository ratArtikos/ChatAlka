import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {

        profilePage: {
            postsData: [
                { id: 1, message: 'Why are you ignor me? I wont to tell you about my new work...', like: 11 },
                { id: 2, message: 'PLeaseee, check your sms', like: 23 },
                { id: 3, message: 'Go away', like: 15 },
                { id: 4, message: 'How a U?', like: 9 },
                { id: 5, message: 'The weather is nice', like: 4 },
                { id: 6, message: 'Tarararararra', like: 1 },
                { id: 6, message: 'Black Lives Metter', like: 80 },
            ],
            newPostText: ''
        },
        messagesPage: {

            dialogsData: [
                { id: 1, name: 'Igor' },
                { id: 2, name: 'Vanya' },
                { id: 3, name: 'Roma' },
                { id: 4, name: 'Danya' },
                { id: 5, name: 'Artem' },
                { id: 6, name: 'Dima' },
            ],

            messagesData: [
                { id: 1, message: 'HI' },
                { id: 2, message: 'Alloha' },
                { id: 3, message: 'hALLO' },
                { id: 4, message: 'hOW A U' },
                { id: 5, message: 'wELL' },
                { id: 6, message: 'Who i' },
            ],

            newMessageText: ''
        }
    },

    _callSubscriber() {
        console.log('state was changed');
    },
    //
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    //

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}


window.store = store;
