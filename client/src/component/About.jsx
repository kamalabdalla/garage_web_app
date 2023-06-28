import React from 'react'

function About() {
  return (
    <div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/gar.jpg" alt="About" className='w-75 mt-5' />
                    </div>
                    <div col-md-6>
                        <h3 className='fs-5'>Abour Us</h3>
                        <h1 className='display-6'>Who <b>We</b> Are</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Voluptate reprehenderit molestias sed alias 
                             assumenda incidunt harum nemo, eaque eveniet placeat 
                             excepturi quis quasi ipsum
                             debitis reiciendis sequi enim doloremque in
                             Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Voluptate reprehenderit molestias sed alias 
                             assumenda incidunt harum nemo, eaque eveniet placeat 
                             excepturi quis quasi ipsum
                             debitis reiciendis sequi enim doloremque in.</p>
                             <button className='btn btn-primary rounded-pill px-4 py-2'>
                                Fet Started
                             </button>
                             <button className='btn btn-outline-primary rounded-pill px-4 py-2 ms-2'>
                                Contact Us
                             </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About