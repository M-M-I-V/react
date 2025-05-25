import './index.css'
import Welcome from './components/Welcome.jsx'
import Greeting from './components/Greeting.jsx'
import { FirstComponent, SecondComponent } from './components/MyComponent.jsx'
import MyComponent from './components/MyComponent.jsx'

const App = () => {
  return (
    <div className="flex-row justify-center items-center h-screen text-center p-10 bg-zinc-800 rounded-lg shadow-lg text-slate-300 font-mono font-semibold">
      <Welcome library = "React"/>
      <Greeting name = "Neil"/>
      <FirstComponent />
      <SecondComponent />
      <MyComponent />
    </div>
  )
}

export default App