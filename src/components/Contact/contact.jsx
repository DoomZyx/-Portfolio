import PorscheViewer from "../../animation/models/porsche";

function ContactMe() {
  return (
    <>
      <div className="layout-contact">
        <div className="contact-form">
          <h3>Connectons-nous</h3>
          <form action="">
            <label htmlFor="name">Prénom</label>
            <input type="text" id="name" />

            <label htmlFor="firstname">Nom</label>
            <input type="text" id="firstname" />

            <label htmlFor="mail">Email</label>
            <input type="text" name="mail" id="mail" />

            <label htmlFor="phone">Téléphone</label>
            <input type="text" name="phone" id="phone" />

            <label htmlFor="message">Votre message</label>
            <textarea name="message" id="message"></textarea>
          </form>
        </div>
        <div className="porsche">
          <PorscheViewer />
        </div>
      </div>
    </>
  );
}

export default ContactMe;
