import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import TopHeader2 from './TopBar2';
import BurgerMenus from './BurgerMenus';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

const Header2 = () => {

	const [menuOpen, setMenuOpen] = useState(false)
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const [searchBarOpen, setSearchBarOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])


	return (
		<React.Fragment>
			<header>
				<TopHeader2 />
				<div id="sticky-header" className="main-menu-area menu-area-2">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-2 col-md-4 col-6">
								<div className="logo">
									<Link href="/" as="/">
										<a>
											<img className="standard-logo"
												src={require("../../../../public/assets/img/logo/logo.png")}
												alt="logo" />
											<img className="retina-logo"
												src={require("../../../../public/assets/img/logo/logo@2x.png")}
												alt="logo@2x" />
										</a>
									</Link>
								</div>
							</div>
							<div className="col-xl-10 col-lg-10 d-none d-xl-block d-lg-block">
								<div className="header-right f-right">
									<ul>
										<li className="search-icon">
											<a href="#" onClick={() => setSearchBarOpen(!searchBarOpen)}>
												<i className="dripicons-search"></i>
											</a>
										</li>
										<li className="unser-icon">
											<a href="#">
												<i className="dripicons-user"></i>
											</a>
										</li>
										<li className="cart-icon">
											<a href="#">
												<i className="dripicons-cart"></i>
											</a>
											<span>2152 </span>
										</li>
										<li className={sidebarOpen ? "info-bar active" : "info-bar"}>
											<a href="#" onClick={() => setSidebarOpen(!sidebarOpen)}>
												<i className="dripicons-vibrate"></i>
											</a>
										</li>
									</ul>
								</div>
								<div className="main-menu text-right f-right">
									<nav id="mobile-menu">
										<ul>
											<li>
												<Link href="/" as="/"><a>home</a></Link>
												<ul className="sub-menu text-left">
													<li className={path === "/" ? "active" : ""}>
														<Link href="/" as="/"><a>Home 1</a></Link>
													</li>
													<li className={path === "/" ? "active" : ""}>
														<Link href="/" as="/"><a>Home 2</a></Link>
													</li>
													<li>
														<Link href="/" as="/"><a>Home 3</a></Link>
													</li>
												</ul>
											</li>
											<li className={path === "/about" ? "active" : ""}>
												<Link href="/about" as="/about"><a>About</a></Link>
											</li>
											<li className={path === "/services" ? "active" : ""}>
												<Link href="/services" as="/services"><a>Services</a></Link>
											</li>
											<li className={path === "/shop" ? "active" : ""}>
												<Link href="/shop" as="/shop"><a>shop</a></Link>
											</li>
											<li className={path === "/blog" ? "active" : ""}>
												<Link href="/blog" as="/blog"><a>Blog</a></Link>
											</li>
											<li>
												<Link href="#" as="#"><a>Pages</a></Link>
												<ul className="sub-menu text-left">
													<li className={path === "/gallery-1" ? "active" : ""}>
														<Link href="/gallery-1" as="/gallery-1">
															<a>Gallery 01</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery 02</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery 03</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery Details 01</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery Details 02</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery Details 03</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Gallery Details 04</a>
														</Link>
													</li>
													<li className={path === "" ? "active" : ""}>
														<Link href="" as="">
															<a>Blog Details</a>
														</Link>
													</li>
													<li className={path === "/services-details" ? "active" : ""}>
														<Link href="/services-details" as="/services-details">
															<a>Service Details</a>
														</Link>
													</li>
													<li className={path === "/shop-details" ? "active" : ""}>
														<Link href="/shop-details" as="/shop-details">
															<a>Shop Details</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="#" as="#">
															<a>Team</a>
														</Link>
													</li>
													<li className={path === "/404" ? "active" : ""}>
														<Link href="/404" as="/404">
															<a>404 Error</a>
														</Link>
													</li>
												</ul>
											</li>
											<li className={path === "/contact" ? "active" : ""}>
												<Link href="/contact" as="/contact">
													<a>Contact</a>
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="d-block d-xl-none d-lg-none col-md-8 col-6 text-right">
								<div className="menu-bar">
									<button className="bars" onClick={() => {
										setMenuOpen(!menuOpen)
									}}>
										<i> <FontAwesomeIcon icon={['far', 'bars']} /></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

				<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>

				<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

				<SearchBar searchBarOpen={searchBarOpen} setSearchBarOpen={setSearchBarOpen} />
			</header>
		</React.Fragment>
	);
}

export default Header2;