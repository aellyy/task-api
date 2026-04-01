function addTask(tasks, title) {
  if (!title) throw new Error('Title is required');

  const task = { id: tasks.length + 1, title };
  tasks.push(task);
  return task;
}

module.exports = { addTask };