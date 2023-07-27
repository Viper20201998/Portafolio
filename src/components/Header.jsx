import '../assets/css/header.css';

export default function Header() {
	return (
		<header className='header col-md-12'>
			<section className='h-section d-flex flex-column-reverse flex-sm-row flex-lg-row p-3 justify-content-center align-items-center'>
				<article className='h-section__article'>
					<p className='h__article__p-1'>Hi! My name is</p>
					<p className='h__article__p-2'>Lester Sandoval</p>
					<p className='h__article__p-3'>Full Stack Junior 17</p>
				</article>
				<div className='avatar ms-3'></div>
			</section>
		</header>
	);
}
