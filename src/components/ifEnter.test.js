/**
 * @jest-environment jsdom
 */

import ifEnter from './ifEnter';
import addTask from './addTask'; // Mocking addTask function

// Mock the addTask function
jest.mock('./addTask', () => jest.fn());

describe('ifEnter function', () => {
    afterEach(() => {
        // Reset the mock after each test
        addTask.mockClear();
    });

    test('calls addTask function when Enter key is pressed', () => {
        // Create a mock event object with the "Enter" key
        const mockEvent = { key: 'Enter' };

        // Call the ifEnter function with the mock event
        ifEnter(mockEvent);

        // Check if addTask function is called
        expect(addTask).toHaveBeenCalled();
    });

    test('does not call addTask function when other keys are pressed', () => {
        // Create a mock event object with a key other than "Enter"
        const mockEvent = { key: 'Escape' };

        // Call the ifEnter function with the mock event
        ifEnter(mockEvent);

        // Check if addTask function is not called
        expect(addTask).not.toHaveBeenCalled();
    });
});
