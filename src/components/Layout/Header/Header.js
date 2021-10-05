import React, { Component, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';
import TopHeader from './TopBar';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';


const Header = () => {

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
		
			<header className="header" id="header-wrap">
				<TopHeader />

				<div id="sticky-header" className="main-menu-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-2 col-lg-2 col-md-4 col-6">
								<div className="logo">
									<Link href="/" as="/">
										<a>
											{/* <img className="standard-logo" src={require("../../../../public/assets/img/logo/laherencia/laherencia.png")} alt="logo" /> */}
											<img className="retina-logo" src={require("../../../../public/assets/img/logo/laherencia/laherencia.png")} alt="logo@2x" />
										</a>
									</Link>
								</div>
							</div>
							<div className="col-xl-10 col-lg-10 d-none d-xl-block d-lg-block">
								<div className="header-right f-right">
									<ul>
										{/* <li className="search-icon">
											<a href="#" onClick={() => setSearchBarOpen(!searchBarOpen)}>
												<i className="dripicons-search"></i>
											</a>
										</li> */}
										{/* <li className="unser-icon">
											<a href="#">
												<i className="dripicons-user"></i>
											</a>
										</li> */}
										{/* ß */}
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
												<Link href="/" as="/" ><a>HOME</a></Link>

											</li>
											<li className={path === "/about" ? "active" : ""}>
												<Link href="/about" as="/about" ><a>ABOUT US</a></Link>
											</li>
											<li className={path === "/" ? "active" : ""}>
												<Link href="#" as="/" ><a>OUR PRODUCTS</a></Link>
												<ul className="sub-menu text-left">
													<li className={path === "/ShopHerencia" ? "active" : ""}>
														<Link href="/ShopHerencia" as="/ShopHerencia">
															<a>Spices</a>
														</Link>
													</li>
													<li className={path === "/ShopBersys" ? "active" : ""}>
														<Link href="/ShopBersys" as="/ShopBersys">
															<a>Snack</a>
														</Link>
													</li>
													{/* <li className={path === "/ShopClaudio" ? "active" : ""}>
														<Link href="/ShopClaudio" as="/ShopClaudio">
															<a>Herbs</a>
														</Link>
													</li> */}
												</ul>

											</li>
											{/* <li className={path === "" ? "active" : ""}>
												<Link href="" as="" ><a>OUR BRANDS</a></Link>
												<ul className="sub-menu text-left">
													<li className={path === "/BrandHerencia" ? "active" : ""}>
														<Link href="/BrandHerencia" as="/BrandHerencia">
															<a>La Herencia Spices</a>
														</Link>
													</li>
													<li className={path === "#" ? "active" : ""}>
														<Link href="/BrandBersys" as="/BrandBersys">
															<a>Bersy’s Snack</a>
														</Link>
													</li>
													{/* <li className={path === "#" ? "active" : ""}>
														<Link href="/BrandClaudios" as="/BrandClaudios">
															<a>Claudio’s Tea Herb</a>
														</Link>
													</li> 

												</ul>
											</li>
											<li className={path === "/blog" ? "active" : ""}>
												<Link href="/blog" as="/blog" ><a>CLIENT</a></Link>
											</li>
 */}
											<li className={path === "/contact" ? "active" : ""}>
												<Link href="/contact" as="/contact">
													<a>CONTACT</a>
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

export default Header;