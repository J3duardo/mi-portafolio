import React, {useState} from "react";
import {connect} from "react-redux";
import locationIcon from "../../icons/location.svg";
import letterIcon from "../../icons/letter.svg";
import phoneIcon from "../../icons/phone.svg";
import {sendMailAsync} from "../../redux/actions";
import Modal from "../../components/Modal/Modal";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.sendMail(formData);
    setFormData({
      nombre: "",
      email: "",
      mensaje: ""
    })
  }

  return (
    <React.Fragment>
      <Modal />
      <section className="contact" id="contact">
        <div className="contact__title-container">
          <h2 className="contact__title">Contáctame</h2>
        </div>
        <article className="contact__content">
          <div className="contact__info-container">
            <div className="contact__info">
              <div className="contact__icon">
                <img src={locationIcon} alt="Location icon" />
                <p className="icon-text">Dirección</p>
              </div>
              <p className="text">C/Miranda &ndash; Juan Griego Isla de Margarita &ndash; Venezuela</p>
            </div>
            <div className="contact__info">
              <div className="contact__icon">
                <img src={letterIcon} alt="Location icon" />
                <p className="icon-text">Email</p>
              </div>
              <p className="text">jegq.dev.projects@gmail.com</p>
            </div>
            <div className="contact__info">
              <div className="contact__icon">
                <img src={phoneIcon} alt="Location icon" />
                <p className="icon-text">Teléfonos</p>
              </div>
              <p className="text">(+58) 414&ndash;791&ndash;1828</p>
              <p className="text">(+58) 295&ndash;253&ndash;7348</p>
            </div>
          </div>
          <form className="form" onSubmit={onSubmitHandler}>
            <div className="form__inputs-container">
              <input
                type="text"
                className="form__name"
                placeholder="Nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={onChangeHandler}
              />
              <input
                type="email"
                className="form__email"
                placeholder="Email"
                name="email"
                required
                value={formData.email}
                onChange={onChangeHandler}
              />
            </div>
            <textarea 
              className="form__textarea" 
              name="mensaje" 
              id="message" 
              cols="30" 
              rows="10" 
              placeholder="Mensaje"
              required
              value={formData.mensaje}
              onChange={onChangeHandler}
            >
            </textarea>
            <button type="submit" className="form__btn">Enviar</button>
          </form>
        </article>
      </section>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMail: (formData) => {
      dispatch(sendMailAsync(formData))
    }
  }
}

export default connect(null, mapDispatchToProps)(Contact);
