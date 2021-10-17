import React from 'react';
import s from './Settings.module.css';


const Settings = (props) => {
    return (
        <div className={s.settings}>
            <div>
                Settings ________
            </div><div>
                langueg  <button>--------</button>
            </div><div>
                Sound    <button>--------</button>
            </div><div>
                Login    <button>--------</button>
                <div /><div>
                    Password <button>--------</button>
                </div>
            </div>
            </div>
    )
}


export default Settings;