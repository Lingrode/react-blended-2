import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import EditForm from '../components/EditForm/EditForm';
import Filter from '../components/Filter/Filter';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'));

    if (!getTodos) return [];

    return getTodos;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    if (findTodo(text)) {
      alert('change todo name!');
      return;
    }

    const newTodo = { id: nanoid(6), text };
    setTodos(prev => [...prev, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = editedTodo => {
    setIsEditing(!isEditing);
    setCurrentTodo(editedTodo);
  };

  const handleCancelEdit = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const handleUpdateTodo = text => {
    if (findTodo(text)) {
      alert('change todo name!');
      return;
    }

    setTodos(prev =>
      prev.map(todo => (todo.id === currentTodo.id ? { ...todo, text } : todo)),
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  const findTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {isEditing ? (
        <EditForm
          onCancelEdit={handleCancelEdit}
          currentTodo={currentTodo}
          onUpdate={handleUpdateTodo}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}

      <Filter filter={filter} onFilter={setFilter} />

      {visibleTodos.length > 0 ? (
        <TodoList
          todos={visibleTodos}
          onDelete={deleteTodo}
          onEdit={handleEditTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
