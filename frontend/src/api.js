const API_URL = 'http://localhost:3000/api/tasks';

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTask = async (task) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return res.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};