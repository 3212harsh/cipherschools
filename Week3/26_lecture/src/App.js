import AddTask from "./components/AddTask";
import Todoscreen from "./screens/Todoscreen";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import TaskProvider from './context/Taskcontext';

const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Todoscreen/>
  },
  {
    path : '/add-task',
    element : <AddTask/>
  }
])

const App = () => {


  return (
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  );
}

export default App;
