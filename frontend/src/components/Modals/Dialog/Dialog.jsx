import "./Dialog.css";

const Dialog = ({ isDialogShow, setIsDialogShow }) => {
const handleCloseDialog = (event) => {
    const checked = event.target.checked

    localStorage.setItem("dialog", JSON.stringify(!checked))
}

  return (
    <div className={`newsletter-popup ${isDialogShow ? "show" : ""}`}>
      {" "}
      <img className="offer" src="img/modal-dialog.jpg" alt="offer" />
      <div className="newsletter-popup-static newsletter-popup-top">
        <div className="popup-text">
          <div className="popup-title">
            50% <span>off</span>
          </div>
          <div className="popup-desc">
            <div>Sign up and get 50% off your next Order</div>
          </div>
        </div>
        <form >
          <div className="form-group required">
            <input
              type="email"
              name="email-popup"
              id="email-popup"
              placeholder="Enter Your Email"
              className="form-control input-lg"
              required=""
            />
            <button
              type="submit"
              className="btn btn-default btn-lg"
              id="email-popup-submit"
            >
              Subscribe
            </button>
            <label className="checkme">
              <input type="checkbox" onChange={handleCloseDialog} id="checkme" />
              Dont show again
            </label>
          </div>
        </form>
      </div>
      <button className="xout" onClick={() => setIsDialogShow(false)}>
        <i className="bi bi-x"></i>
      </button>
      
    </div>
  );
};

export default Dialog;
