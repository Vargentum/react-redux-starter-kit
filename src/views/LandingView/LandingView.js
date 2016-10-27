// @flow
'use strict'
import React, { Component, PropTypes as PT } from 'react'

require("assets/backyard/css/bootstrap.min.css")
require("assets/backyard/css/font-awesome.min.css")
require("assets/backyard/fonts/icon-7-stroke/css/pe-icon-7-stroke.css")
require("assets/backyard/css/animate.css")
require("assets/backyard/css/owl.theme.css")
require("assets/backyard/css/owl.carousel.css")
require("assets/backyard/css/css-app.css")

require("assets/backyard/js/jquery.js")
require("assets/backyard/js/bootstrap.min.js")
require("assets/backyard/js/jquery.sticky.js")
require("assets/backyard/js/wow.min.js")
require("assets/backyard/js/owl.carousel.min.js")
require("assets/backyard/js/ekko-lightbox-min.js")
require("assets/backyard/js/custom.js")

const logo = require('assets/landing/logo-white.png')
const screenBackground = require('assets/landing/sec1_background.jpg')


type Props = {};
class Landing extends React.Component {
  props: Props;

  componentDidMount () {
    this.initPlugins()
  }

  initPlugins() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) { event.preventDefault(); $(this).ekkoLightbox(); });
    new WOW().init();
  }
  render () {
    return (
      <Container>
        <FirstScreen
          fullScreenBg={screenBackground}
          logo={logo}
          title="Your title"
          description="Your description" />
        <Menu logo={logo} />
        <Intro />
      </Container>
    )
  }
}

module.exports = Landing

/* -----------------------------
  UI
----------------------------- */
function Container ({children, ...props}) {
  return <div data-spy="scroll" data-target="#navbar-scroll">
    {/* Hidden in reason of window.load!
    <div id="preloader"></div>*/}
    <div id="top"></div>
    {children}
  </div>
}

function FirstScreen ({fullScreenBg, logo, title, description, ...props}) {
  return <div
    className="fullscreen landing parallax"
    style={{backgroundImage: `url(${fullScreenBg})`}}
    data-img-width="2000"
    data-img-height="1325"
    data-diff="100">

  <div className="overlay">
    <div className="container">
      <div className="row">
        <div className="col-md-7">

          <div className="logo wow fadeInDown"> <a href=""><img src={logo} alt="logo" /></a></div>
            <h1 className="wow fadeInLeft"> {title} </h1>

          <div className="landing-text wow fadeInLeft">
            <p>{description}</p>
          </div>

          <div className="head-btn wow fadeInLeft">
            <a href="#feature" className="btn-primary">Features</a>
            <a href="#subscribe" className="btn-default">Subscribe</a>
          </div>

          <div className="more wow fadeInLeft">
            <p>Available for:
            <a href="#download" className="btn option"><i className="fa fa-apple"></i>iOS</a>
            <a href="#download" className="btn option"><i className="fa fa-android"></i>Android</a>
            </p>
          </div>

        </div>

        <div className="col-md-5">
        {/*<img src="images/header-phone.jpg" alt="phone" className="header-phone img-responsive wow fadeInRight" />*/}
        </div>
      </div>
    </div>
  </div>
</div>
}

function Menu ({logo, ...props}) {
  return <div id="menu">
    <nav className="navbar-wrapper navbar-default" role="navigation">
      <div className="container">
          <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-backyard">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand site-name" href="#top">
            <img src={logo} alt="logo" />
          </a>
          </div>

          <div id="navbar-scroll" className="collapse navbar-collapse navbar-backyard navbar-right">
          <ul className="nav navbar-nav">
            <li><a href="#intro">About</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <li><a href="#screenshot">Screenshots</a></li>
            <li><a href="#testi">Reviews</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
          </div>
      </div>
    </nav>
  </div>
}

export function Intro ({...props}) {
  return <div id="intro">
    <div className="container">
      <div className="row">

        <div className="col-md-6 intro-pic wow slideInLeft">
          {/*<img src="images/intro-image.jpg" alt="image" className="img-responsive" />*/}
        </div>

        <div className="col-md-6 wow slideInRight">
          <h2>Optimize performance through advanced targeting solutions</h2>
          <p>Good marketing makes the company look smart. <a href="#">Great marketing</a> makes the customer feel smart, - Joe Chernov. Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has, - Margaret Mead. The best way to predict the future is to create it, - Peter Drucker.
          </p>
          <div className="btn-section"><a href="#feature" className="btn-default">Learn More</a></div>
        </div>
      </div>
    </div>
  </div>
}



{/*


<!-- /.feature section -->
<div id="feature">
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1 col-sm-12 text-center feature-title">

      <!-- /.feature title -->
        <h2>Recreate your ideas and gain more success</h2>
        <p>Increase your user loyalty by maintaining mutual communication and nurturing your online community.</p>
      </div>
    </div>
    <div className="row row-feat">
      <div className="col-md-4 text-center">

      <!-- /.feature image -->
        <div className="feature-img">
          <img src="images/feature-image.jpg" alt="image" className="img-responsive wow fadeInLeft">
        </div>
      </div>

      <div className="col-md-8">

        <!-- /.feature 1 -->
        <div className="col-sm-6 feat-list">
          <i className="pe-7s-notebook pe-5x pe-va wow fadeInUp"></i>
          <div className="inner">
            <h4>Marketing Strategy</h4>
            <p>Good marketing makes the company look smart. Great marketing makes the customer feel smart.
            </p>
          </div>
        </div>

        <!-- /.feature 2 -->
        <div className="col-sm-6 feat-list">
          <i className="pe-7s-cash pe-5x pe-va wow fadeInUp" data-wow-delay="0.2s"></i>
          <div className="inner">
            <h4>App Monetization</h4>
            <p>Content builds relationships. Relationships are built on trust. Trust drives revenue. - Andrew Davis</p>
          </div>
        </div>

        <!-- /.feature 3 -->
        <div className="col-sm-6 feat-list">
          <i className="pe-7s-cart pe-5x pe-va wow fadeInUp" data-wow-delay="0.4s"></i>
          <div className="inner">
            <h4>Store Optimization</h4>
            <p>Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has.</p>
          </div>
        </div>

        <!-- /.feature 4 -->
        <div className="col-sm-6 feat-list">
          <i className="pe-7s-users pe-5x pe-va wow fadeInUp" data-wow-delay="0.6s"></i>
          <div className="inner">
            <h4>User Management</h4>
            <p>Instead of using technology to automate processes, think about using technology to enhance human interaction.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- /.feature 2 section -->
<div id="feature-2">
  <div className="container">
    <div className="row">

      <!-- /.feature content -->
      <div className="col-md-6 wow fadeInLeft">
        <h2>Learn how to make your app marketing efficient</h2>
        <p>Good marketing makes the company look smart. <span className="highlight">Great marketing</span> makes the customer feel smart, - Joe Chernov. Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has, - Margaret Mead. The best way to predict the future is to create it, - Peter Drucker.
        </p>

          <div className="btn-section"><a href="#download" className="btn-default">Download Now</a></div>

      </div>

      <!-- /.feature image -->
      <div className="col-md-6 feature-2-pic wow fadeInRight">
        <img src="images/feature2-image.jpg" alt="image" className="img-responsive">
      </div>
    </div>

  </div>
</div>


<!-- /.subscribe section -->
<div id="subscribe">
  <div className="subscribe fullscreen parallax" style="background-image:url('images/bg.jpg');" data-img-width="1920" data-img-height="1281" data-diff="100">
    <div className="overlay">
      <div className="container">

        <!-- /.mail icon -->
        <div className="col-md-4 col-md-offset-4 text-center">
        <i className="pe-7s-mail pe-va letter wow fadeInUp"></i>
        </div>
        <div className="col-md-8 col-md-offset-2 text-center">
          <p>We'll research the market, identify the right target audience, analyze competitors and avoid users churn to increase retention. Enter your email address and we will do the rest.</p>

          <!-- /.subscribe form -->
          <div className="subscribe-form wow fadeInUp">
            <form className="news-letter mailchimp" action="http://moxdesign.us10.list-manage.com/subscribe/post" role="form" method="POST">
            <input type="hidden" name="u" value="503bdae81fde8612ff4944435">
            <input type="hidden" name="id" value="bfdba52708">
            <input className="form-control" type="email" name="MERGE0" placeholder="Your email..." required="">
              <button type="submit" className="subscribe-btn btn">SUBSCRIBE</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- /.screenshot section -->
<div id="screenshot">
  <div className="container">
    <div className="text-center">
      <h2 className="wow fadeInLeft">SCREENSHOTS</h2>
      <div className="title-line wow fadeInRight"></div>
    </div>
    <div className="row screenshots">

      <div id="screenshots" className="owl-carousel">

        <!-- /.screenshot images -->
        <div className="screen wow fadeInUp">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.1s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.2s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.3s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.4s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.5s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.6s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>

        <div className="screen wow fadeInUp" data-wow-delay="0.7s">
          <a href="images/screenshot.jpg" data-toggle="lightbox"><img src="images/screenshot.jpg" alt="Screenshot"></a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- /.client section -->
<div id="client">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <img alt="client" src="images/company.jpg" className="wow fadeInUp">
          <img alt="client" src="images/company.jpg" className="wow fadeInUp" data-wow-delay="0.2s">
          <img alt="client" src="images/company.jpg" className="wow fadeInUp" data-wow-delay="0.4s">
          <img alt="client" src="images/company.jpg" className="wow fadeInUp" data-wow-delay="0.6s">
        </div>
      </div>
    </div>
</div>

<!-- /.testimonial section -->
<div id="testi">
  <div className="container">
    <div className="text-center">
      <h2 className="wow fadeInLeft">TESTIMONIALS</h2>
      <div className="title-line wow fadeInRight"></div>
    </div>
    <div className="row">
      <div className="col-sm-10 col-sm-offset-1">
         <div id="owl-testi" className="owl-carousel owl-theme wow fadeInUp">

          <!-- /.testimonial 1 -->
          <div className="testi-item">
            <div className="client-pic text-center">

              <!-- /.client photo -->
              <img src="images/client.jpg" alt="client">
            </div>
            <div className="box">

              <!-- /.testimonial content -->
              <p className="message text-center">"We are very happy and satisfied with Backyard service. Our account manager is efficient and very knowledgeable. It was able to create a vast fan base within very short period of time. We would highly recommend Backyard App to anyone."</p>
            </div>
            <div className="client-info text-center">

            <!-- /.client name -->
              Jennifer Lopez, <span className="company">Microsoft</span>
            </div>
          </div>

          <!-- /.testimonial 2 -->
          <div className="testi-item">
            <div className="client-pic text-center">

              <!-- /.client photo -->
              <img src="images/client.jpg" alt="client">
            </div>
            <div className="box">

              <!-- /.testimonial content -->
              <p className="message text-center">"Everything looks great... Thanks for the quick revision turn around. We were lucky to find you guys and will definitely be using some of your other services in the near future."</p>
            </div>
            <div className="client-info text-center">

              <!-- /.client name -->
              Mike Portnoy, <span className="company">Dream Theater</span>
            </div>
          </div>

          <!-- /.testimonial 3 -->
          <div className="testi-item">
            <div className="client-pic text-center">

              <!-- /.client photo -->
              <img src="images/client.jpg" alt="client">
            </div>
            <div className="box">

              <!-- /.testimonial content -->
              <p className="message text-center">"Overall, the two reports were very clear and helpful so thank you for the suggestion to do the focus group. We are currently working with our developer to implement some of these suggestions."</p>
            </div>
            <div className="client-info text-center">

              <!-- /.client name -->
              Jennifer Love Hewitt, <span className="company">Lead Vocal</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- /.download section -->
<div id="download">
  <div className="action fullscreen parallax" style="background-image:url('images/bg.jpg');" data-img-width="2000" data-img-height="1334" data-diff="100">
    <div className="overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-12 text-center">
            <h2 className="wow fadeInLeft">Would like to know more?</h2>
            <p className="download-text wow fadeInRight">We'll research the market, identify the right target audience, analyze competitors and avoid users churn to increase retention. Download now for free and join with thousands happy clients.</p>

              <!-- /.download buttons -->
              <ul className="download-store">
                <li className="appstorebutton iphone wow fadeInUp">
                  <a href="#"><i className="fa fa-apple"></i><p><small>Available on the</small></br>App Store</p></a>
                </li>
                <li className="appstorebutton android wow fadeInUp" data-wow-delay="0.2s">
                  <a href="#"><i className="fa fa-android"></i><p><small>Available on the</small></br>Play Store</p></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- /.footer -->
<footer id="footer">
  <div className="container">
    <div className="col-sm-4 col-sm-offset-4">
      <!-- /.social links -->
        <div className="social text-center">
          <ul>
            <li><a className="wow fadeInUp" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
            <li><a className="wow fadeInUp" href="https://www.facebook.com/" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
            <li><a className="wow fadeInUp" href="https://plus.google.com/" data-wow-delay="0.4s"><i className="fa fa-google-plus"></i></a></li>
            <li><a className="wow fadeInUp" href="https://instagram.com/" data-wow-delay="0.6s"><i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
      <div className="text-center wow fadeInUp" style="font-size: 14px;">Copyright Backyard 2015 - Template by <a href="http://www.moxdesign.com">MoxDesign</a></div>
      <a href="#" className="scrollToTop"><i className="pe-7s-up-arrow pe-va"></i></a>
    </div>
  </div>
</footer>
*/}

