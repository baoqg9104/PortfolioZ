import { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send("service_p2bu5lo", "template_7lyi57q", formData, "5NxeIkOQ6j32Y7DGY")
      .then(
        (response) => {
          toast.success('Message sent successfully!');
        },
        (err) => {
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className={`${styles.background} container-fluid`}>
        <div className={`row h-100 d-flex justify-content-center`}>
          <div className="col-lg-4 col-0 d-flex align-items-center justify-content-center">
            {/* <img src={contact_img} width={"60%"} alt="" /> */}
            <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
              Contact <span style={{ color: "#03c7d1" }}>me</span>
            </h1>
          </div>
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-4 col-10 d-flex justify-content-center align-items-center flex-column p-0">
            <div className="row p-0 w-100">
              <div className="form-floating mb-3 col-6 p-0">
                <input
                  type="text"
                  className="form-control rounded rounded-3"
                  id="floatingInput"
                  placeholder=""
                  style={{ width: "95%" }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInput">Your name</label>
              </div>
              <div className="form-floating mb-3 col-6 p-0">
                <input
                  type="email"
                  className="form-control rounded rounded-3"
                  id="floatingInput"
                  placeholder=""
                  style={{ width: "95%", marginLeft: "10px" }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInput" className="ms-2">
                  Email
                </label>
              </div>
            </div>
            <div className="row w-100">
              <div className="col p-0">
                <div className="form-floating">
                  <textarea
                    className="form-control rounded rounded-3"
                    id="floatingInput"
                    placeholder=""
                    style={{ height: "230px", resize: "none" }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="floatingInput">Message</label>
                </div>
              </div>
            </div>
            <div className="row mt-3 w-100 p-0">
              <div className="col p-0">
                <button
                  className="btn text-light rounded rounded-5 fs-5 ps-4 pe-4"
                  style={{ backgroundColor: "#03c7d1" }}
                  type="submit"
                >
                  Send message &nbsp;
                  <FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default Contact;
