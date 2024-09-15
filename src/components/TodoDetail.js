import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoDetailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  color: #0f172a;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: #334155;
  margin-bottom: 15px;
`;

const Status = styled.p`
  font-weight: bold;
  color: ${props => props.isDone ? '#059669' : '#dc2626'};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: #0d9488;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BackButton = styled.button`
  background-color: #f1f5f9;
  border: 2px solid #0d9488;
  color: #0d9488;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    background-color: #e2e8f0;
  }
`;

function TodoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = useSelector(state => 
    state.todos.find(todo => todo.id === id)
  );

  const handleBack = () => {
    navigate(-1);
  };

  if (!todo) {
    return (
      <TodoDetailContainer>
        <Title>Todo not found</Title>
        <BackButton onClick={handleBack}>Go Back</BackButton>
      </TodoDetailContainer>
    );
  }

  return (
    <TodoDetailContainer>
      <Title>{todo.title}</Title>
      <Content>{todo.content}</Content>
      <Status isDone={todo.isDone}>
        Status: {todo.isDone ? 'Done' : 'In Progress'}
      </Status>
      <div>
        <BackButton onClick={handleBack}>Go Back</BackButton>
        <StyledLink to="/">Back to list</StyledLink>
      </div>
    </TodoDetailContainer>
  );
}

export default TodoDetail;