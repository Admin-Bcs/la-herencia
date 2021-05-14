import React from 'react';
import Link from 'next/link';

const SiteBreadcrumb = (props) => {
	const { pageTitle } = props;
	return (
		<div className="breadcrumb-area pt-160 pb-170" style={{ backgroundImage:`url(${'assets/img/bg/banner-general.svg'})`}}>
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="breadcrumb-text text-center">
							<h1>{ pageTitle ? pageTitle : 'Blog'}</h1>
							<ul className="breadcrumb-menu">
								<li><Link href="/" as="/"><a>Home</a></Link></li>
								<li><span>{ pageTitle ? pageTitle : 'Blog'}</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SiteBreadcrumb;




