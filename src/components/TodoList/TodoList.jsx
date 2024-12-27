import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, idx) => {
        return (
          <GridItem key={id}>
            <TodoListItem
              text={text}
              idx={idx}
              onDelete={onDelete}
              onEdit={onEdit}
              id={id}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default TodoList;
