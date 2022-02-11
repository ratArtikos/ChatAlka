import React, { useEffect, useState } from 'react'
import s from './ProfileInfo.module.css'



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMod] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        setEditMod(true);
    };

    const deactivateEditMode = () => {
        setEditMod(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={s.ProfileStatus}>
            {!editMode &&
                <div>
                    Статус: <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    Статус: <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}></input>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;