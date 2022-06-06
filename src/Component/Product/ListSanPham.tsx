import React, { Component } from 'react'

export default class ListSanPham extends Component {
  render() {
    return (
      <div className='listSanpham'>
        <h4 className='text-warning mt-3'>Danh sách sản phẩm</h4>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row mt-1" >
            <div className="col-sm-4 divPro" > 
              <div className="card">
                <img src="https://imgur.com/edOjtEC.png" className="card-img-top" width="100%" alt=""/>
                <div className="card-body pt-0 px-0">
                  <h3 className="text-dark key pl-3">Sản phẩm 1</h3>
                  <p className="d-flex justify-content-center text-danger">400.000.000</p>
                  <p className="d-flex justify-content-center text-dark">Đơn vị: <span className='text-primary px-2'> Chiếc</span></p>
                  <div className="mx-3 mt-3 mb-2">
                    <button type="button" className="btn btn-danger btn-block"><small>Add to cart</small></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 divPro">
              <div className="card">
                <img src="https://i.imgur.com/SKZolYE.png" className="card-img-top" width="100%"  alt=""/>
                <div className="card-body pt-0 px-0">
                  <h3 className="text-dark key pl-3">Sản phẩm 2</h3>
                  <p className="d-flex justify-content-center text-danger">600.000.000</p>
                  <p className="d-flex justify-content-center text-dark">Đơn vị: <span className='text-primary px-2'> Chiếc</span></p>
                  <div className="mx-3 mt-3 mb-2">
                    <button type="button" className="btn btn-danger btn-block"><small>Add to cart</small></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 divPro">
              <div className="card">
                <img src="https://imgur.com/gUQNKPd.png" className="card-img-top" width="100%" alt="" />
                <div className="card-body pt-0 px-0">
                  <h3 className="text-dark key pl-3">Sản phẩm 3</h3>
                  <p className="d-flex justify-content-center text-danger">700.000.000</p>
                  <p className="d-flex justify-content-center text-dark">Đơn vị: <span className='text-primary px-2'> Chiếc</span></p>
                  <div className="mx-3 mt-3 mb-2">
                    <button type="button" className="btn btn-danger btn-block"><small>Add to cart</small></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
