import React, { Component } from 'react';

const ArticleContent = (props) => {

  const post = props.post;
  return (
      <article className="postbox post format-image mb-40">
        <div className="postbox__thumb mb-35">
            <img src={post.image} alt={post.title} />
        </div>
        <div className="postbox__text bg-none">
            <div className="post-meta mb-15">
                <span><i className="far fa-calendar-check"></i> September 15, 2018 </span>
                <span><a href="#"><i className="far fa-user"></i> Diboli B. Joly</a></span>
                <span><a href="#"><i className="far fa-comments"></i> 23 Comments</a></span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <div className="post-text mb-20">{post.text}</div>
            <div className="row mt-50">
                <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                    <div className="blog-post-tag">
                        <span>Releted Tags</span>
                        <a href="#">organic</a>
                        <a href="#">Foods</a>
                        <a href="#">tasty</a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                    <div className="blog-share-icon text-left text-md-right">
                        <span>Share: </span>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                          <a href="https://www.instagram.com/laherenciaspices"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="navigation-border pt-50 mt-40"></div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="bakix-navigation b-next-post text-left mb-30">
                        <span><a href="#">Next Post</a></span>
                        <h4><a href="#">Tips on Minimalist</a></h4>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                        <span><a href="#">Next Post</a></span>
                        <h4><a href="#">Tips on Minimalist</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="author mt-80 mb-40">
            <div className="author-img text-center">
                <img src="assets/img/blog/details/author.png" alt="" />
            </div>
            <div className="author-text text-center">
                <h3>MD. Salim Rana</h3>
                <div className="author-icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-behance-square"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequa aute irure dolor. </p>
            </div>
        </div>
        <div className="post-comments">
            <div className="blog-coment-title mb-30">
                <h2>03 Comments</h2>
            </div>
            <div className="latest-comments">
                <ul>
                    <li>
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <img src="assets/img/blog/details/comments1.png" alt="" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>Karon Balina</h5>
                                    <span>19th May 2018</span>
                                    <a className="reply" href="#"><i className="fas fa-reply"></i>Reply</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <img src="assets/img/blog/details/comments1.png" alt="" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>Julias Roy</h5>
                                    <span>19th May 2018</span>
                                    <a className="reply" href="#"><i className="fas fa-reply"></i>Reply</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <img src="assets/img/blog/details/comments2.png" alt="" />

                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>Arista Williamson</h5>
                                    <span>19th May 2018</span>
                                    <a className="reply" href="#"><i className="fas fa-reply"></i>Reply</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="post-comments-form">
            <div className="post-comments-title">
                <h2>Post Comments</h2>
            </div>
            <form id="contacts-form" className="conatct-post-form" action="#">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-message">
                            <textarea name="comments" id="comments" cols="30" rows="10" placeholder="Your Comments...."></textarea>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-name">
                            <input type="text" placeholder="Your Name.... " />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-email">
                            <input type="email" placeholder="Your Email...." />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="contact-icon contacts-website">
                            <input type="text" placeholder="Your Website...." />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <button className="btn" type="submit"> <span className="btn-text">Post comment <i className="far fa-long-arrow-right"></i></span></button>
                    </div>
                </div>
            </form>
        </div>
    </article>
  );
}

export default ArticleContent;


								