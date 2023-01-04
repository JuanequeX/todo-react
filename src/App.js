import React from 'react';
import Todo from './components/Todo'
import { Tasks } from './back/Data';
import Form from './components/Form'
import FilterButton from './components/FilterButton';

function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>Juanequex Todo App</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
           Tasks?.map((task) => (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
