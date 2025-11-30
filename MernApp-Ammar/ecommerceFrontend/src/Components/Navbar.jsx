function Navbar() {
    return ( 

<>
<>
  {/* preloader start */}
  <div id="preloader">
    <div className="bd-loader-inner">
      <div className="bd-loader">
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
        <span className="bd-loader-item" />
      </div>
    </div>
  </div>
  {/* preloader start */}
  {/* Back to top start */}
  <div className="backtotop-wrap cursor-pointer">
    <svg
      className="backtotop-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* Back to top end */}
  {/* search area start */}
  <div className="df-search-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="df-search-form">
            <div className="df-search-close text-center mb-20">
              <button className="df-search-close-btn df-search-close-btn" />
            </div>
            <form action="#">
              <div className="df-search-input mb-10">
                <input type="text" placeholder="Search for product..." />
                <button type="submit">
                  <i className="flaticon-search-1" />
                </button>
              </div>
              <div className="df-search-category">
                <span>Search by : </span>
                <a href="#">Healthline, </a>
                <a href="#">COVID-19, </a>
                <a href="#">Surgery, </a>
                <a href="#">Surgeon, </a>
                <a href="#">Medical research</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="body-overlay" />
  {/* search area end */}
  {/* Offcanvas area start */}
  <div className="fix">
    <div className="offcanvas__info">
      <div className="offcanvas__wrapper">
        <div className="offcanvas__content">
          <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
            <div className="offcanvas__logo">
              <a href="index.html">
                <img
                // src="/imgs/furniture/logo/logo-light.svg"
                  src="/assets/imgs/furniture/logo/logo-light.svg"
                  alt="logo not found"
                />
              </a>
            </div>
            <div className="offcanvas__close">
              <button>
                <i className="fal fa-times" />
              </button>
            </div>
          </div>
          <div className="offcanvas__search mb-25">
            <form action="#">
              <input type="text" placeholder="What are you searching for?" />
              <button type="submit">
                <i className="far fa-search" />
              </button>
            </form>
          </div>
          <div className="mobile-menu fix mb-40" />
          <div className="offcanvas__contact mt-30 mb-20">
            <h4>Contact Info</h4>
            <ul>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="offcanvas__contact-text">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                  >
                    12/A, Mirnada City Tower, NYC
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="far fa-phone" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="tel:+088889797697">+088889797697</a>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="offcanvas__contact-icon mr-15">
                  <i className="fal fa-envelope" />
                </div>
                <div className="offcanvas__contact-text">
                  <a href="tel:+012-345-6789">
                    <span className="mailto:support@mail.com">
                      support@mail.com
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="offcanvas__social">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="offcanvas__overlay" />
  <div className="offcanvas__overlay-white" />
  {/* Offcanvas area start */}
  {/* Add cart modal area start */}
  <div
    className="product-modal-sm modal fade"
    id="producQuickViewModal"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="product-modal">
          <div className="product-modal-wrapper p-relative">
            <button
              type="button"
              className="close product-modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="fal fa-times" />
            </button>
            <div className="modal__inner">
              <div className="bd__shop-details-inner">
                <div className="row">
                  <div className="col-xxl-6 col-lg-6">
                    <div className="product__details-thumb-wrapper d-sm-flex align-items-start">
                      <div className="product__details-thumb-tab mr-20">
                        <nav>
                          <div
                            className="nav nav-tabs flex-nowrap flex-sm-column"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="img-1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#img-1"
                              type="button"
                              role="tab"
                              aria-controls="img-1"
                              aria-selected="true"
                            >
                              <img
                                src="assets/imgs/product/details/details-04.png"
                                alt="product-sm-thumb"
                              />
                            </button>
                            <button
                              className="nav-link"
                              id="img-2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#img-2"
                              type="button"
                              role="tab"
                              aria-controls="img-3"
                              aria-selected="false"
                            >
                              <img
                                src="assets/imgs/product/details/details-05.png"
                                alt="product-sm-thumb"
                              />
                            </button>
                            <button
                              className="nav-link"
                              id="img-3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#img-3"
                              type="button"
                              role="tab"
                              aria-controls="img-3"
                              aria-selected="false"
                            >
                              <img
                                src="assets/imgs/product/details/details-06.png"
                                alt="product-sm-thumb"
                              />
                            </button>
                          </div>
                        </nav>
                      </div>
                      <div className="product__details-thumb-tab-content">
                        <div className="tab-content" id="productthumbcontent">
                          <div
                            className="tab-pane fade show active"
                            id="img-1"
                            role="tabpanel"
                            aria-labelledby="img-1-tab"
                          >
                            <div className="product__details-thumb-big w-img">
                              <img
                                src="assets/imgs/product/details/details-04.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="img-2"
                            role="tabpanel"
                            aria-labelledby="img-2-tab"
                          >
                            <div className="product__details-thumb-big w-img">
                              <img
                                src="assets/imgs/product/details/details-05.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="img-3"
                            role="tabpanel"
                            aria-labelledby="img-3-tab"
                          >
                            <div className="product__details-thumb-big w-img">
                              <img
                                src="assets/imgs/product/details/details-06.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-lg-6">
                    <div className="product__details-content">
                      <div className="product__details-top d-flex flex-wrap gap-3 align-items-center mb-15">
                        <div className="product__details-tag">
                          <a href="#">Construction</a>
                        </div>
                        <div className="product__details-rating">
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-solid fa-star" />
                          </a>
                          <a href="#">
                            <i className="fa-regular fa-star" />
                          </a>
                        </div>
                        <div className="product__details-review-count">
                          <a href="#">10 Reviews</a>
                        </div>
                      </div>
                      <h3 className="product__details-title">
                        Disposable Surgical Face Mask
                      </h3>
                      <div className="product__details-price">
                        <span className="old-price">$30.35</span>
                        <span className="new-price">$19.25</span>
                      </div>
                      <p>
                        Priyoshop has brought to you the Hijab 3 Pieces Combo
                        Pack PS23. It is a completely modern design and you feel
                        comfortable to put on this hijab. Buy it at the best
                        price.
                      </p>
                      <div className="product__details-action mb-35">
                        <div className="product__quantity">
                          <div className="product-quantity-wrapper">
                            <form action="#">
                              <button className="cart-minus">
                                <i className="fa-light fa-minus" />
                              </button>
                              <input
                                className="cart-input"
                                type="text"
                                defaultValue={1}
                              />
                              <button className="cart-plus">
                                <i className="fa-light fa-plus" />
                              </button>
                            </form>
                          </div>
                        </div>
                        <div className="product__add-cart">
                          <a
                            href="javascript:void(0)"
                            className="fill-btn cart-btn"
                          >
                            <span className="fill-btn-inner">
                              <span className="fill-btn-normal">
                                Add To Cart
                                <i className="fa-solid fa-basket-shopping" />
                              </span>
                              <span className="fill-btn-hover">
                                Add To Cart
                                <i className="fa-solid fa-basket-shopping" />
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="product__add-wish">
                          <a href="#" className="product__add-wish-btn">
                            <i className="fa-solid fa-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="product__details-meta">
                        <div className="sku">
                          <span>SKU:</span>
                          <a href="#">BO1D0MX8SJ</a>
                        </div>
                        <div className="categories">
                          <span>Categories:</span> <a href="#">Milk,</a>{" "}
                          <a href="#">Cream,</a> <a href="#">Fermented.</a>
                        </div>
                        <div className="tag">
                          <span>Tags:</span> <a href="#"> Cheese,</a>{" "}
                          <a href="#">Custard,</a> <a href="#">Frozen</a>
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
  </div>
  {/* Add cart modal area end */}
  {/* Header area start */}
  <header>
    <div className="header">
      <div className="header-top-area grocery__top-header">
        <div className="header-layout-4">
          <div className="header-to-main d-none d-sm-flex">
            <div className="link-text">
              <span>
                <img src="assets/imgs/icons/call.png" alt="" />
              </span>
              <a href="tel:+380961381876">+380961381876</a>
            </div>
            <div className="header-top-notice d-none d-lg-block">
              <p>
                TAKE CARE OF YOUR Health{" "}
                <span className="text-white">25% OFF</span> USE CODE “ DOFIX03 ”
              </p>
            </div>
            <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
              <div className="header-lang-item header-lang">
                <span
                  className="header-lang-toggle text-white"
                  id="header-lang-toggle"
                >
                  English
                </span>
                <ul className="">
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      Portuguese
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-lang-item tp-header-currency">
                <span
                  className="header-currency-toggle text-white"
                  id="header-currency-toggle"
                >
                  USD
                </span>
                <ul>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      CHF
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      GBP
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      KWD
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-lang-item tp-header-setting">
                <span
                  className="header-setting-toggle text-white"
                  id="header-setting-toggle"
                >
                  Setting
                </span>
                <ul>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="wishlist.html">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="cart.html">
                      Cart
                    </a>
                  </li>
                  <li>
                    <a className="furniture-clr-hover" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-layout-4 header-bottom">
        <div id="header-sticky" className="header-4">
          <div className="mega-menu-wrapper">
            <div className="header-main-4">
              <div className="header-left">
                <div className="header-logo">
                  <a href="index.html">
                    <img
                      src="assets/imgs/furniture/logo/logo.svg"
                      alt="logo not found"
                    />
                  </a>
                </div>
                <div className="mean__menu-wrapper furniture__menu d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown">
                          <a href="index.html">Home</a>
                          <ul className="submenu">
                            <li>
                              <a href="pharmacy.html">Pharmacy Store</a>
                            </li>
                            <li>
                              <a href="index.html">Furniture Store</a>
                            </li>
                            <li>
                              <a href="grocery.html">Grocery Store</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="product.html">Shop</a>
                          <ul className="submenu">
                            <li>
                              <a href="product.html">Product</a>
                            </li>
                            <li>
                              <a href="product-details.html">Product Details</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="about.html">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="store.html">Find a Store</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="error.html">404</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="blog.html">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog Default</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">Blog Grid</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-inline-flex align-items-center justify-content-end">
                <div className="header-search d-none d-xxl-block">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4443 13.4445L16.9999 17"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.2222 8.11111C15.2222 12.0385 12.0385 15.2222 8.11111 15.2222C4.18375 15.2222 1 12.0385 1 8.11111C1 4.18375 4.18375 1 8.11111 1C12.0385 1 15.2222 4.18375 15.2222 8.11111Z"
                          stroke="white"
                          strokeWidth={2}
                        />
                      </svg>
                    </button>
                  </form>
                </div>
                <div className="header-action d-flex align-items-center ml-30">
                  <div className="header-action-item">
                    <a href="wishlist.html" className="header-action-btn">
                      <svg
                        width={23}
                        height={21}
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.2743 2.33413C20.6448 1.60193 19.8543 1.01306 18.9596 0.609951C18.0649 0.206838 17.0883 -0.0004864 16.1002 0.00291444C14.4096 -0.0462975 12.7637 0.529279 11.5011 1.61122C10.2385 0.529279 8.59252 -0.0462975 6.90191 0.00291444C5.91383 -0.0004864 4.93727 0.206838 4.04257 0.609951C3.14788 1.01306 2.35732 1.60193 1.72785 2.33413C0.632101 3.61193 -0.514239 5.92547 0.245772 9.69587C1.4588 15.7168 10.5548 20.6578 10.9388 20.8601C11.11 20.9518 11.3028 21 11.4988 21C11.6948 21 11.8875 20.9518 12.0587 20.8601C12.445 20.6534 21.541 15.7124 22.7518 9.69587C23.5164 5.92547 22.37 3.61193 21.2743 2.33413ZM20.4993 9.27583C19.6416 13.5326 13.4074 17.492 11.5011 18.6173C8.81516 17.0587 3.28927 13.1457 2.50856 9.27583C1.91872 6.35103 2.72587 4.65208 3.50773 3.74126C3.9212 3.26166 4.43995 2.87596 5.02678 2.61185C5.6136 2.34774 6.25396 2.21175 6.90191 2.21365C7.59396 2.16375 8.28765 2.2871 8.91534 2.57168C9.54304 2.85626 10.0833 3.29235 10.4835 3.83743C10.5822 4.012 10.7278 4.15794 10.9051 4.26003C11.0824 4.36212 11.2849 4.41662 11.4916 4.41787C11.6983 4.41911 11.9015 4.36704 12.0801 4.26709C12.2587 4.16714 12.4062 4.02296 12.5071 3.84959C12.9065 3.30026 13.448 2.86048 14.0781 2.57361C14.7081 2.28674 15.4051 2.16267 16.1002 2.21365C16.7495 2.21061 17.3915 2.34604 17.9798 2.6102C18.5681 2.87435 19.0881 3.26065 19.5025 3.74126C20.282 4.65208 21.0892 6.35103 20.4993 9.27583Z"
                          fill="black"
                        />
                      </svg>
                      <span className="header-action-badge bg-furniture">
                        3
                      </span>
                    </a>
                  </div>
                  <div className="header-action-item">
                    <a
                      href="cart.html"
                      className="header-action-btn cartmini-open-btn"
                    >
                      <svg
                        width={21}
                        height={23}
                        viewBox="0 0 21 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0625 10.6C14.0625 12.5883 12.4676 14.2 10.5 14.2C8.53243 14.2 6.9375 12.5883 6.9375 10.6M1 5.8H20M1 5.8V13C1 20.6402 2.33946 22 10.5 22C18.6605 22 20 20.6402 20 13V5.8M1 5.8L2.71856 2.32668C3.12087 1.5136 3.94324 1 4.84283 1H16.1571C17.0568 1 17.8791 1.5136 18.2814 2.32668L20 5.8"
                          stroke="black"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="header-action-badge bg-furniture">
                        12
                      </span>
                    </a>
                  </div>
                </div>
                <div className="header-humbager ml-30">
                  <a className="sidebar__toggle" href="javascript:void(0)">
                    <div className="bar-icon-2">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                  {/* for wp */}
                  <div className="header__hamburger ml-50 d-none">
                    <button
                      type="button"
                      className="hamburger-btn offcanvas-open-btn"
                    >
                      <span>01</span>
                      <span>01</span>
                      <span>01</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Header area end */}
</>



</>

     );
}

export default Navbar;