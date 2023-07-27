import '../assets/css/about.css';

export default function About() {
	return (
		<section id='about' className='about col-md-12 py-4'>
			<section className='col-md-12 d-flex justify-content-center '>
				<h2 className='main-section__h2 mt-1 mt-sm-1 mt-md-5 mt-lg-3'>
					About Me
				</h2>
			</section>

			<section className='row container-fluid justify-content-center my-lg-4 '>
				<article className='col-md-4'>
					<h3 className='main-section__h3'>Who am i?</h3>
					<p className='main-section__p'>
						I am a Network and Information Systems Engineer - I live
						in El Salvador in the city of San Miguel. I have been
						creating web development projects during the bootcamp to
						specialize in FrontEnd and BackEnd.
					</p>
				</article>
				<article className='Skills col-md-4 ms-4'>
					<h3 className='main-section__h3'>My skills:</h3>
					<article className='row'>
						<div className='cont-icon'>
							<div className='section__article-img html'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img css'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img bootstrap'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img javascript'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img react'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img node'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img php'></div>
						</div>
						<div className='cont-icon'>
							<div className='section__article-img git'></div>
						</div>
					</article>
				</article>
			</section>
		</section>
	);
}
