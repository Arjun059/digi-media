
"use client"

import { useState, useEffect, useRef } from "react"

export default function Services() {

  const [activeTab , setActiveTab] = useState("Apartments")

    return (
        <div id="services" class="services section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h6>Our Services</h6>
                <h4>What Our Agency <em>Provides</em></h4>
                <div class="line-dec"></div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="naccs">
                <div class="grid">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="menu">
                        <div className={ activeTab == "Apartments" ? "active first-thumb " : "first-thumb" } onClick={() => setActiveTab("Apartments")}>
                          <div class="thumb">
                            <span class="icon"><img src="/images/service-icon-01.png" alt="" /></span>
                            Apartments
                          </div>
                        </div>
                        <div className={ activeTab == "FoodLife" ? "active" : "" } onClick={() => setActiveTab("FoodLife")}>
                          <div class="thumb">                 
                            <span class="icon"><img src="/images/service-icon-02.png" alt="" /></span>
                            Food &amp; Life
                          </div>
                        </div>
                        <div className={ activeTab == "Cars" ? "active" : "" } onClick={() => setActiveTab("Cars")}>
                          <div class="thumb">                 
                            <span class="icon"><img src="/images/service-icon-03.png" alt="" /></span>
                            Cars
                          </div>
                        </div>
                        <div className={ activeTab == "Shopping" ? "active" : "" } onClick={() => setActiveTab("Shopping")}>
                          <div class="thumb">                 
                            <span class="icon"><img src="/images/service-icon-04.png" alt="" /></span>
                            Shopping
                          </div>
                        </div>
                        <div className={ activeTab == "Traveling" ? "active last-thumb " : "last-thumb" } onClick={() => setActiveTab("Traveling")}>
                          <div class="thumb">                 
                            <span class="icon"><img src="/images/service-icon-01.png" alt="" /></span>
                            Traveling
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div class="col-lg-12">
                      <ul class="nacc">
                        <li className={activeTab == "Apartments" ? "active" : ""}>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>SEO Analysis &amp; Daily Reports</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                      dover lipsum lorem and the others.</p>
                                    <div class="ticks-list"><span><i class="fa fa-check"></i> Optimized Template</span> <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span>
                                      <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span> <span><i class="fa fa-check"></i> Optimized Template</span></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img src="/images/services-image.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTab == "FoodLife" ? "active" : ""}>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Healthy Food &amp; Life</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                      dover lipsum lorem and the others.</p>
                                    <div class="ticks-list"><span><i class="fa fa-check"></i> Optimized Template</span> <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span>
                                      <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span> <span><i class="fa fa-check"></i> Optimized Template</span></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img src="/images/services-image-02.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTab == "Cars" ? "active" : ""}>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Car Re-search &amp; Transport</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                      dover lipsum lorem and the others.</p>
                                    <div class="ticks-list"><span><i class="fa fa-check"></i> Optimized Template</span> <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span>
                                      <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span> <span><i class="fa fa-check"></i> Optimized Template</span></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img src="/images/services-image-03.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTab == "Shopping" ? "active" : ""}>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Online Shopping &amp; Tracking ID</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                      dover lipsum lorem and the others.</p>
                                    <div class="ticks-list"><span><i class="fa fa-check"></i> Optimized Template</span> <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span>
                                      <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span> <span><i class="fa fa-check"></i> Optimized Template</span></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img src="/images/services-image-04.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTab == "Traveling" ? "active" : ""}>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-6 align-self-center">
                                  <div class="left-text">
                                    <h4>Enjoy &amp; Travel</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt ut labore et dolore kengan darwin doerski token.
                                      dover lipsum lorem and the others.</p>
                                    <div class="ticks-list"><span><i class="fa fa-check"></i> Optimized Template</span> <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span>
                                      <span><i class="fa fa-check"></i> Data Info</span> <span><i class="fa fa-check"></i> SEO Analysis</span> <span><i class="fa fa-check"></i> Optimized Template</span></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr do eiusmod deis tempor incididunt.</p>
                                  </div>
                                </div>
                                <div class="col-lg-6 align-self-center">
                                  <div class="right-image">
                                    <img src="/images/services-image.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>          
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}