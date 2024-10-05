import { Text, Form, TodoList } from 'components';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todosItem')) ?? [],
  );

  useEffect(() => {
    const stringifiedtodoItem = JSON.stringify(todos);
    localStorage.setItem('todosItem', stringifiedtodoItem);
  }, [todos]);

  const createNewToDo = newToDo => {
    setTodos([...todos, newToDo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={createNewToDo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};
