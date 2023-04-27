import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Timer from './components/Timer';
import AlohaDashboard from './components/AlohaDashboard';
import Box from './components/Box';
import ToDoList from './components/ToDoList';
import ProductsPage from './components/ProductsPage';
import UserList from './components/UserList';
import CounterPage from './components/pages/CounterPage'
import DataLoader from './components/pages/DataLoader';
import WindowChange from './components/WindowChange';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/**Routes - Переключатель (Switch) */}

        <nav>
          <Link to="/">Click to go to home</Link>

          <Link to="/timer">Click to go to timer</Link>

          <Link to="/redirecter">Click to go to redirecter</Link>

          <Link to="/box">Click to go to box</Link>

          <Link to="/toDoList">Click to go to toDoList</Link>

          <Link to="/products">Click to go to Products Page</Link>

          <Link to="/counterPage">Click to go to CounterPage</Link>
          <Link to="/dataLoader">Click to go to DataLoader</Link>
          <Link to="/WindowChange">Click to go to WindowChange</Link>


        </nav>

        <Routes>
          {/**Route- одна из дорог */}
          <Route path="/" element={<AlohaDashboard />}></Route>

          <Route path="/timer" element={<Timer />}></Route>

          <Route path="/box" element={<Box />}></Route>

          <Route path="/toDoList*" element={<ToDoList />}></Route>

          <Route path="/products" element={<ProductsPage />}></Route>

          <Route path="/userList" element={<UserList />}></Route>

          <Route path="/counterPage" element={<CounterPage />}></Route>
          <Route path="/dataLoader" element={ <DataLoader /> }></Route>
          <Route path="/WindowChange" element={<WindowChange />}></Route>
          

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

