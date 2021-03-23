import * as React from 'react';
import './style.scss';
import Textbox from '../Textbox';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';

const Modal = ({
  onClose,
  boxClasses,
  modallength,
  setStory,
  story,
}) => {
  const onModalClick = () => {
    onClose && onClose();
  };
  const [vendor, setVendor] = React.useState(false);
  const [customer, setCustomer] = React.useState(true);
  const [prevImage, setPrevImage] = React.useState();
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
  });
  const fileInputRef = React.useRef();
  const handleChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function () {
      setPrevImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  console.log(prevImage);
  const onFormSubmit = (vals) => {
    setStory([
      ...story,
      {
        firstName: vals.firstName,
        lastName: vals.lastName,
        location: vals.location,
        image: prevImage,
        service: vals.customer === 'on' ? 'customer' : 'vendor',
        story: vals.shareStory,
      },
    ]);
    onModalClick();
  };
  return (
    <div id="modal-container">
      <div className="backDrop"></div>
      <div className={`contentwrapper ${boxClasses}`}>
        <div className="modal_header">
          <h4>Share your amazing story</h4>
          <p
            onClick={onModalClick}
            style={{cursor: 'pointer', fontWeight: 'bolder', fontSize:'20px', color:'#ff5c00'}}
          >
            X
          </p>
        </div>
        <div className={`${modallength} modal_content`}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <input
              name="image"
              className="upload"
              type="file"
              accept=".jpg, .jpeg, .png"
              ref={fileInputRef}
              onChange={handleChange}
            />
            <div className="flex" style={{justifyContent: 'space-between'}}>
              <Textbox
                label="First Name"
                boxClasses="text"
                name="firstName"
                error={errors.firstName && 'This field is required'}
                customRef={register({
                  required: true,
                })}
              />
              <Textbox
                label="Last Name"
                name="lastName"
                boxClasses="text"
                error={errors.lastName && 'This field is required'}
                customRef={register({
                  required: true,
                })}
              />
            </div>
            <p>Share your story</p>
            <textarea
              name="shareStory"
              id="shareStory"
              cols={35}
              rows={5}
              className="textarea"
              ref={register({
                required: true,
              })}
            />
            <div
              className="flex"
              style={{alignItems: 'baseline', justifyContent: 'space-between'}}
            >
              {' '}
              <p>What did you interact with SureWear as?</p>
              <div className="radios">
                <span>
                  <input
                    type="radio"
                    id="customer"
                    error={errors.customer && 'This field is required'}
                    ref={register({
                      required: false,
                    })}
                    name="customer"
                    checked={customer}
                    onChange={(e) => {
                      setCustomer(true);
                      if (vendor) setVendor(false);
                    }}
                  />
                  <label htmlFor="customer">Customer</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="vendor"
                    ref={register({
                      required: false,
                    })}
                    error={errors.vendor && 'This field is required'}
                    name="vendor"
                    checked={vendor}
                    onChange={(e) => {
                      setVendor(true);
                      if (customer) setCustomer(false);
                    }}
                  />
                  <label htmlFor="vendor">Vendor</label>
                </span>
              </div>
            </div>
            <Textbox
              label="Locaton"
              name="location"
              boxClasses="text width-100"
              error={errors.location && 'This field is required'}
              customRef={register({
                required: true,
              })}
            />
            <Button type="submit">Share your story!</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
