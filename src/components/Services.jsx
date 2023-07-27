import '../assets/css/services.css';
export default function Services() {
  return (
    <section id='services' className='services col-md-12  py-lg-3'>
      <section className='col-md-12 d-flex justify-content-center '>
        <h2 className='main-section__h2 mt-3'>Services</h2>
      </section>
      <section className='row  container-fluid justify-content-center mx-auto mx-sm-auto text-center'>
        <article className='target-container col-lg-3 col-md-5 my-sm-2 my-2 mx-lg-2 mx-md-2'>
          <div className='responsive bi bi-phone mx-auto'></div>
          <h3 className='title my-3 h5 text-light'>
            Fully Responsive
          </h3>
          <p className='section-article__p text-light'>
            Your site will display properly on any device, including
            desktop computers, tablets and mobile phones.
          </p>
        </article>
        <article className='target-container col-lg-3 col-md-5 my-sm-2 my-2 mx-lg-1 mx-md-1'>
          <div className='responsive bi bi-code-slash mx-auto'></div>
          <h3 className='title my-3 h5 text-light'>Development</h3>
          <p className='section-article__p text-light'>
            I know the importance of web design and can help you
            create a website you will love.
          </p>
        </article>
        <article className='target-container col-lg-3 col-md-5 my-sm-2 my-2 mx-lg-2 mx-md-2'>
          <div className='responsive bi bi-speedometer2 mx-auto'></div>
          <h3 className='title my-3 h5 text-light'>Performance</h3>
          <p className='section-article__p text-light'>
            Retaining users ns crucial to improving conversions.
            High-performaing sites engage and reatin users.
          </p>
        </article>
      </section>
    </section>
  );
}
