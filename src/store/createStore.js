export function createStore(reducer, initionState) {
  let state = initionState
  let liseteners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < liseteners.length; i++) {
      const lisetener = liseteners[i]
      lisetener()
    }
  }

  const subscribe = (lisetener) => {
    liseteners.push(lisetener)
  }

  return { getState, dispatch, subscribe }
}
