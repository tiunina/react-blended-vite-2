import { Text, Form } from 'components';
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

  return (
    <>
      <Form onSubmit={createNewToDo} />
    </>
  );
};

// <Text textAlign="center">There are no any todos ...</Text>;
