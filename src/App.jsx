import './index.css'
import Welcome from './components/Welcome.jsx'
import Greeting from './components/Greeting.jsx'


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Welcome library = "React"/>
      <Greeting name = "Neil"/>
    </div>
  )
}

export default App