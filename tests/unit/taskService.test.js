const { addTask } = require('../../src/services/taskService');

describe('Task Service Unit Test', () => {

  test('should add task successfully', () => {
    const tasks = [];
    const result = addTask(tasks, 'Belajar');
    expect(result.title).toBe('Belajar');
  });

  test('should assign id correctly', () => {
    const tasks = [];
    const result = addTask(tasks, 'Task 1');
    expect(result.id).toBe(1);
  });

  test('should increment id', () => {
    const tasks = [{ id: 1, title: 'Task lama' }];
    const result = addTask(tasks, 'Task baru');
    expect(result.id).toBe(2);
  });

  test('should push task to array', () => {
    const tasks = [];
    addTask(tasks, 'Task');
    expect(tasks.length).toBe(1);
  });

  test('should throw error if title empty', () => {
    const tasks = [];
    expect(() => addTask(tasks, '')).toThrow();
  });

  test('should throw error if title undefined', () => {
    const tasks = [];
    expect(() => addTask(tasks)).toThrow();
  });

  test('should throw error if title null', () => {
    const tasks = [];
    expect(() => addTask(tasks, null)).toThrow();
  });

  test('should add multiple tasks', () => {
    const tasks = [];
    addTask(tasks, 'Task 1');
    addTask(tasks, 'Task 2');
    expect(tasks.length).toBe(2);
  });

  test('should keep correct titles', () => {
    const tasks = [];
    addTask(tasks, 'A');
    addTask(tasks, 'B');
    expect(tasks[1].title).toBe('B');
  });

  test('should return object', () => {
    const tasks = [];
    const result = addTask(tasks, 'Test');
    expect(typeof result).toBe('object');
  });

  test('task should have id property', () => {
    const tasks = [];
    const result = addTask(tasks, 'Test');
    expect(result).toHaveProperty('id');
  });

  test('task should have title property', () => {
    const tasks = [];
    const result = addTask(tasks, 'Test');
    expect(result).toHaveProperty('title');
  });

  test('should handle long title', () => {
    const tasks = [];
    const longTitle = 'a'.repeat(100);
    const result = addTask(tasks, longTitle);
    expect(result.title.length).toBe(100);
  });

  test('should not modify existing tasks incorrectly', () => {
    const tasks = [{ id: 1, title: 'Old' }];
    addTask(tasks, 'New');
    expect(tasks[0].title).toBe('Old');
  });

  test('should add task at the end of array', () => {
    const tasks = [{ id: 1, title: 'First' }];
    addTask(tasks, 'Second');
    expect(tasks[1].title).toBe('Second');
  });

});