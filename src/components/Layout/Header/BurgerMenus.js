import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router'

export default function BurgerMenus({setMenuOpen, menuOpen}) {

	const [home, setHome] = useState(false)
	const [service, setService] = useState(false)
	const [blog, setBlog] = useState(false)
	const [pages, setPages] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	const toggleMenu = menu => {
		
		if( menu == 'home'){
			setHome(!home)
			setService(false)
			setBlog(false)
			setPages(false)
		}
		else if( menu == 'service'){
			setHome(false)
			setService(!service)
			setBlog(false)
			setPages(false)
		}
		else if( menu == 'blog'){
			setHome(false)
			setService(false)
			setBlog(!blog)
			setPages(false)
		}
		else if( menu == 'pages'){
			setHome(false)
			setService(false)
			setBlog(false)
			setPages(!pages)
		}
	}; 

	


	return (
		<div className={menuOpen ? "side-mobile-menu d-block d-xl-done d-lg-none open": "side-mobile-menu d-block d-xl-done d-lg-none"}>
			<div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
				<span><i><FontAwesomeIcon icon={['far', 'times']}/></i></span>
			</div>
			<div className="mm-menu">
				<ul>
					<li className={home ? "has-droupdown active" : "has-droupdown"}>
						<a onClick={() => { toggleMenu('home') }}>home</a>
						<ul className={home ? "sub-menu active" : "sub-menu"}>
							<li className={path === "/" ? "active" : ""}>
								<Link href="/" as="/" ><a>Home 1</a></Link>
							</li>
							<li className={path === "/home-2" ? "active" : ""}>
								<Link href="/home-2" as="/home-2" ><a>Home 2</a></Link>
							</li>
							<li className={path === "/home-3" ? "active" : ""}>
								<Link href="/home-3" as="/home-3" ><a>Home 3</a></Link>
							</li>
						</ul>
					</li>
					<li className={path === "/about" ? "active" : ""}>
						<Link href="/about" as="/about" ><a>About</a></Link>
					</li>
					<li className={path === "/services" ? "active" : ""}>
						<Link href="/services" as="/services" ><a>Services</a></Link>
					</li>
					<li className={path === "/shop" ? "active" : ""}>
						<Link href="/shop" as="/shop" ><a>shop</a></Link>
					</li>
					<li className={path === "/blog" ? "active" : ""}>
						<Link href="/blog" as="/blog" ><a>Blog</a></Link>
					</li>
					<li className={pages ? "has-droupdown active" : "has-droupdown"}>
						<a onClick={() => {toggleMenu("pages") }}>Pages</a>
						<ul className={pages ? "sub-menu active" : "sub-menu"}>
							<li className={path === "/gallery-1" ? "active" : ""}>
								<Link href="/gallery-1" as="/gallery-1">
									<a>Gallery 01</a>
								</Link>
							</li>
							<li className={path === "/gallery-2" ? "active" : ""}>
								<Link href="/gallery-2" as="/gallery-2">
									<a>Gallery 02</a>
								</Link>
							</li>
							<li className={path === "/gallery-3" ? "active" : ""}>
								<Link href="/gallery-3" as="/gallery-3">
									<a>Gallery 03</a>
								</Link>
							</li>
							<li className={path === "/gallery-details-1" ? "active" : ""}>
								<Link href="/gallery-details-1" as="/gallery-details-1">
									<a>Gallery Details 01</a>
								</Link>
							</li>
							<li className={path === "/gallery-details-2" ? "active" : ""}>
								<Link href="/gallery-details-2" as="/gallery-details-2">
									<a>Gallery Details 02</a>
								</Link>
							</li>
							<li className={path === "/gallery-details-3" ? "active" : ""}>
								<Link href="/gallery-details-3" as="/gallery-details-3">
									<a>Gallery Details 03</a>
								</Link>
							</li>
							<li className={path === "/gallery-details-4" ? "active" : ""}>
								<Link href="/gallery-details-4" as="/gallery-details-4">
									<a>Gallery Details 04</a>
								</Link>
							</li>
							<li className={path === "/team" ? "active" : ""}>
								<Link href="/blog-details" as="/blog-details">
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
							<li className={path === "/team" ? "active" : ""}>
								<Link href="/team" as="/team">
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
			</div>
		</div>
	)
}


