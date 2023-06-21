import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import configureStore from './store/store'
import {
  titleChenge,
  taskDelete,
  completeTask,
  loadTasks,
  getTasks,
  getTasksLoadingStatus,
  createTask,
} from './store/task'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { getErrors } from './store/errors'

const store = configureStore()

const App = (params) => {
  const state = useSelector(getTasks())
  const isLoading = useSelector(getTasksLoadingStatus())
  const error = useSelector(getErrors())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTasks())
  }, [])

  const addNewTask = () => {
    dispatch(createTask({ userId: 1, title: 'SomeNew Task', completed: false }))
  }

  const chengeTitle = (tascId) => {
    dispatch(titleChenge(tascId))
  }

  const deleteTask = (tascId) => {
    dispatch(taskDelete(tascId))
  }

  if (isLoading) {
    return <h1>Loading</h1>
  }
  if (error) {
    return <p>{error}</p>
  }
  return (
    <>
      <h1>App</h1>
      <button onClick={addNewTask}>CreateTask</button>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Состояние: ${el.completed}`}</p>
            <button onClick={() => dispatch(completeTask(el.id))}>
              Изменить
            </button>
            <button onClick={() => chengeTitle(el.id)}>Новое изменение</button>
            <button onClick={() => deleteTask(el.id)}>Удалить</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
