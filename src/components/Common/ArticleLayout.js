import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ post }) => {
	return (
		<article className="postbox post format-image mb-40">
			<div className="postbox__thumb">
				<Link href={post.url} as={'/'+ post.url}>
					<a><img src={'/'+ post.image} alt="blog image" /></a>
				</Link>
			</div>
			<div className="postbox__text p-50">
				<div className="post-meta mb-15">
					<span> <i><FontAwesomeIcon icon={['far', 'user']} /></i> Soamlia</span>
					<span> <i><FontAwesomeIcon icon={['far', 'calendar-check']} /></i> 05 Aug 2019</span>
					<span> <i><FontAwesomeIcon icon={['far', 'comments']} /></i> (03)COMMENTS</span>
				</div>
				<h3 className="blog-title">
					<Link href={post.url} as={'http://localhost:3000'+ post.url}>
						<a>{post.title}</a>
					</Link>
				</h3>
				<div className="post-text mb-20">
					<p>{post.text}</p>
				</div>
				<div className="read-more mt-30">
					<Link href={post.url} as={'http://localhost:3000'+ post.url}>
						<a className="btn theme-btn">Read More</a>
					</Link>
				</div>
			</div>
		</article>
	);
	
}

export default ArticleLayout;

