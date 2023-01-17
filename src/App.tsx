import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed={5} />
      <Habit completed={16} />
      <Habit completed={44} />
    </div>
  )
}

export default App
