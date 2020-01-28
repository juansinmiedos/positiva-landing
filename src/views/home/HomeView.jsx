import React from "react";

const HomeView = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <header className="columns">
            <div className="column">
              <small>
                <span>ÚNETE A LA PRUEBA BETA</span>
              </small>
              <h2>Una app <span>positiva</span> para personas con VIH</h2>
              <div className="divisor"></div>
              <p>
                Una plataforma segura para monitorear tu salud y encontrar apoyo.
              </p>
            </div>
            <div className="column center-column">
              <div className="sphere"></div>
              <form>
                <input placeholder="Nombre" />
                <input placeholder="Apellido" />
                <input placeholder="Correo electrónico" />
                <input placeholder="Teléfono celular" />
                <select placeholder="Soy...">
                  <option value="Portador">Portador</option>
                  <option value="Médico">Médico</option>
                  <option value="Psicóloga/o">Psicóloga/o</option>
                  <option value="Trabajador/a social">Trabajador/a social</option>
                  <option value="Trabajador en asociaciones civiles">Trabajador en asociaciones civiles</option>
                </select>
                <input type="checkbox" name="fruit" value="Orange" /> Acepto los términos y condiciones 
                <button>Unirse a la prueba beta</button>
              </form>
            </div>
          </header>

          <article className="home-article columns">
            <div className="column">
              <h3>¿Qué es positiva(+)</h3>
              <div className="divisor"></div>
              <p>
                Somos un grupo de jóvenes que busca crear una plataforma que
                ayude a personas que viven con VIH a alcanzar una vida más
                digna.
              </p>
            </div>
          </article>

          <article className="home-article columns">
            <div className="column">
              <h3>¿En qué consiste la prueba beta de positiva(+)?</h3>
              <div className="divisor"></div>
              <p>
                Es importante que la plataforma que crearemos se adapte a las
                necesidades de quienes la usan, por lo que, si decides
                participar, nos pondremos en contacto contigo en los siguientes
                meses para entrevistarte, aplicarte encuestas y pedirte tu
                opinión sobre ciertas funciones.
                <br />
                Esto con la finalidad de desarrollar una plataforma que sea útil
                para ti.
              </p>
            </div>
          </article>

          <article className="home-article columns">
            <div className="column">
              <h3>¿Quienes pueden participar en la prueba beta?</h3>
              <div className="divisor"></div>
              <p>
                Aunque nuestra plataforma estará enfocada en personas que viven
                con VIH la opinión de personas con otros perfiles puede ser muy
                valiosa. Te invitamos a unirte si cuentas con algunos de los
                siguientes perfiles:
              </p>
              <ul>
                <li>Médico con experiencia en VIH/SIDA.</li>
                <li>
                  Psicologa/o con experiencia en el tratamiento de de personas
                  con VIH.
                </li>
                <li>
                  Trabajador/a social con experiencia con personas con VIH.
                </li>
                <li>
                  Haz trabajado en asociaciones civiles enfocadas en ayudar a
                  quienes viven con VIH.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <article className="columns">
        <div className="column red-section">
          <div className="divisor-white"></div>
          <h2 className="red-section">¿Listo para unirte?</h2>
          <p className="red-section">Únite a la prueba beta y ayuda a darle forma a este proyecto...(?)</p>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="logo">positiva(+)</p>
              <h4>info@positiva-app.com</h4>
            </div>
          </div>

          <article className="columns">
            <div className="column">
              <div className="divisor"></div>
              <h3>
                "Aplaudo a los valientes que viven abiertamente con el VIH, que
                abogan sin descanso por los derechos de los seropositivos y que
                instruyen a otros respecto del SIDA."
              </h3>
              <p>- Ban Ki-moon, ex Secretario de las Naciones Unidas.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default HomeView;
