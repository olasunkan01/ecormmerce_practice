import React from 'react'

const Newsletter = () => {
  return (
    <div className="container py-5 bg-info">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
            <div className="card shadow rounded-4 p-4 text-center">
                <div className="mb-3">
                    <h1>Subscribe to our Newsletter</h1>
                        <p className="mb-4 text-muted">Stay updated with our latest news and offer</p>
                        <form action="" className="row g-2">
                            <div className="col-12 col-sm-8">
                            <input type="text" className="form-control mb-3" placeholder="Enter your email" />
                            </div>
                            <div className="col-12 col-sm-4">
                            <button className="btn btn-primary btn-lg">Subscribe</button>
                            </div>
                        </form>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Newsletter