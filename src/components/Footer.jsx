import '../assets/css/footer.css';
export default function Footer() {
  return (
    <footer className='row mx-auto footer text-light p-lg-5'>
      <section className='col-lg-4 col-sm-12 p-sm-3 text-center'>
        <h3 className='h5 footer-title'>Author</h3>
        <p>Lester Asmeth Sandoval Ibarra</p>
      </section>
      <section className='col-lg-4 col-sm-12 p-sm-3 p-3 text-center'>
        <h3 className='h5 footer-title p-2'>Social Networks</h3>
        <article className='footer-section__article row py-lg-3'>
          <a href='https://www.facebook.com' className='footer-icon facebook mx-sm-auto mx-auto' target='__blank'></a>
          <a href='https://www.linkedin.com' className='footer-icon linkedin mx-5 mx-sm-auto mx-auto' target='__blank'></a>
          <a href='https://twitter.com' className='footer-icon twitter mx-sm-auto mx-auto' target='__blank'></a>
        </article>
      </section>
      <section id='contact' className='col-lg-4 col-sm-12 p-sm-3 text-center'>
        <h3 className='h5 footer-title'>Contact</h3>
        <section>
          <p>
            <b>Telefono:  </b>+503 7856-6943
          </p>
          <p><b>Correo:  </b>lesterasmethsandoval@gmail.com</p>
        </section>
      </section>
    </footer>
  );
}
