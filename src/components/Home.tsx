import React from 'react'
import Introduction from '../components/Introduction'
import Shirketler from '../components/Shirketler'
import DeepLearning from '../components/DeepLearning'
import Mukafatlar from '../components/Mukafatlar'
import Clientssay from '../components/Clientssay'
import Ending from '../components/Ending'
const Home:React.FC = () => {
   return (
    <div className='Esas'>
     <Introduction />
     <Shirketler />
     <DeepLearning />
     <Mukafatlar />
     <Clientssay />
     <Ending />
    </div>
  )
}

export default Home