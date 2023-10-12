import React from 'react';
import './styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header />

     {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
     {/* Sidebar */}
     {/* Feed */}
     {/* Widgets */}
    </div>
  );
}

export default App;
