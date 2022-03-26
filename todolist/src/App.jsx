import './App.css';
import { TodoModel } from './todoModel';
import { TodoApp } from './TodoApp';

const model = new TodoModel('react-todos');
const App = () => <TodoApp model={model} />;

export default App;
