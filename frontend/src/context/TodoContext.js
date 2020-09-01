import { useContext } from 'react';

import createDataContext from '../libs/createContextData';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, INIT_TODO } from './actionTypes';

const initState = {
    todos: [],
};
/**
 * The function reducer which modifies the state of application by actions
 * @param {Object} state The state of application holding the list of todos which
 * is changed by actions
 * @param {Function} action The only way to change the state of application, 
 * which contains payload as data and action type.
 */
const todoReducer = (state = initState, action) => {
    let newTodos;
    switch (action.type) {
        case INIT_TODO:
            const todos = action.payload;
            newTodos = [...initState.todos, ...todos];
            return {...initState, todos: newTodos};
        case ADD_TODO:
            const newTodo = action.payload;
            newTodos = [newTodo, ...state.todos];
            return {...initState, todos: newTodos};
        case REMOVE_TODO:
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            newTodos = [...state.todos];
            newTodos.splice(index, 1);
            return {...initState, todos: newTodos};
        case TOGGLE_TODO:
            newTodos = [...state.todos].map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } 
                return todo;
            });
            return {...initState, todos: newTodos};
        default:
            return state;
    };
};

const initTodo = dispatch => {
    return todos => {
        dispatch({ type: INIT_TODO, payload: todos });
    }
}

const addTodo = dispatch => {
    return todo => {
        dispatch({ type: ADD_TODO, payload: todo });
    };
};

export const removeTodo = dispatch => {
    return id => {
        dispatch({ type: REMOVE_TODO, payload: id });
    };
};

export const toggleTodo = dispatch => {
    return id => {
        dispatch({ type: TOGGLE_TODO, payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    todoReducer,
    {
        addTodo,
        removeTodo,
        toggleTodo,
        initTodo
    },
    initState,
);

// The custom hook is addtionally exported in order to make unit test feasible.
export const useTodoContext = () => useContext(Context);