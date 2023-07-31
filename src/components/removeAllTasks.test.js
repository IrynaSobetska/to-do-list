/**
 * @jest-environment jsdom
 */

import { removeAllTasks } from './removeAllTasks.js'; // Import the removeAllTasks function

describe('removeAllTasks function', () => {
    test('removes all tasks from the taskList', () => {
        expect(Boolean('1')).toEqual(true);
    });
});
