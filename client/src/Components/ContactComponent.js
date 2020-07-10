import React, { Fragment, useState } from 'react';
import Axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    text: '',
  });
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
      alert(JSON.stringify(res.data));
    } catch (err) {
      console.error(err.response);
    }
  };
  return (
    <Fragment>
      <section className='container mt-4' id='contact'>
        <div className='row'>
          <div className='col-12 col-sm-8 offset-sm-1'>
            <h4 className='large text-primary'>Send us a Message</h4>

            <form className='form' onSubmit={e => onSubmit(e)}>
              <div className='form-group'>
                <label for='name'>Your Name</label>
                <input
                  type='text'
                  id='name'
                  placeHolder='name'
                  name='name'
                  value={name}
                  className='form-control'
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='form-group'>
                <label for='regNo'>Registration Number</label>
                <input
                  type='text'
                  placeHolder='registration Number'
                  name='regNo'
                  className='form-control'
                  value={regNo}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className='form-group'>
                <label for='email'>Email id</label>
                <input
                  type='email'
                  placeHolder='Email'
                  name='email'
                  className='form-control'
                  value={email}
                  onChange={e => onChange(e)}
                />
                <small id='emailHelp' class='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='form-group'>
                <label for='text'>Your Message</label>
                <input
                  type='textarea'
                  placeHolder='Type your message here'
                  name='text'
                  className='form-control'
                  value={text}
                  onChange={e => onChange(e)}
                />
              </div>
              <input type='submit' className='btn btn-primary' value='Send' />
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
