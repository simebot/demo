import React from 'react';

export default function Box(props) {
  return (
    <div style={{backgroundColor: props.color, padding: '2rem'}}>
      {props.children}
    </div>
  );
}
