import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Сервис с максимально низкими ценами на услуги продвижения, попробуйте и убедитесь сами!
              </h1>
              <Scroll type="id" element="download">
                <a href="http://fb79510o.bget.ru/auth/signup" className="btn btn-outline btn-xl">
                  Зарегистрироваться!
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          Мы
          <i className="fas fa-heart"></i>
          новых друзей!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
