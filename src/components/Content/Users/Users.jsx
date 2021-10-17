import React from 'react'
import s from './Users.module.css';
import userPhoto from '../../../assets/images/usersPhoto.png'
import { NavLink } from 'react-router-dom';
import { Button } from 'bootstrap-4-react';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                }
                )
            }
        </div>
        {
            props.usersData.map(u => <div key={u.id} className={s.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} /> </NavLink>
                    </div>
                    <div>
                    </div>
                </span>
                <span>
                    <div>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>


                        <div>
                            {u.followed
                                ?
                                 <Button danger outline disabled={props.followingInProgress.some(id => id === u.id)}
                                 onClick={() => {
                                    props.unfollow(u.id);
                                }}>Unfollow
                                </Button>
                                :
                                <Button success outline disabled={props.followingInProgress.some(id => id === u.id)}
                                 onClick={() => {
                                   props.follow(u.id);
                                }}>follow
                                </Button>}
                        </div>
                    </div>
                </span>
            </div>)
        }
    </div >
}



export default Users;