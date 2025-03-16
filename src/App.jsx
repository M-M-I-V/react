import './index.css'
import Welcome from './components/Welcome.jsx'
import Greeting from './components/Greeting.jsx'
import { FirstComponent, SecondComponent } from './components/MyComponent.jsx'
import MyComponent from './components/MyComponent.jsx'

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Welcome library = "React"/>
      <Greeting name = "Neil"/>
      <FirstComponent />
      <SecondComponent />
      <MyComponent />
    </div>
  )
}

export default App