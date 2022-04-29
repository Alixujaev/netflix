import React, {useReducer, createContext} from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { initialState, reducer } from './context/reducer';
import { Login } from './pages/Login';
import { Main } from "./pages/Main";
import { Page } from './pages/Page';
import { Singup } from './pages/Singup';

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/:id" element={<Page/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Singup/>}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
