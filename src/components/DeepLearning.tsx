  import React from 'react'
  import Button from './Button'

  const DeepLearning:React.FC = () => {
    return (
      <div className='deep-learning text-white py-5'>
          <div className="container">
              <div className="row">
                  <div className="deep-left col-12 col-md-6  py-5">
                      <img src="/assets/images/deeplearning/deep.svg" className='img-fluid' alt="Sekil Error" />
                  </div>

                  <div className="deep-right col-12 col-md-6 d-flex flex-column justify-content-center ">
                          <h2>Apply AI, Deep Learning <br/>and Data Sciece to solve</h2>
                          <article className= "py-3">Lorem ipsum is placeholder text commonly used in the<br/>graphic, print, and publishing industries for previewing <br/>layouts and visual mockups.</article>

                          <Button inTextBtn='Learn More' klassAdi='deep-learning-btn' shekil='' />

                  </div>
              </div>
          </div>
        
      </div>
    )
  }

  export default DeepLearning