import { useEffect } from 'react';
import '../assets/css/navbar.css';

export default function NavBar() {




	useEffect(() => {
		const Nav = document.querySelector('.navbar-effect');
		const NavResponsive = document.querySelector('.navbar-effect-2');
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 56) {
				Nav.classList.add('nav-scroll');
				Nav.classList.add('navbar-dark');
				NavResponsive.classList.add('nav-scroll');
			} else if (window.scrollY < 56) {
				Nav.classList.remove('nav-scroll');
				Nav.classList.remove('navbar-dark');
				NavResponsive.classList.remove('nav-scroll');
			}
		});
	}, []);
	return (
		<>
			<nav className='navbar navbar-expand-lg position-fixed d-none d-sm-none d-md-none d-lg-block col-lg-12 z-1 navbar-effect'>
				<div className='container-fluid'>
					<a className='navbar-brand logo' href=''>
						&lt; LesterSandoval /&gt;
					</a>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item nav-link-li'>
								<a
									className='nav-link nav-link-button'
									href='#'
								>
									Home
								</a>
							</li>
							<li className='nav-item nav-link-li'>
								<a
									className='nav-link nav-link-button'
									href='#about'
								>
									About Me
								</a>
							</li>
							<li className='nav-item nav-link-li'>
								<a
									className='nav-link nav-link-button'
									href='#services'
								>
									Services
								</a>
							</li>
							<li className='nav-item nav-link-li'>
								<a
									className='nav-link nav-link-button'
									href='#portfolio'
								>
									Portfolio
								</a>
							</li>
							<li className='nav-item nav-link-li'>
								<a
									className='nav-link nav-link-button'
									href='#contact'
								>
									Contact
								</a>
							</li>
						</ul>
						<button
							type='button'
							id='traslate'
							className='traslate english'
						></button>
						<button
							type='button'
							id='traslate'
							className='traslate spanish'
						></button>
					</div>
				</div>
			</nav>
			<nav className='navbar navbar-dark fixed-top d-lg-none d-xl-none d-xxl-none navbar-effect-2'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='#'>
						Lester Sandoval
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasDarkNavbar'
						aria-controls='offcanvasDarkNavbar'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='offcanvas offcanvas-end text-bg-dark'
						id='offcanvasDarkNavbar'
						aria-labelledby='offcanvasDarkNavbarLabel'
					>
						<div className='offcanvas-header'>
							<h5
								className='offcanvas-title'
								id='offcanvasDarkNavbarLabel'
							>
								Lester Sandoval
							</h5>
							<button
								type='button'
								className='btn-close btn-close-white'
								data-bs-dismiss='offcanvas'
								aria-label='Close'
							></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
								<li className='nav-item'>
									<a
										className='nav-link'
										aria-current='page'
										href='#'
									>
										Home
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#about'>
										About Me
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#services'>
										Services
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#portfolio'>
										Portfolio
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#contact'>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
