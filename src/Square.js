import './Square.css';
import { React, useState, useEffect } from 'react';
import { logDOM } from '@testing-library/react';
import flag from './Image/flag.svg';
import mine from './Image/mine.svg';

export function Square(props) {
  const alertMe = () => {
    if (props.mine) {
      // console.log('m');
    }
  }

  useEffect(() => {
      // console.log('props now are: ' + JSON.stringify(props.status));
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);
    if (e.nativeEvent.which === 1) {
      props.squareEvent(props.x, props.y, true);
      console.log('Left click');
    } else if (e.nativeEvent.which === 3) {
      props.squareEvent(props.x, props.y, false);
      console.log('Right click');
    }
  }



return (
  <button
    className="square"
    onClick={handleClick}
    onContextMenu={handleClick}
  >
    {props.status === 'flagged' ? <img src={flag} width="20px" height="20px" /> : ''}
    {props.status === 'mined' ? <img src={mine} width="20px" height="20px" /> : ''}
    {props.status != 'flagged' && props.status != 'mined' && props.status != 'not clicked' ? props.status : '' }
  </button>
);
}
