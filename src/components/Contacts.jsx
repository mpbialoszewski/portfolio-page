import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

//TODO: Atomize it 
const InputField = ({ name, placeholder, type = "text", register, error, pattern }) => (
  <div className="text-center">
    <input
      type={type}
      className={`form-control ${error ? "is-invalid" : ""}`}
      placeholder={placeholder}
      {...register(name, { 
        required: `Please enter your ${name}`,
        pattern: pattern 
      })}
    />
    <div className="line"></div>
    {error && <span className="error-message text-danger">{error.message}</span>}
  </div>
);

const Contacts = () => {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = (data) => {
  const serviceID = "service_qrop9uh";
  const templateID = "template_ID";
  const publicKey = "Wg6aTOgvccy2UXxny";

    emailjs.send(serviceID, templateID, data, publicKey)
      .then(() => setIsSent(true))
      .catch(err => console.error(err));
  };

  return (
    <div id="contact" className="contacts">
      <div className="container">
        <div className="text-center py-5">
          <h1>Contact me</h1>
          <p>Describe your project needs and I'll get back to you.</p>
        </div>

        {isSent ? (
          <div className="text-center py-5">
            <h2 className="text-success">Message Sent! Thanks.</h2>
            <button onClick={() => { reset(); setIsSent(false); }} 
            className="btn-main-offer mt-4"
              
              style={{ 
              padding: '10px 30px', 
              cursor: 'pointer',
              background: 'transparent', 
              color: '#ff7b00',           
              border: '1px solid #ff7b00',
              marginTop: '20px',
              textTransform: 'uppercase'
            }}
            >
              Send another message
              </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(sendEmail)}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <InputField name="name" placeholder="Name" register={register} error={errors.name} />
                <InputField 
                  name="phone" 
                  placeholder="Phone" 
                  register={register} 
                  error={errors.phone}
                  pattern={{ value: /^[0-9+ ]+$/, message: "Only numbers allowed" }}
                />
                <InputField 
                  name="email" 
                  placeholder="Email" 
                  type="email"
                  register={register} 
                  error={errors.email}
                  pattern={{ value: /^\S+@\S+$/i, message: "E-mail address must be of valid format" }}
                />
                <InputField name="subject" placeholder="Subject" register={register} error={errors.subject} />
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="text-center">
                  <textarea
                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                    placeholder="Please enter your message..."
                    style={{ height: '184px' }}
                    {...register("description", { required: "Description is required" })}
                  ></textarea>
                  <div className="line"></div>
                  {errors.description && <span className="error-message text-danger">{errors.description.message}</span>}
                </div>
                <button className="btn-main-offer contact-btn w-100" type="submit" style={{ marginTop: '10px' }}>
                  Send Message
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacts;