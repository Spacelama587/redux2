import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
  border: 2px solid #6ee7b7;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 15px;
`;

const Title = styled.h3`
  margin-top: 0;
  color: #0f172a;
`;

const Content = styled.p`
  color: #334155;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Button = styled.button`
  background-color: #f1f5f9;
  border: 2px solid ${props => props.isDone ? 'red' : 'green'};
  color: #020617;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${props => props.isDone ? '#fee2e2' : '#dcfce7'};
  }
`;

const DeleteButton = styled(Button)`
  border-color: red;

  &:hover {
    background-color: #fee2e2;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  color: #0d9488;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <TodoItemContainer>
      <Title>{todo.title}</Title>
      <Content>{todo.content}</Content>
      <ButtonContainer>
        <Button onClick={onToggle} isDone={todo.isDone}>
          {todo.isDone ? 'Cancel' : 'Complete'}
        </Button>
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </ButtonContainer>
      <StyledLink to={`/todo/${todo.id}`}>View details</StyledLink>
    </TodoItemContainer>
  );
}

export default TodoItem;