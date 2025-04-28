import React from 'react'

const Notfound = () => {
  return (
    <div>
        <div className="container-fluid notfound" style={{'background':'Magenta'}}>
            <div className="row">
                <div className="col-md-10 text-center text-light">
                    <h1 style={{'fontsize':'50px'}}>404</h1>
                    <p>Page not found</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notfound