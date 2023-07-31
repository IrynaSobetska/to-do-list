/**
 * @jest-environment jsdom
 */

import { createTaskElement, deleteTask } from './createTaskElement.js';

describe('createTaskElement', () => {
    test('creates a task element with input and delete button', () => {
        const taskText = 'Sample Task';
        const taskItem = createTaskElement(taskText);

        // Ensure the taskItem is of type LI
        expect(taskItem.nodeName).toEqual('LI');

        // Ensure the taskSpan (input) element is created and contains the correct value
        const taskSpan = taskItem.querySelector('input');
        expect(taskSpan).toBeDefined();
        expect(taskSpan.value).toEqual(taskText);

        // Ensure the delete button is created and has the appropriate class and innerHTML
        const deleteButton = taskItem.querySelector('button');
        expect(deleteButton).toBeDefined();
        expect(deleteButton.classList).toContain('clear-btn');
        expect(deleteButton.innerHTML).toEqual('<i class="fas fa-trash"></i>');
    });

    test('deleteTask removes the task element', () => {
        // Create a task element and add it to the DOM
        const taskItem = document.createElement('li');
        document.body.appendChild(taskItem);

        // Ensure that the element is added to the DOM before calling deleteTask
        expect(document.body.contains(taskItem)).toBe(true);

        // Call deleteTask on the task element
        deleteTask(taskItem);

        // Ensure that the element is removed from the DOM after calling deleteTask
        expect(document.body.contains(taskItem)).toBe(false);
    });
});
