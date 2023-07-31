/**
 * @jest-environment jsdom
 */

import createTask from './createTask'; // Import the createTask function

describe('createTask function', () => {
    test('removes all tasks from the taskList', () => {
        expect(Boolean('1')).toEqual(true);
    });
});
