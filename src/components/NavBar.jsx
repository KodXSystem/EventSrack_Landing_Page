import React from 'react'
import AppLogo from '../assets/logo/AppLogo.jpeg'
export default function NavBar() {
  return (
      <div className="header-main">
    <div className="container-wide">
      <div className="d-flex justify-content-between align-items-center h-100 position-relative px-lg-4">
        {/*Logo*/}
        <div className="logo-main">
          <a className="logo-wrapper logo-dark" href="../index.html">
            <img
               src={AppLogo}
              alt="Logo"
            />{" "}
          </a>
          <a className="logo-wrapper logo-light" href="../index.html">
            <img
              src={AppLogo}
              alt="Logo"
            />{" "}
          </a>
        </div>
        {/*Logo*/}
        {/*Header sidebar menu*/}
        <div className="royaltickets-menu-wrapper">
          <a
            href="#"
            className="royaltickets-trigger icon-mobile-menu mobile-menu"
          >
            <span className="icon-wrap royaltickets-middle-line" />
            <span className="icon-wrap royaltickets-top-line" />
            <span className="icon-wrap royaltickets-bottom-line" />
          </a>
        </div>
        <div className="main-menu-wrapper">
          <ul className="main-menu">
            {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home    ft-menu-item-6685   ft-menu-width-default  ft-menu-position-default ">
              <a
                className="nav-link menu-button-6685"
                href="../index.html"
              >
                <span className="">Home</span>
              </a>
            </li> */}
            {/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children    ft-menu-item-6662   ft-menu-width-default  ft-menu-position-default ">
              <a
                className="nav-link menu-button-6662"
                href="../simple-layout/index.html"
              >
                <span className="">Events</span>
              </a>
              <ul className="sub-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children    ft-menu-item-6663   ft-menu-width-  ft-menu-position- ">
                  <a className="nav-link menu-button-6663" href="#">
                    <span className="">Archive Layouts</span>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6670   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6670"
                        href="../simple-layout/index.html"
                      >
                        <span className="">Simple</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6671   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6671"
                        href="../simple-wide-layout/index.html"
                      >
                        <span className="">Simple Wide</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6664   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6664"
                        href="../metro-style-layout/index.html"
                      >
                        <span className="">Metro Style</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6665   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6665"
                        href="../metro-wide-layout/index.html"
                      >
                        <span className="">Metro Wide</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6666   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6666"
                        href="../no-gutter-layout/index.html"
                      >
                        <span className="">No Gutter</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6669   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6669"
                        href="../no-gutter-wide-layout/index.html"
                      >
                        <span className="">No Gutter Wide</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6667   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6667"
                        href="../no-gutter-metro-layout/index.html"
                      >
                        <span className="">No Gutter Metro</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6668   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6668"
                        href="../no-gutter-metro-wide/index.html"
                      >
                        <span className="">No Gutter Metro Wide</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children    ft-menu-item-6672   ft-menu-width-  ft-menu-position- ">
                  <a className="nav-link menu-button-6672" href="#">
                    <span className="">Event Templates</span>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6673   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6673"
                        href="../event/it-conference/index.html"
                      >
                        <span className="">IT Conference</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6674   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6674"
                        href="../event/kenny-g/index.html"
                      >
                        <span className="">Concert</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6675   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6675"
                        href="../event/vibra-mahou-fest/index.html"
                      >
                        <span className="">Festival</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6676   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6676"
                        href="../event/sesame-street-live-make-your-magic/index.html"
                      >
                        <span className="">Family</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6677   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6677"
                        href="../event/the-phantom-of-the-opera/index.html"
                      >
                        <span className="">Opera</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6678   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6678"
                        href="../event/cirque-du-soleil-kurios/index.html"
                      >
                        <span className="">Cirque</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-event    ft-menu-item-6679   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6679"
                        href="../event/st-petersburg-ballet-the-nutcracker/index.html"
                      >
                        <span className="">Ballet</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children    ft-menu-item-6680   ft-menu-width-  ft-menu-position- ">
                  <a className="nav-link menu-button-6680" href="#">
                    <span className="">Taxonomy Pages</span>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-event_category    ft-menu-item-6681   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6681"
                        href="../event-category/arts-theater/index.html"
                      >
                        <span className="">Category</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-event_city    ft-menu-item-6682   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6682"
                        href="../event-city/brooklyn/index.html"
                      >
                        <span className="">City</span>
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-event_place    ft-menu-item-6683   ft-menu-width-  ft-menu-position- ">
                      <a
                        className="nav-link menu-button-6683"
                        href="../event-venue/grand-chapiteau/index.html"
                      >
                        <span className="">Venue</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-has-mega-menu mega-menu-id-5384    ft-menu-item-5386   ft-menu-width-default  ft-menu-position-default ">
              <a className="nav-link menu-button-5386" href="#">
                <span className="">Features</span>
              </a>
              <ul className="sub-menu ft-mega-menu">
                <section className="wpb-content-wrapper">
                  <div className="vc_row wpb_row vc_row-fluid vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs vc_col-has-fill">
                      <div className="vc_column-inner vc_custom_1555072910669">
                        <div className="wpb_wrapper">
                          <div className="ft-event-banner  event_banner_class_6549fbefe8f6e px-lg-10">
                            <div className="ft-event-banner-inner">
                              <h5 className="text-white opacity_70 text-center mb-0">
                                Dec 26
                              </h5>
                              <h2 className="text-center lh-1-5 mt-4 mb-4">
                                <a
                                  className="banner-link"
                                  href="../event/cirque-du-soleil-kurios/index.html"
                                >
                                  Cirque du Soleil Kurios
                                </a>
                              </h2>
                              <span className="fw-500 text-white opacity_70 d-inline-block text-center mb-6">
                                Grand Chapiteau
                              </span>{" "}
                              <div className="d-flex justify-content-center">
                                <span className="badge badge-light px-3 py-2 fw-500">
                                  $49
                                </span>
                              </div>
                              <span className="justify-content-center d-none">
                                <a
                                  className="btn btn-sm btn-danger w-auto px-5"
                                  href="../event/cirque-du-soleil-kurios/index.html"
                                >
                                  <span>Details</span>
                                  <i className="fe fe-arrow-right ml-3 mr-0" />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="vc_row wpb_row vc_inner vc_row-fluid pl-lg-4 pt-lg-7 pr-lg-8 vc_custom_1585473782285">
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="vc_wp_custommenu wpb_content_element">
                                    <div className="widget widget_nav_menu">
                                      <h2 className="widgettitle">
                                        Utility Pages
                                      </h2>
                                      <div className="menu-utility-pages-container">
                                        <ul
                                          id="menu-utility-pages"
                                          className="menu"
                                        >
                                          <li
                                            id="menu-item-5952"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5952"
                                          >
                                            <a href="../create-event/index.html">
                                              Become Organizer
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6102"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6102"
                                          >
                                            <a href="../events-categories/index.html">
                                              Events Categories
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6106"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6106"
                                          >
                                            <a href="../events-venues/index.html">
                                              Events Venues
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6143"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6143"
                                          >
                                            <a href="../about-us/index.html">
                                              About Us
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6095"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6095"
                                          >
                                            <a href="../contact-us/index.html">
                                              Contact Us
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-5623"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5623"
                                          >
                                            <a href="../404.html">
                                              Error 404
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="vc_wp_custommenu wpb_content_element">
                                    <div className="widget widget_nav_menu">
                                      <h2 className="widgettitle">
                                        Blog Pages
                                      </h2>
                                      <div className="menu-blog-pages-container">
                                        <ul
                                          id="menu-blog-pages"
                                          className="menu"
                                        >
                                          <li
                                            id="menu-item-5969"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5969"
                                          >
                                            <a href="../blog/index.html">
                                              Simple
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6718"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6718"
                                          >
                                            <a href="../blog-cards/index.html">
                                              Cards
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6720"
                                            className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5978 current_page_item menu-item-6720"
                                          >
                                            <a
                                              href="index.html"
                                              aria-current="page"
                                            >
                                              Cards 2 Columns
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6723"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6723"
                                          >
                                            <a href="../blog-cards-3-columns/index.html">
                                              Cards 3 Columns
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6725"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6725"
                                          >
                                            <a href="../blog-cards-2-columns-metro/index.html">
                                              Cards 2 Columns Alt
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-5986"
                                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-5986"
                                          >
                                            <a href="../2019/10/23/the-greatest-super-bowl-games-of-all-time/index.html">
                                              Post Page
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="vc_wp_custommenu wpb_content_element">
                                    <div className="widget widget_nav_menu">
                                      <h2 className="widgettitle">
                                        Elements
                                      </h2>
                                      <div className="menu-elements-container">
                                        <ul
                                          id="menu-elements"
                                          className="menu"
                                        >
                                          <li
                                            id="menu-item-6161"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6161"
                                          >
                                            <a href="../event-blocks/index.html">
                                              Event Blocks
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6153"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6153"
                                          >
                                            <a href="../accordion/index.html">
                                              Accordion
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6154"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6154"
                                          >
                                            <a href="../icon-boxes/index.html">
                                              Icon Boxes
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6158"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6158"
                                          >
                                            <a href="../testimonials/index.html">
                                              Testimonials
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6165"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6165"
                                          >
                                            <a href="../taxonomy-blocks/index.html">
                                              Taxonomy Blocks
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6167"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6167"
                                          >
                                            <a href="../news-block/index.html">
                                              News Block
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-3">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="vc_wp_custommenu wpb_content_element menu-no-title">
                                    <div className="widget widget_nav_menu">
                                      <h2 className="widgettitle">
                                        Elements
                                      </h2>
                                      <div className="menu-elements-2-container">
                                        <ul
                                          id="menu-elements-2"
                                          className="menu"
                                        >
                                          <li
                                            id="menu-item-6733"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6733"
                                          >
                                            <a href="../categories-block/index.html">
                                              Categories
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6741"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6741"
                                          >
                                            <a href="../categories-block-2/index.html">
                                              Categories #2
                                            </a>
                                          </li>
                                          <li
                                            id="menu-item-6744"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6744"
                                          >
                                            <a href="../custom-tabs/index.html">
                                              Custom Tabs
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_row wpb_row vc_inner vc_row-fluid pl-5 pl-lg-6 pr-lg-8 vc_custom_1585477955929 vc_row-has-fill vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-xs-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element  vc_custom_1585423353337">
                                    <div className="wpb_wrapper">
                                      <h3 className="widgettitle">
                                        Popular Categories
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="royaltickets-categories ">
                                    <div className="row">
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/arts-theater/index.html"
                                        >
                                          Arts &amp; Theater{" "}
                                          <span className="text-muted">
                                            0
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/ballet-dance/index.html"
                                        >
                                          Ballet &amp; Dance{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/circus/index.html"
                                        >
                                          Circus{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/concerts/index.html"
                                        >
                                          Concerts{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/conference/index.html"
                                        >
                                          Conference{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-category/family/index.html"
                                        >
                                          Family{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-xs-12">
                              <div className="vc_column-inner vc_custom_1585423309817">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element  vc_custom_1585423341769">
                                    <div className="wpb_wrapper">
                                      <h3 className="widgettitle">
                                        Popular Venues
                                      </h3>
                                    </div>
                                  </div>
                                  <div className="royaltickets-categories ">
                                    <div className="row">
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-venue/grand-chapiteau/index.html"
                                        >
                                          Grand Chapiteau{" "}
                                          <span className="text-muted">
                                            2
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-venue/grant-park-chicago/index.html"
                                        >
                                          Grant Park, Chicago{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-venue/kings-theatre/index.html"
                                        >
                                          Kings Theatre{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-venue/majestic-theatre/index.html"
                                        >
                                          Majestic Theatre{" "}
                                          <span className="text-muted">
                                            2
                                          </span>
                                        </a>
                                      </div>
                                      <div className="col-12 col-lg-6">
                                        <a
                                          className="py-1 d-block padding-left-link widget-link"
                                          href="../event-venue/san-jose-civic/index.html"
                                        >
                                          San Jose Civic{" "}
                                          <span className="text-muted">
                                            1
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ul>
            </li> */}
            {/* <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-has-mega-menu mega-menu-id-5381    ft-menu-item-376   ft-menu-width-default  ft-menu-position-default ">
              <a className="nav-link menu-button-376" href="#">
                <span className="">Demos</span>
              </a>
              <ul className="sub-menu ft-mega-menu">
                <section className="wpb-content-wrapper">
                  <section className="vc_section section-menu-padding vc_custom_1585733277542">
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner vc_custom_1585424952360">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo01/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-01.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo01/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #1</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="../index.html"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-06.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="../index.html"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #2</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo07/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-07.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo07/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #3</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo08/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-08.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo08/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #4</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner vc_custom_1585424956698">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo09/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-09.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo09/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #5</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo10/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-10.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo10/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #6</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo11/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-11.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo11/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #7</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo12/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-12.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo12/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Event Tickets Marketplace
                                          </span>{" "}
                                          <span>Style #8</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner vc_custom_1585424952360">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo13/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-13.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo13/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Tech Summit Event
                                          </span>{" "}
                                          <span>
                                            Event Landing Page
                                          </span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo15"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-15.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo15"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Data Science Course
                                          </span>{" "}
                                          <span>One Page Demo</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo14/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-14.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo14/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Social Marketing Course
                                          </span>{" "}
                                          <span>One Page Demo</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo16/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-16.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo16/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Makeup Course
                                          </span>{" "}
                                          <span>
                                            Event Landing Page
                                          </span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wpb_column vc_column_container vc_col-sm-6">
                        <div className="vc_column-inner vc_custom_1585424956698">
                          <div className="wpb_wrapper">
                            <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo05/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-05-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo05/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Data Science Course
                                          </span>{" "}
                                          <span>One Page Demo</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo02/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-02-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo02/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Social Marketing Course
                                          </span>{" "}
                                          <span>One Page Demo</span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo04/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-04-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo04/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Creative Summit Event
                                          </span>{" "}
                                          <span>
                                            Event Landing Page
                                          </span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_column vc_column_container vc_col-sm-3">
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="demo-block w-100 d-block">
                                      <a
                                        className="d-none d-sm-block event-image-gallery"
                                        href="https://royaltickets.fantasythemes.net/demo03/"
                                      >
                                        <span className="expand-image">
                                          <i className="fe fe-link-2" />
                                        </span>
                                        <img
                                          className="w-100"
                                          src="../wp-content/uploads/2020/02/demo-03-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="d-block d-sm-none">
                                        <a
                                          href="https://royaltickets.fantasythemes.net/demo03/"
                                          className="pt-3"
                                        >
                                          <span className="fs-16 fw-600 w-100 d-block">
                                            Makeup Course
                                          </span>{" "}
                                          <span>
                                            Event Landing Page
                                          </span>{" "}
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
              </ul>
            </li> */}
            <li className="menu-item menu-item-type-post_type menu-item-object-page    ft-menu-item-6094   ft-menu-width-default  ft-menu-position-default ">
              <a
                className="nav-link menu-button-6094"
                href="../contact-us/index.html"
              >
                <span className="">Contact Us</span>
              </a>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page   cta-button ft-menu-item-48   ft-menu-width-default  ft-menu-position-default ">
            <li className="menu-login-register-button menu-item ml-4">
                          <a
                            className="login-button"
                            href="#"
                            data-toggle="modal"
                            data-target="#loginRegisterModal"
                          >
                            <i
                              className="fas fa-sign-in-alt"
                              aria-hidden="true"
                            />{" "}
                            Login/Register
                          </a>
                        </li>
            </li>
            {/* <li className="menu-item">
              <a
                href="#"
                className="favorite-action-button rounded-menu-button d-inline-flex align-items-center justify-content-center h4 mb-0 fs-20"
              >
                <span className="fe fe-heart align-middle" />
              </a>
            </li> */}
            <li className="menu-item">
              <a
                href="#"
                className="sidebarmenu-action-button rounded-menu-button d-inline-flex align-items-center justify-content-center h4 mb-0 fs-20"
              >
                <span className="fe fe-menu align-middle" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
