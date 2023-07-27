import { useEffect, useState } from 'react';
import '../assets/css/portfolio.css';
import axios from 'axios';
import port from '../assets/img/port.jpg';
export default function Portfolio() {
  const [proyects, setProyects] = useState([]);
  const getProyects = () => {
    axios
      .get(`https://api.github.com/users/Viper20201998/repos`)
      .then((response) => {
        setProyects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProyects();
  }, []);
  return (
    <section id='portfolio' className='portfolio col-md-12 py-4'>
      <section className='col-md-12 d-flex justify-content-center '>
        <h2 className='main-section__h2 mt-1 mt-sm-1 mt-md-5 mt-lg-3'>
          Portfolio
        </h2>
      </section>

      <section className='row container-fluid text-light justify-content-center mx-auto'>
        {proyects.length === 0
          ? console.log('')
          : proyects.map((proyect, indice) => {
            return (
              <section
                className='section-proyect p-0 col-lg-2 m-lg-2 m-md-2 m-sm-2 m-2'
                key={indice}
              >
                <div className='section-container-img'>
                  <img
                    src={port}
                    className='img-port'
                    alt='Proyecto'
                  />
                </div>
                <article className='p-3'>
                  <h2 className='h5 proyect-title'>
                    {proyect.name}
                  </h2>
                  <p className='description'>
                    Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit.
                    Accusantium doloribus, nemo ex
                    quaerat animi numquam maiores dolore
                    nesciunt quod omnis placeat
                    molestiae veniam quasi vitae!
                  </p>
                  <a
                    href={proyect.html_url}
                    target='__blank'
                    className='btn btn-outline-info'
                  >
                    View
                  </a>
                </article>
              </section>
            );
          })}
      </section>
    </section>
  );
}
