import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Shirketler from './components/Shirketler'
import DeepLearning from './components/DeepLearning'
import Mukafatlar from './components/Mukafatlar'
import Clientssay from './components/Clientssay'
import Ending from './components/Ending'
function App() {
  return (
    <div className='Esas'>
     <Header />
     <Introduction />
     <Shirketler />
     <DeepLearning />
     <Mukafatlar />
     <Clientssay />
     <Ending />
    </div>
  )
}
export default App
