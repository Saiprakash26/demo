import React from 'react'
import './Fashion.css'
import ione from './download.jpeg'
import itwo from './images (1).jpeg'
import ithree from './images.jpeg'
import ifour from './images (5).jpeg'
import ifive from './images (3).jpeg'
import isix from './images (4).jpeg'
import  { useReducer } from 'react'

const countreducer = (state,action)=>{
    switch(action.type){
        case 'decrement':
            return {...state,
                count:state.count-action.payload
            }
            // break;
        case 'increment':
            return {...state,
                count:state.count+action.payload
            }
            // break ;
        default:
            return state
    }
}



export default function Mens() {
    const initialstate = {
        count:0
    }
    const [state,dispatch] = useReducer(countreducer,initialstate)
    const decrement = (one)=>{
        dispatch({
            type:'decrement',
            payload:one
        })
    }

    const increment = (one)=>{
        dispatch({
            type:'increment',
            payload:one
        })
        
    }
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg bg-warning-subtle">
                <div className="container-fluid">
                    <a id='navone' className="navbar-brand" href="#"><h5>BF FASHIONS</h5></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Branches</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cloth Designs
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Cotton shirts and phants</a></li>
                                    <li><a className="dropdown-item" href="#">lycra shirts and phants</a></li>
                                    <li><a className="dropdown-item" href="#">jeans shirts and phants</a></li>
                                    <li><a className="dropdown-item" href="#">T shirts</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About our shop</a>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav> */}
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ione} className="img-fluid rounded-start" alt="lycra blue shirt" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Lycra shirts</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button " class="btn btn-outline-primary active  ">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>
                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{width:'150px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={isix} className="img-fluid rounded-start" alt="Flower Printed shirt" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Flower Printed shirt</h5>
                            <h4 className="card-text">30 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1050</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>
                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{width:'150px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={itwo} className="img-fluid rounded-start" alt="Half handed dotted shirt" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Half handed dotted shirt</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{width:'150px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ithree} className="img-fluid rounded-start" alt="Casual shirts" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Casual shirts</h5>
                            <h4 className="card-text">30 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1050</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{width:'150px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ifour} className="img-fluid rounded-start" alt="Textured Shirts" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Textured Shirts</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1500</del> BF Price :1125</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                         <div className='buto'>
                            <button className='bbone mt-3 ms-3 btn btn-success border border-none rounded-3 text-light' style={{width:'150px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-5 container mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ifive} className="img-fluid rounded-start" alt="Half Handed T Shirts" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body w-100">
                            <h5 className="card-title">Half Handed T Shirts</h5>
                            <h4 className="card-text">25 % Offer</h4>
                            <h4 className="card-text"><small className="text-body-dark">Orginal Price: <del>1000</del> BF Price :625</small></h4>
                            <h6 className="card-text">Avaliable Size</h6>

                        </div>
                        <div class="btn-group justify-content-center mx-md-3" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">M</button>
                            <button type="button" class="btn btn-outline-primary">S</button>
                            <button type="button" class="btn btn-outline-primary">L</button>
                            <button type="button" class="btn btn-outline-primary">XL</button>

                        </div>
                        <div className='Label d-flex ms-3 mt-5'>
                            <button onClick={()=>decrement(1)} className='text-center  border border-light' style={{ width: '30px', height: '30px' }}>-</button>
                            <label htmlFor="add to card"><h6 className='text-center ms-2 mt-1'>{state.count}</h6></label>
                            <button  onClick={()=>increment(1)} className='ms-2 border border-light' style={{ width: '30px', height: '30px' }}>+</button>
                        </div>
                        <div className='buto'>
                            <button className='mt-3 ms-3 bg-success border border-none rounded-3 text-light' style={{width:'100px', height:'40px'}}>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
