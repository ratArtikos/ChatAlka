import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Content/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Loading from './components/Content/common/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loading />
    } else {
      return (
        <div className='App-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='App-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />            
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
