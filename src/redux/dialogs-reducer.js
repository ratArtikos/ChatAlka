const ADD_MESSAGE = 'ADD-MESSAGE';

let initializationState = {
        dialogsData: [
            { id: 1, name: 'Igor' },
            { id: 2, name: 'Vanya' },
            { id: 3, name: 'Sanya' },
            { id: 4, name: 'Danya' },
            { id: 5, name: 'Artem' },
            { id: 6, name: 'Dima' },
        ],

        messagesData: [
            { id: 1, message: 'HI' },
            { id: 2, message: 'Mdaaaa' },
            { id: 3, message: 'hALLO' },
            { id: 4, message: 'hOW A U' },
            { id: 5, message: 'wELL' },
            { id: 6, message: 'Who i' },
        ]
    }

const dialogsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, 
                messagesData: [...state.messagesData, {id:10, message: action.newMessageBody}]
            };
            default:
                return state; 
        }

}

export const addMessageActionCreator = (newMessageBody) =>
    ({ type: ADD_MESSAGE, newMessageBody })

export default dialogsReducer;