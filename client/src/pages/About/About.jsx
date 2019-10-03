import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
    <article className="about__info">
      <h2 className="about__title">Acerca de mí</h2>
      <div className="about__content">
        <div className="about__text-container">
          <p className="about__text">Ingeniero, con una curiosidad innata por la naturaleza, la ciencia y los números. Entre mis pasiones están la fotografía, el postprocesado, el VFX, el motion graphics y el mundo audiovisual en general. Durante mis años como estudiante de ingeniería, aunque a manera de hobby, me desarrollé como fotógrafo aficionado utilizando una simple compacta de 8 megapíxels, y con el pasar el tiempo la fotografía se convirtió prácticamente en mi segunda profesión.</p>
          <p className="about__text">Al estar siempre en la búsqueda de nuevos retos y conocimientos, además de la fotografía y demás disciplinas mencionadas, recientemente comencé a interesarme por el amplio mundo del desarrollo web, en el cual planeo seguir desarrollándome a tiempo completo, en especial en las tecnologías frontend.</p>
        </div>
        <picture className="about__img-container">
          <source srcSet="/img/about-me-cuadrada.jpg" media="(max-width: 650px)" className="about__img"/>
          <img src="/img/about-me.jpg" alt="me" className="about__img"/>
        </picture>
      </div>
    </article>
  </section>
  );
}

export default About;
