import * as React from 'react';
import './style.scss';
import Textbox from '../Textbox';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';

const Modal = ({
  children,
  onClose,
  modalText,
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
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
  });
  const onFormSubmit = (vals) => {
    console.log(vals);
    setStory([
      ...story,
      {
        firstName: vals.firstName,
        lastName: vals.lastName,
        location: vals.location,
        // image: vals.image[0]['name'] || '',
        service: vals.customer === 'on' ? 'customer' : 'vendor',
      },
    ]);
  };
  return (
    <div className="modal-container">
      <div className="backDrop"></div>
      <div className={`contentwrapper ${boxClasses}`}>
        <div className="modal_header">
          {/* <h4>{modalText}</h4> */}
          <h4>Share your amazing story</h4>
          <p onClick={onModalClick} className="cursor-pointer">
            X
          </p>
        </div>
        <div className={`${modallength} modal_content`}>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <Textbox
              label="Upload your picture"
              type="file"
              name="image"
              customRef={register({
                required: false,
              })}
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
              <p>What did you interact with Vasiti as?</p>
              <div>
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
            <p>City or Higher Institution (for Students)</p>
            <Textbox
              label="Locaton"
              name="location"
              boxClasses="text"
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
