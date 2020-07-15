import React, { Fragment, useState } from 'react';
import Axios from 'axios';
import '../css/landingPage.css';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    text: '',
  });
  const [ismodalOpen1, toggleModal1] = useState(false);
  const [ismodalOpen2, toggleModal2] = useState(false);

  const { name, regNo, email, text } = formData;
  //leaving some space for form API
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newMessage = {
      name,
      regNo,
      email,
      text,
    };
    try {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const body = JSON.stringify(newMessage);
      const res = await Axios.post('/contactus', body, config);
      console.log(res.data);
      toggleModal1(!ismodalOpen1);
      setFormData({
        name: '',
        email: '',
        regNo: '',
        text: '',
      });
    } catch (err) {
      console.error(err.response);
      toggleModal2(!ismodalOpen2);
    }
  };
  return (
    <Fragment>
      <section
        className='container mt-4'
        id='contact'
        style={{
          width: '90%',
          marginLeft: '5%',
          background: '/assets/bg4.png',
        }}
      >
        <div className='row'>
          <div className='col-12 col-sm-8 offset-sm-1'>
            <h4
              className='large'
              style={{
                color: '#f7b731',
                fontSize: '55px',
                width: '80%',
                fontWeight: 'bolder',
                marginBottom: '50px',
              }}
            >
              Feedback
            </h4>

            <form className='form' onSubmit={e => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='text'
                  id='name'
                  placeHolder='name'
                  name='name'
                  value={name}
                  className='form-control'
                  onChange={e => onChange(e)}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #f1f2f6',
                    width: '80%',
                    marginLeft: '10%',
                    marginBottom: '10px',
                  }}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeHolder='registration Number'
                  name='regNo'
                  className='form-control'
                  value={regNo}
                  onChange={e => onChange(e)}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #f1f2f6',
                    width: '80%',
                    marginLeft: '10%',
                    marginBottom: '10px',
                  }}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeHolder='Email'
                  name='email'
                  className='form-control'
                  value={email}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #f1f2f6',
                    width: '80%',
                    marginLeft: '10%',
                    marginBottom: '10px',
                  }}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className='form-group'>
                <input
                  type='textarea'
                  placeHolder='Type your message here'
                  name='text'
                  className='form-control'
                  value={text}
                  style={{
                    border: 'none',
                    borderBottom: '1px solid #f1f2f6',
                    width: '80%',
                    marginLeft: '10%',
                    marginBottom: '10px',
                  }}
                  onChange={e => onChange(e)}
                />
              </div>
              <input
                type='submit'
                className='btn btn-primary'
                value='Send'
                style={{ marginLeft: '30% ' }}
              />
            </form>
          </div>
        </div>
      </section>

      <Modal
        style={{}}
        isOpen={ismodalOpen1}
        toggle={() => toggleModal1(!ismodalOpen1)}
      >
        <ModalHeader>
          <i
            class='far fa-window-close'
            onClick={() => toggleModal1(!ismodalOpen1)}
            style={{}}
          ></i>
        </ModalHeader>
        <ModalBody>
          <h6>
            Thank you for your Valuable Input . We will get in touch with you as
            soon as possible
          </h6>
        </ModalBody>
      </Modal>

      <Modal isOpen={ismodalOpen2} toggle={() => toggleModal2(!ismodalOpen2)}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <h5>Unable to reach server . Try again after some time</h5>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Contact;
