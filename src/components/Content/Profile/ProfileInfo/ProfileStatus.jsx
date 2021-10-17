import React from 'react'
import s from './ProfileInfo.module.css'



class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        console.log(this.state.editMode)
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }

    }

    render() {
        return (
            <div className={s.ProfileStatus}>
                { !this.state.editMode &&
                    <div>
                        Статус: <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        Статус: <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;