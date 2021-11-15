import React, {useEffect} from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './navigation/navBar';
import routes from './navigation/routes';
import Cookies from 'js-cookie';


export default function App() {
  const routeResult = useRoutes(routes);

  // const removeUserCookies = () => {
  //   window.onunload = () => {
  //     Cookies.remove('username');
  //   }
  // };

  // useEffect(() => {
  //   removeUserCookies();
  // });

    return (
      <div className='app'>
        <NavBar />
        {routeResult}
      </div>
    );
}