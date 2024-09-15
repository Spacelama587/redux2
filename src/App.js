// File: src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

const AppContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </AppContainer>
  );
}

export default App;