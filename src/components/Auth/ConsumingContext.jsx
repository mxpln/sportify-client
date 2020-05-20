import React from "react";
import UserContext from "./UserContext";



const ConsumingContextFromAFunctionalComponent = (props) => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div>
          <h1>In a Functional Component</h1>
          <p>
            OOOOOOOOOOhhh yeah: <b>{context}</b>
          </p>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default ConsumingContextFromAFunctionalComponent;