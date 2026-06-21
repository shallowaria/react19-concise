/*
  1. Implement adding and deleting todo items.
  2. Implement completing todo items (completed items should be moved to the bottom).
*/

function MyApp() {
  const [todoList, setTodoList] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState('');

  function handleAddTodo() {
    if (!currentTodo.trim().length) {
      alert('Please enter a todo item');
      return;
    }

    const newTodoList = [
      ...todoList,
      {
        id: Math.random() + Date.now(),
        content: currentTodo,
        isCompleted: false,
      },
    ];

    setTodoList(newTodoList);
    setCurrentTodo('');
  }

  function handleDeleteTodo(deleteTodoId) {
    const deletedTodoList = todoList.filter(
      (todo) => todo.id !== Number(deleteTodoId),
    );
    setTodoList(deletedTodoList);
  }

  function toggleTodo(toggleTodoId) {
    const toggledTodoList = todoList.map((todo) => {
      if (todo.id === Number(toggleTodoId)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    sortTodoList(toggledTodoList);

    setTodoList(toggledTodoList);
  }

  function sortTodoList(newTodoList) {
    const sorttedTodoList = newTodoList.sort((o1, o2) => {
      if (o1.isCompleted !== o2.isCompleted) {
        return o1.isCompleted ? 1 : -1; // 正数排后面，负数排前面
      }
      return o1.id - o2.id; // id小的排前面
    });
    setTodoList(sorttedTodoList);
  }

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        placeholder="Add item into as todo"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <li className={todo.isCompleted ? 'deleted' : ''} key={todo.id}>
              <input type="checkbox" onChange={() => toggleTodo(todo.id)} />
              {todo.content}
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            </li>
          ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector('#app');
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
