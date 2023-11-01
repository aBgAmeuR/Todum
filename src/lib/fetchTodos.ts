const fetchTodos = async () => {
  const res = await fetch('/api/todos');
  const data = await res.json();
  return data;
};

export default fetchTodos;
