/**
 * @jest-environment jsdom
 */

import addTask from './addTask.js';
import { createTaskElement } from './createTaskElement.js';

describe('addTask function', () => {
    test('adds a new task element to the task list', () => {
        // Create a mock HTML structure in the document
        document.body.innerHTML = `
      <input id="taskInput" type="text" value="Buy groceries">
      <ul id="taskList">
        <li>
          <input type="text" value="Task 1">
          <button class="clear-btn"><i class="fas fa-trash"></i></button>
        </li>
      </ul>
    `;

        // Call the addTask function
        addTask();

        // Check if a new task element is added to the task list
        const taskList = document.getElementById('taskList');
        expect(taskList.children.length).toBe(2);

        const newTaskElement = taskList.children[1];
        expect(newTaskElement.nodeName).toEqual('LI');

        const taskTextElement = newTaskElement.querySelector('input');
        expect(taskTextElement.nodeName).toEqual('INPUT');
        expect(taskTextElement.value).toEqual('Buy groceries');
    });

    test('does not add a new task element if input is empty', () => {
        // Create a mock HTML structure in the document
        document.body.innerHTML = `
      <input id="taskInput" type="text" value="">
      <ul id="taskList">
        <li>
          <input type="text" value="Task 1">
          <button class="clear-btn"><i class="fas fa-trash"></i></button>
        </li>
      </ul>
    `;

        // Call the addTask function
        addTask();

        // Check if no new task element is added to the task list
        const taskList = document.getElementById('taskList');
        expect(taskList.children.length).toBe(1);
    });
});
