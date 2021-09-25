import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../ContextApi/AuthContext";

let PublicRoute = ({ children, ...rest }) => {
  let USER = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        USER ? <Redirect to="/profile" {...props} /> : children
        // USER ? <Redirect to="/form" {...props} /> : children
      }
    />
  );
};

export default PublicRoute;