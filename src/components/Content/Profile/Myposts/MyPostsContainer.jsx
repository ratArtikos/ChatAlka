import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPost) => { dispatch(addPostActionCreator(newPost)) },
    }
}

const NewMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default NewMyPostsContainer;