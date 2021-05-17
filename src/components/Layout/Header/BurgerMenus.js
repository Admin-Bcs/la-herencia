import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router'

export default function BurgerMenus({ setMenuOpen, menuOpen }) {

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

		if (menu == 'home') {
			setHome(!home)
			setService(false)
			setBlog(false)
			setPages(false)
		}
		else if (menu == 'service') {
			setHome(false)
			setService(!service)
			setBlog(false)
			setPages(false)
		}
		else if (menu == 'blog') {
			setHome(false)
			setService(false)
			setBlog(!blog)
			setPages(false)
		}
		else if (menu == 'pages') {
			setHome(false)
			setService(false)
			setBlog(false)
			setPages(!pages)
		}
	};




	return (
		<div className={menuOpen ? "side-mobile-menu d-block d-xl-done d-lg-none open" : "side-mobile-menu d-block d-xl-done d-lg-none"}>
			<div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
				<span><i><FontAwesomeIcon icon={['far', 'times']} /></i></span>
			</div>
			<div className="mm-menu">
				<ul>
					<ul>
						<li>
							<Link href="/" as="/" ><a>HOME</a></Link>

						</li>

						<li className={path === "/about" ? "active" : ""}>
							<Link href="/about" as="/about" ><a>ABOUT US</a></Link>
						</li>
						<li className={path === "/" ? "active" : ""}>
							<li className={home ? "has-droupdown active" : "has-droupdown"}>
								<a onClick={() => { toggleMenu('home') }}>OUR PRODUCTS</a>
								<ul className={home ? "sub-menu active" : "sub-menu"}>
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
									<li className={path === "/ShopClaudio" ? "active" : ""}>
										<Link href="/ShopClaudio" as="/ShopClaudio">
											<a>Tea Herbs</a>
										</Link>
									</li>
								</ul>
							</li>

						</li>
						<li className={path === "" ? "active" : ""}>
							<li className={home ? "has-droupdown active" : "has-droupdown"}>
								<a onClick={() => { toggleMenu('home') }}>OUR BRANDS</a>
								<ul className={home ? "sub-menu active" : "sub-menu"}>
									<li className={path === "#" ? "active" : ""}>
										<Link href="#" as="#">
											<a>La Herencia Spices</a>
										</Link>
									</li>
									<li className={path === "#" ? "active" : ""}>
										<Link href="#" as="#">
											<a>Bersy’s Snack</a>
										</Link>
									</li>
									<li className={path === "#" ? "active" : ""}>
										<Link href="#" as="#">
											<a>Claudio’s Tea Herb</a>
										</Link>
									</li>
								</ul>
							</li>
						</li>
						<li className={path === "/blog" ? "active" : ""}>
							<Link href="/blog" as="/blog" ><a>CLIENT</a></Link>
						</li>

						<li className={path === "/contact" ? "active" : ""}>
							<Link href="/contact" as="/contact">
								<a>CONTACT</a>
							</Link>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	)
}


