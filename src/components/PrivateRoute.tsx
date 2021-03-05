import React                           from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface IPrivateRouteProps extends RouteProps {
  isAuth: boolean,
  redirectPath: string,
}

const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
  const { component, redirectPath, isAuth } = props;

  if (isAuth) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} component={component} render={undefined} />;
  }

  return <Redirect to={{ pathname: redirectPath }} />;
};

export default PrivateRoute;
