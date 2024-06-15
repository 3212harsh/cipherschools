import {useState} from 'react'
import AddTask from "./components/AddTask";
import Todoscreen from "./screens/Todoscreen";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

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

  const [task,settask] = useState([]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
