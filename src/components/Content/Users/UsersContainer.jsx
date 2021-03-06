import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, follow,  unfollow, setCurrentPage, toogleFollowingProgress } from '../../../redux/users-reducer';
import Users from './Users';
import Loading from '../common/Preloader';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Loading /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                usersData={this.props.usersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow} 
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}




export default connect (mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toogleFollowingProgress,
        requestUsers
    }
)(UsersContainer);



