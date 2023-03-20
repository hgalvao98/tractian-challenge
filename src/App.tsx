import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import reactLogo from './assets/react.svg'
import { getAsset } from './modules/store/assets/actions'
import { getUnit } from './modules/store/units/actions'
import { getUser } from './modules/store/users/actions'
import { getWork } from './modules/store/workorders/actions'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsset(1))
    dispatch(getUnit(1))
    dispatch(getUser(1))
    dispatch(getWork(1))
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
