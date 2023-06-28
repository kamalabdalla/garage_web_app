import React from 'react'

function Contact() {
  return (
    <div>
        <section id='contact'>
           <div className="containr my-5 py-5">
           <div className="row mb-5">
                <div className="col-12">
                <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                    <h1 className='display-6 text-center mb-4'>Have Some <b>Question?</b> Srvices</h1>
                    <hr className='w-25 mx-auto' />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src="" alt="" />
                </div>
                <div className="col-md-6">
                <form action="">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class='form-label'>
                            your name
                        </label>
                        <input type="text"
                        class='form-control' 
                        id="name" placeholder='Mr A' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class='form-label'>
                            email
                        </label>
                        <input type="email"
                        class='form-control' 
                        id="exampleFormControlInput1" placeholder='Abdalla@dula.com' />
                    </div> 
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" class='form-label'>
                            your message
                        </label>
                        <textarea type="email"
                        class='form-control' 
                        id="exampleFormControlInput1" rows="5" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>
                        send message <i className='fa fa-paper-plane ms-2'></i>
                    </button>
                </form>
                </div>
            </div>
           </div>
        </section>
    </div>
  )
}

export default Contact