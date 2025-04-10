import React from 'react';
import Card from './Card';

function App() {
  const style = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    height: '300px'
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column'
  };
  return (
    <div style={containerStyle}>
      <h1>저를 소개합니다</h1>
      <div style={style}>
        <Card name="이종민" age="23" hobby="쿠키런" />
      </div>
      
    </div>
  );
}

export default App;
