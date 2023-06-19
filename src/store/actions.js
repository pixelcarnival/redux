import * as actionTypes from './actionTypes'

export const tascComplided = (id) => {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, completed: true },
  }
}

export const titleChenge = (id) => {
  return {
    type: actionTypes.taskUpdated,
    payload: { id, title: `Новое значение ${id}` },
  }
}

export const taskDelete = (id) => {
  return { type: actionTypes.taskDelete, payload: { id } }
}
