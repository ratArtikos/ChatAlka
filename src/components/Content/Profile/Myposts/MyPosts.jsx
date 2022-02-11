import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Display4 } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/Forms';


const MyPosts = React.memo(props => {

    /*componentDidMount(){
        setTimeout(()=>{
            this.setState({a:12});
        }, 3000)
    }*/

    /*shouldComponentUpdate(nextProps, nextState){
        return nextProps!=this.props || nextState!=this.state;
    }*/


    console.log("RENDER 1");

    let postsElements = props.postsData
        .map(post => <Post like={post.like} message={post.message} id={post.id} key={post.id} />);

    let newPostText = (values) => {
        props.onAddPost(values.newPost)
    }

        return (
            <div className={s.myPosts}>

                <Display4 success>My posts</Display4>
                <AddNewPostFormRedux onSubmit={newPostText} />
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        )
    })



const maxLength30 = maxLengthCreator(30);

const AddnewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newPost' placeholder='Enter your MEGAPOST' validate={[required, maxLength30]} />
        <Button success outline>Add post</Button>
    </form>
}


const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddnewPostForm)

export default MyPosts;