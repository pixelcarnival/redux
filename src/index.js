import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { initialeState } from './store/store'
import * as actions from './store/actions'

const store = initialeState()

const App = (params) => {
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    store.subscribe(() => setState(store.getState()))
  }, [])
  function complidedTasc(tascId) {
    store.dispatch(actions.tascComplided(tascId))
  }
  const chengeTitle = (tascId) => {
    store.dispatch(actions.titleChenge(tascId))
  }

  const deleteTask = (tascId) => {
    store.dispatch(actions.taskDelete(tascId))
  }
  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Состояние: ${el.completed}`}</p>
            <button onClick={() => complidedTasc(el.id)}>Изменить</button>
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
    <App />
  </React.StrictMode>
)
