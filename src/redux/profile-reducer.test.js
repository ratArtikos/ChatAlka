import React from "react";
import profileReducer, { addPostActionCreator } from "./profile-reducer";

it('length of posts should be incremented',()=>{
    // 1. test data
    let action = addPostActionCreator("akcompany.ru");
    let state ={
        postsData: [
            { id: 1, message: 'Why are you ignor me? I wont to tell you about my new work...', like: 11 },
            { id: 2, message: 'PLeaseee, check your sms', like: 23 },
            { id: 3, message: 'Go away', like: 15 },
            { id: 4, message: 'How a U?', like: 9 },
            { id: 5, message: 'The weather is nice', like: 4 }
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.postsData.length).toBe(6);
});