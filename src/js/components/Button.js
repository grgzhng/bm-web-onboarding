// @flow

import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? '#6ba3ff' : 'white'};
  color: ${props => props.primary ? 'white' : '#6ba3ff'};
  border: 4px solid #6ba3ff;
  padding: 10px 40px;
  margin: 20px;
  border-radius: 40px;
  font-size: 30px;
  letter-spacing: 3px;
`;

export default Button;
