// @flow

import * as React from 'react';
import Button from './Button';

type Override = "login" | "logout" | "signup";

type Props = {
  override?: Override,
  isLoggedIn: boolean,
}

function LogInButton(props: Props) {

  const getText = (props) => {
    if (props.override)
      return props.override;
    else if (props.isLoggedIn)
      return 'Log Out';
    return  'Log In';
  }

  const handleClick = (props) => {
    if (props.override)
      alert(props.override);
    else {
      if (props.isLoggedIn)
        alert("Logging you out...");
      else
        alert("Logging you in...");
    }
  }
  
  return(
    <Button onClick={() => handleClick(props)}>
      { getText(props) }
    </Button>
  )
}

export default LogInButton