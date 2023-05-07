"use client"

import { useState, useEffect } from "react"
import Slider from "react-slick";
export default function Portfolio() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
       
        <div id="portfolio" class="our-portfolio section">
         <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                <h6>Our Portofolio</h6>
                <h4>See Our Recent <em>Projects</em></h4>
                <div class="line-dec"></div>
              </div>
            </div>
          </div>
        </div>
       </div>



       
              <div style={{overflow: "hidden"}} >
              <Slider {...settings}>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-01.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-01.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-02.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-03.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-04.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div class="">
                  <a href="#">
                    <div class="portfolio-item">
                    <div class="thumb">
                      <img src="/images/portfolio-04.jpg" alt="" />
                    </div>
                    <div class="down-content">
                      <h4>Website Builder</h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                </Slider>
              </div>
      </>
    )
}