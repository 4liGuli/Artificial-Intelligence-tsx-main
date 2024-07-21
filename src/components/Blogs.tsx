import React from 'react'

const Blogs:React.FC = () => {
  return (
    <div className='clients-say text-white py-5'>
        <div className="container">
            <div className="row">
                <div className="clients-left col-12 col-md-6  py-5">
                    <h2 className="py-5">The Role of AI in Cybersecurity</h2 >
                    <article>The digital age has brought advancements in  <br/>
                    artificial intelligence (AI) and an increased need for  <br/>
                    robust cybersecurity. AI is transforming cybersecurity by  <br/>
                    enhancing threat detection, prevention, and response.  <br/>
                    Here’s a brief look at how AI is revolutionizing the field.
                    </article>
                </div>

                <div className="clients-right col-12 col-md-6 d-flex flex-column justify-content-center">
                    <img src="/assets/images/introduction/api-interface-svgrepo-com.svg" className='img-fluid' alt="Sekil Error" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs