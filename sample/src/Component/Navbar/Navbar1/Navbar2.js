import React from 'react'
import './Navbar2.css'
import { Link } from 'react-router-dom'
import imgsone from "./logo (1).png";
import one from "./pexels-leonardho-1552242.jpg";
import two from "./pexels-victorfreitas-841130.jpg";
import three from "./pexels-willpicturethis-1954524.jpg";
import four from "./icons8-dumbbell-50.png";
import five from "./icons8-person-64.png";
import six from "./icons8-like-50.png";
import seven from "./home-01-480x480.jpg"
import eight from "./home-02-480x480.jpg"
import nine from "./home-03-480x480.jpg"
import ten from "./home-04-480x480.jpg"
import eleven from "./about-01-480x480.jpg"
import twelve from "./about-02-480x480.jpg"



export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={imgsone} alt="images" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Gym</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gym Locations
                </a>
                <ul id='drone' className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Salem</a></li>
                  <li><a className="dropdown-item" href="#">Bangalore</a></li>
                  <li><a className="dropdown-item" href="#">Coimbatore</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">About Coach</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className='images'>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div id='never' className="carousel-item active">
              <img src={one} className="d-block w-100" alt="..." style={{ height: '100vh' }} />
              <div className='carousel-caption'>
                <h1 id='hone' className='heading'>NEVER GIVE UP</h1>
                <p>Every bodybuilder requires a lot of dedication and effort to shape his/her <br></br> body into something to be proud of. We can give you everything you need for it.</p>
                <div className='bbs1'>
                  <button className='bone'>Get Started</button>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <img src={two} className="d-block w-100" alt="..." style={{ height: '100vh' }} />
              <div className='carousel-caption'>
                <h1 id='hone' className='heading'>NEVER GIVE UP</h1>
                <p>Every bodybuilder requires a lot of dedication and effort to shape his/her <br></br> body into something to be proud of. We can give you everything you need for it.</p>
                <div className='bbs1'>
                  <button className='bone'>Get Started</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={three} className="d-block w-100" alt="..." style={{ height: '100vh' }} />
              <div className='carousel-caption'>
                <h1 id='hone' className='heading'>NEVER GIVE UP</h1>
                <p>Every bodybuilder requires a lot of dedication and effort to shape his/her <br></br> body into something to be proud of. We can give you everything you need for it.</p>
                <div className='bbs1'>
                  <button className='bone'>Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <br></br>
      <div className='hoone'>
        {/* <h2>WELCOME</h2> */}
        <span className='spanone fs-1'>WELCOME</span>
      </div>
      <br></br>
      <br></br>

      <div className='poone'>
        Welcome to Intense Gym! We hope that you will appreciate our services and opportunities we offer our loyal and <br></br>potential customers. Here are some of them:
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className='flexone'>
        <div className='i1'>
          <div className='ii1 '>
            <img src={four} />
          </div>
          <br></br>
          <h6>Modern Fitness Equipment</h6>
          <br></br>
          <h5>We cooperate with  fitness suppliers <br></br> to give you  superior results.</h5>
        </div>
        <div className='i1'>
          <div className='ii1'>
            <img src={five} />
          </div>
          <br></br>

          <h6>Qualified Coaches</h6>
          <br></br>

          <h5>Our coaches have years of experience in <br></br> various types of fitness and sports.</h5>
        </div>
        <div className='i1'>
          <div className='ii1'>
            <img src={six} />
          </div>
          <br></br>

          <h6>Individual Approach</h6>
          <br></br>

          <h5>Every client of Intense has a <br></br> personalized program of nutrition.</h5>
        </div>



        {/* <img src={four} />
          <img src={five} />
          <img src={six} /> */}
      </div>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>

        </div>
        <div id='corone' className="carousel-inner">
            <div className="carousel-item active">
                <div className="container text-center">
                    <div class="row row-cols-4">
                        <div className="col-3"><img src={seven} class="img-fluid" style={{ height: '300px',}}
                                alt="..."/>
                            <h3 id="train">Bodybuild</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col-3"><img src={eight} class="img-fluid" style={{ height: '300px' }}
                                alt="..." />
                            <h3 id="train">Fitness</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col-3"><img src={nine} class="img-fluid"style={{ height: '300px' }}
                                alt="..." />
                            <h3 id="train">Crossfit</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col-3"><img src={ten} class="img-fluid" style={{ height: '300px' }}
                                alt="..." />
                            <h3 id="train"> circle Studio</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container text-center">
                    <div className="row row-cols-4">
                        <div className="col"><img src={nine} class="img-fluid" style={{ height: '300px' }}
                                alt="..." />
                            <h3 id="train">Strength Train</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col"><img src={ten} class="img-fluid"style={{ height: '300px' }}
                                alt="..." />
                            <h3 id="train">Yoga</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col"><img src={eleven} class="img-fluid"
                               style={{ height: '300px' }} alt="..." />
                            <h3 id="train">Fitcheck</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                        <div className="col"><img src={twelve} class="img-fluid"
                                style={{ height: '300px' }} alt="..."/>
                            <h3 id="train">body Check</h3>
                            {/* <!-- <button id="but">FREE FIRST LESSONS</button> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
 )
}
