export const removeAllTasks = () => {
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach((task) => task.remove());
};
