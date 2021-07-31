import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { UserContext } from './UserProvider';

function App() {
  const Main = lazy(() => import('./Main.js'));
  const Signup = lazy(() => import('./Signup.js'));
  const Login = lazy(() => import('./Login.js'));
  const PasswordReset = lazy(() => import('./PasswordReset.js'));
  const Profile = lazy(() => import('./Profile.js'));
  const Locations = lazy(() => import('./Locations.js'));
  const LocationChat = lazy(() => import('./LocationChat.js'));
  const Character = lazy(() => import('./Character.js'));
  const CreateCharacter = lazy(() => import('./CreateCharacter.js'));
  const EditCharacter = lazy(() => import('./EditCharacter.js'));
  const NotFound = lazy(() => import('./404.js'));

  return (
    <UserContext.Consumer>
      {(user, changeUser) => (
      <>
      <Navbar user={user} />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path='/' exact render={(props) => <Main {...props} />} />
          <Route path='/signup' exact render={(props) => <Signup {...props} />} />
          <Route path='/login' exact render={(props) => <Login {...props} user={user} />} />
          <Route path='/logout' exact render={(props) => <Main {...props} changeUser={changeUser} logout={true} />} />
          <Route path='/passwordReset' exact render={(props) => <PasswordReset {...props} />} />
          <Route path='/profile' exact render={(props) => <Profile {...props} />} />
          <Route path='/locations' exact render={(props) => <Locations {...props} />} />
          <Route path='/location/:id' exact render={(props) => <LocationChat {...props} />} />
          <Route path='/character/create' exact render={(props) => <CreateCharacter {...props} />} />
          <Route path='/character/edit' exact render={(props) => <EditCharacter {...props} />} />
          <Route path='/character/:id' exact render={(props) => <Character {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
      </>
      )}
    </UserContext.Consumer>
  );
}

export default App;
