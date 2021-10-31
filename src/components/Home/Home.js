import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OfferedItems from '../OfferedItems/OfferedItems';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className="hero-banner bg-light py-5 mb-4">
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-1">
                            <img src="http://themes.templatescoder.com/pizzon/html/demo/1-0/images/pizza-banner-1.png" alt="" srcset="" className="img-fluid" />

                        </div>
                        <div className="col-lg-6">
                            <h1 className="mt-3 text-muted text-justified"> Get Your Desired Food <br /> <strong className='orange'>Under 30 mins</strong> </h1>
                            <p className="lead text-secondary text-justified my-5">Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and <strong>served hot.</strong> </p>
                            <Link to="/allitems" className="btn btn-outline-secondary btn-lg border">Order Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <OfferedItems></OfferedItems>
        </div>

    );
};

export default Home;