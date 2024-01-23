export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: "TOGGLE_TASK",
  payload: taskId,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  payload: filter,
});
export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

export const editTask = (taskId, newDescription) => ({
  type: "EDIT_TASK",
  payload: { taskId, newDescription },
});
