import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form'

const Contact = () => {

  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: {errors} } = useForm();

  const serviceID = "service_ID"
  const templateID = "template_ID"
  const userID = "user_GcFQTabrTcQ0AYBm780gZ"

  const onSubmit = (data,r) =>{
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID)=> {

    emailjs.send(serviceID, templateID, variables, userID)
      .then((result) => {
        setSuccessMessage("Message sent. Thanks!");
      }).catch(err =>console.error(`Oops! Something went wrong ${err}`))
  }

  return (
    <div>
      <div id='contact' className="contacts">
        <div className="text-center">

          <h1>Contact me</h1>
          <p>Please fill out the form and describe your possible project needs so I can contact you as soon as possible</p>
        <div className="span success-message">
          {successMessage}
        </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">

              {/* Name */}
              <div className="text-center">

              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name",{
                    required: "Please enter your name",
                    maxLength:{
                      value: 20,
                      message: 'Please enter a name with fewer than 20 characters'
                    }
                  })
                }
              />
              <div className="line"></div>
              </div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
              {/* Phone Number */}
              <div className="text-center">

              <input
                type='text'
                className='form-control'
                placeholder='Phone number'
                name='phone'
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("phone", {
                      required: "Please enter your phone number",
                    })
                    }
              />
              <div className="line"></div>
              </div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
              {/* Email */}
              <div className="text-center">

              <input
                type='email'
                className='form-control'
                placeholder='E-mail'
                name='email'
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("email", {

                        required: "Please provide your email",
                        pattern: {
                          value: /^ [A - Z0 -9._ % +-] +@{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                    }
              />
              <div className="line"></div>
              </div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
              {/* Subject */}
              <div className="text-center">

              <input
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("subject", {
                      required: "Please enter subject of the message",
                      maxLength: {
                        value: 100,
                        message: 'Please enter subject of the message'
                      }
                    })
                    }
              />
              <div className="line"></div>
              </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>

            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <div className="text-center">
              <textarea
                type='text'
                className='form-control'
                placeholder='Please input message here'
                name='description'
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("description", {
                      required: "Please enter the message",
                      maxLength: {
                        value: 200,
                        message: 'Please enter your message'
                      }
                    })
                    }
              ></textarea>
              <div className="line"></div>
              </div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>

              <button className="btn-main-offer contact-btn" type='submit'>
                Send
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
