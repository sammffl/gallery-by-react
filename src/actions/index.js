/**
 * Created by SamMFFL on 16/9/23.
 */

function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = makeActionCreator(ADD_TODO, 'todo');
export const editTodo = makeActionCreator(EDIT_TODO, 'id', 'todo');
export const removeTodo = makeActionCreator(REMOVE_TODO, 'id');
