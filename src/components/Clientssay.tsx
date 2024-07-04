import React from 'react'

const Clientssay:React.FC = () => {
  return (
    <div className='clients-say text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="clients-left col-12 col-md-6  py-5">
                    <h2 className="py-4">What our clients say about <br/>our awesome solutions</h2 >
                    <article>To take a trivial example, which of us ever undertakes <br/>laborious physical exercise, except to obtain some <br/>advantage from it who do not know.<br/><br/>
                    Lorem ipsum is placeholder text commonly used in the <br/>graphic, print, and publishing .<br/><br/>
                    Lorem ipsum is placeholder previewing layouts and visual <br/>mockups.<br/><br/>
                    Lorem ipsum is placeholder text commonly used in the <br/>graphic, print, and publishing industries for previewing <br/>layouts and visual mockups.
                    </article>
                </div>

                <div className="clients-right col-12 col-md-6 d-flex flex-column justify-content-center  py-5">
                    <img src="/assets/images/clientssay/clients.svg" className='img-fluid' alt="Sekil Error" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clientssay