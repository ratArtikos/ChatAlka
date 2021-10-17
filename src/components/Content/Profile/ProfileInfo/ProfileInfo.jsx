import React from 'react';
import Loading from '../../common/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {return  <Loading/>}
    return (<div>
        <div class={s.head}>
            <div class={s.ava}>
                <img src={props.profile.photos.large} />
            </div>
            <div class={s.info}>
                <div> {props.profile.fullName} </div>
                <div> О себе: {props.profile.aboutMe} </div>
                <div> <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> </div>
            </div>
            <div class={s.info2}>
                <div> Работа: {props.profile.lookingForAJobDescription} </div>
                <div> instagram: {props.profile.contacts.instagram} </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileInfo;