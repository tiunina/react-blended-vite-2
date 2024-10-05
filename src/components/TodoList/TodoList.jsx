import { GridItem } from 'components';
import { Grid } from 'components';
import { TodoListItem } from 'components';

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            todoItem={todoItem}
            counter={index + 1}
            deleteTodo={deleteTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
