import { Button } from 'bootstrap-4-react';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/Forms';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Messege/Message';

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);

    let messagesElements = state.messagesData
        .map(message => <Message message={message.message} id={message.id} key={message.id} />);

    let addNewMessage = (values) => {
            props.addMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder={'Enter your message'} validate={[required, maxLength50]}/>
            </div>
            <div>
                <Button success outline>Send</Button>
            </div>
        </form>
    )
}


const AddMessageReduxForm = reduxForm({
    form: "dialogAddMessageForm"
})(addMessageForm)


export default Dialogs;