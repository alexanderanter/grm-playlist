import React from 'react';
import './App.css';

const defaultTextColor = "white";
const defaultStyle = {
  color: defaultTextColor,

}
const Aggregate = () => {

   return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2 style={{color:  defaultTextColor}}>Test</h2>
      </div>
    );
}

const FilterFunc = () => {
  return (
    <div style={defaultStyle}>
      <img />
      <input type="test" />
    </div>
  );
}
const Playlist = () => {
  return (
    <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
      <img />
      <h3>Playlist Name</h3>
      <ul>
        <li>Song1</li>
        <li>Song2</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <FilterFunc />
      <Playlist />
      <Playlist />
      <Playlist />
    </div>
  );
}

export default App;
