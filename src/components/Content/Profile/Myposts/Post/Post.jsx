import { Button } from 'bootstrap-4-react';
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className={s.item}>
             <div>
                    <small>5 минут назад</small>
                </div>
            <img src='https://w-dog.ru/wallpapers/4/16/460266478066695/starik-portret-trubka-shlyapa.jpg' />
            {props.message}
            <div>
                <span>
               <Button success outline > {props.like} like </Button>
                </span>
            </div>
        </div>
    )
}


export default Post;