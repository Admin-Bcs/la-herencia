import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import store from '../../redux/store';
import ReactGA from 'react-ga';
import articleDetails from '../../sample-data/blog-posts/single-post.json';
import SiteBreadcrumb from '../Common/Breadcumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogPostComments from './BlogPostComments'
import BlogCommentsForm from './BlogPostCommentsForm';
import BlogWidgetFeeds from './BlogWidgetFeeds';
import BlogWidgetCate from './BlogWidgetCate';
import BlogWidgetSearch from './BlogWidgetSearch';
import BlogWidgetAbout from './BlogWidgetAbout';
import BlogWidgetSocial from './BlogWidgetSocial';
import BlogWidgetInsta from './BlogWidgetInsta';
import BlogWidgetTags from './BlogWidgetTags';
import BlogWidgetBanner from './BlogWidgetBanner';
import BlogPostAuthor from './BlogPostAuthor';
import BlogPostArrow from './BlogPostArrow';
import BlogPostRelated from './BlogPostRelated';

class BlogDetailsMain extends Component {

    static async getInitialProps({ query }) {  
        const {slug} = query;
        return { slug }
    }
    
    constructor(props) {
        super(props);
    }

    getDetails() {
        store.dispatch({
            type: 'NEWS_DETAILS_SUCCESS',
            newsDetails: articleDetails
        });
    }

    componentDidMount() {
        this.getDetails();
        ReactGA.initialize('UA-168056874-1', { alwaysSendToDefaultTracker: true });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {

        const { slug, newsDetails} = this.props;

        return (
            
            <main>
                {newsDetails && newsDetails.map((article, num) => (
                <Head key={num}>
                    <title>{article.title}</title>
                    <meta name={article.title} />
                    <meta name="og:title" property="og:title" content={article.title}></meta>
                    <meta name="og:description" property="og:description" content={article.text}></meta>
                    <meta name="twitter:card" content={article.title}></meta>
                    <link rel="canonical" href={'https://torun.bdevs.net'+ article.url}></link>
                    <meta property="og:image" content={article.image} />
                </Head>
                ))}

                {/* breadcrumb-area-start */}
                {newsDetails && newsDetails.map((article, num) => (
                    <SiteBreadcrumb pageTitle={article.title} key={num}/>
                ))}
                {/* breadcrumb-area-start */}

                {/* blog-area start */}
                <div className="blog-area gray-bg pt-120 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* article here */}
                                {newsDetails && newsDetails.map((article, num) => (
                                <article className="postbox post format-image mb-40" key={num}>
                                    <div className="postbox__thumb">
                                        <img src={article.image} alt={article.title} />
                                    </div>
                                    <div className="postbox__text p-50">
                                        <div className="post-meta mb-15">
                                            <span>
                                                <i><FontAwesomeIcon icon={['far', 'calendar-check']} /></i> September 15, 2018 
                                            </span>
                                            <span>
                                                <a href="#"><i><FontAwesomeIcon icon={['far', 'user']} /></i> Diboli B. Joly</a>
                                            </span>
                                            <span>
                                                <a href="#"><i><FontAwesomeIcon icon={['far', 'comments']} /></i> 23 Comments</a>
                                            </span>
                                        </div>
                                        <h3 className="blog-title">{article.title}</h3>
                                        <div className="post-text mb-20">{article.text}</div>
                                        <BlogPostRelated />
                                        <BlogPostArrow />
                                    </div>
                                    <BlogPostAuthor />
                                    <BlogPostComments />
                                    <BlogCommentsForm />
                                </article>
                                ))}
                            </div>
                            <div className="col-lg-4">
                                <BlogWidgetSearch />
                                <BlogWidgetAbout />
                                <BlogWidgetFeeds />
                                <BlogWidgetCate />
                                <BlogWidgetSocial />
                                <BlogWidgetTags />
                                <BlogWidgetBanner />
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog-area end */}
            </main>
            
        );
    }
}

const mapStateToProps = (state) => {
    const { newsDetails } = state.newsDetails;
    return { newsDetails }
};
  
export default connect(mapStateToProps)(BlogDetailsMain);


