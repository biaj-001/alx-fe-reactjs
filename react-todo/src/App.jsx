import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
    return (
        <div>
            <TodoList />
            <AddTodoForm />
        </div>
    );
};

export default App;
