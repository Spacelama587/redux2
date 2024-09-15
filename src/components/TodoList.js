import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo, toggleTodo, deleteTodo } from '../redux/modules/todos';
import TodoItem from './TodoItem';

const TodoListContainer = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #0d9488;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0f766e;
  }
`;

const TodoSection = styled.div`
  margin-bottom: 20px;
`;

function TodoList() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title && content) {
      dispatch(addTodo({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <TodoListContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <AddButton onClick={handleAddTodo}>Add Todo</AddButton>
      </InputContainer>

      <TodoSection>
        <h2>Working</h2>
        {todos.filter(todo => !todo.isDone).map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </TodoSection>

      <TodoSection>
        <h2>Done</h2>
        {todos.filter(todo => todo.isDone).map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </TodoSection>
    </TodoListContainer>
  );
}

export default TodoList;