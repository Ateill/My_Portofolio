import React from 'react';
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import TicTacToe from './TicTacToe';
import './start-game.css';

const Start = () => {
    return (
        <div className='Start'>
            <Router>
                <div className='content'>
                    <h1>Tic Tac Toe</h1>
                    <h2>Games</h2>
                    <button className= 'play'><Link to="/Games">Play Now</Link> </button>
                </div>
                <Routes>
                    <Route exact path="/Games" element={<TicTacToe />} />
                </Routes>
            </Router>
        </div>
    );
}
export default Start;