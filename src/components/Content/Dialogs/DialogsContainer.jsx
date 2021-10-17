import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect.jsx';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => { dispatch(addMessageActionCreator(newMessageBody)) }   
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);