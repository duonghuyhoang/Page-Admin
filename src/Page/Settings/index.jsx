import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./Settings.css";

const Settings = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgColorText, setBgColorText] = useState("#ffffff");
  const [bgColorError, setBgColorError] = useState("");
  const [bgColorValid, setBgColorValid] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const [showSave, setShowSave] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    const titleRegex = /[a-zA-Z0-9]/;
    if (!titleRegex.test(e.target.value)) {
      setTitleError("Title must contain at least one letter or one number");
    } else {
      setTitleError("");
    }
    setShowSave(true);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    if (!emailValue.startsWith(" ")) {
      setEmail(emailValue);
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
    setShowSave(true);
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value);
    setBgColorText(e.target.value);

    if (e.target.value) {
      setBgColorValid(true);
      setBgColorError("");
    } else if (!e.target.value) {
      setBgColorValid(false);
      setBgColorError("Please change color");
    }
    if (e.target.value) {
      const hexValue = e.target.value;
      const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      if (!hexRegex.test(hexValue)) {
        setBgColorError("Invalid hex value");
      } else {
        setBgColorError("");
      }
    }

    setShowSave(true);
  };

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (!startDate) {
      setStartDateError("Start date is required");
    } else {
      setStartDateError("");
    }
    if (!endDate) {
      setEndDateError("End date is required");
    } else {
      setEndDateError("");
    }
    setShowSave(true);
  };

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const handleSave = () => {
    if (!title) {
      setTitleError("Title must contain at least one letter or one number");
    }
    if (!email) {
      setEmailError("Invalid email address");
    }
    if (!bgColorValid) {
      setBgColorError("Please change color");
    } else {
      setBgColorError("");
    }
    if (!startDate) {
      setStartDateError("Start date is required");
    }
    if (!endDate) {
      setEndDateError("End date is required");
    }
    if (
      title &&
      email &&
      startDate &&
      endDate &&
      bgColorValid &&
      titleError === "" &&
      emailError === "" &&
      bgColorError === "" &&
      startDateError === "" &&
      endDateError === ""
    ) {
      console.log(`Title: ${title}`);
      console.log(`Email: ${email}`);
      console.log(`Background Color: ${bgColor}`);
      console.log(
        `Start Date: ${startDate ? moment(startDate).format("DD/MM/YYYY") : ""}`
      );
      console.log(
        `End Date: ${endDate ? moment(endDate).format("DD/MM/YYYY") : ""}`
      );
    }
  };

  return (
    <div className='wrapper-setting'>
      <h3 className='title-main-setting'>Settings</h3>
      <p>Manage your team and preferences here.</p>
      <span className='line-cut-setting'></span>
      <div className='nav-setting-demo'>
        <div className='subnav-setting-demo'>My details</div>
        <div className='subnav-setting-demo'>Profile</div>
        <div className='subnav-setting-demo'>Password</div>
        <div className='subnav-setting-demo'>Team</div>
        <div className='subnav-setting-demo'>Plan</div>
        <div className='subnav-setting-demo'>Billing</div>
        <div className='subnav-setting-demo'>Email</div>
        <div className='subnav-setting-demo'>Notifications</div>
        <div className='subnav-setting-demo'>Integrations</div>
        <div className='subnav-setting-demo'>API</div>
      </div>
      <div className='cut-line-setting-demo'></div>
      <div className='title-setting'>
        <label>Title</label>
        <input type='text' value={title} onChange={handleTitleChange} />
        {titleError && <div className='title-error'>{titleError}</div>}
      </div>
      <div className='email-setting'>
        <label>Email</label>
        <input id='email-input' value={email} onChange={handleEmailChange} />
        {emailError && <div className='email-error'>{emailError}</div>}
      </div>
      <div className='bg-setting'>
        <label>Background</label>
        <input
          className='bg-input-color'
          type='color'
          value={bgColor}
          onChange={handleBgColorChange}
        />
        <input
          className='bg-input-color-text'
          type='text'
          id='hex-input'
          value={bgColorText}
          onChange={handleBgColorChange}
        />
        {bgColorError && (
          <div className='bgColor-error-error'>{bgColorError}</div>
        )}
      </div>
      <div className='date-setting'>
        <label>Active Date</label>
        <DateRangePicker
          startDate={startDate}
          startDateId='start-date'
          endDate={endDate}
          endDateId='end-date'
          onDatesChange={handleDatesChange}
          focusedInput={focusedInput}
          onFocusChange={handleFocusChange}
        />
        {startDateError && (
          <div className='start-date-error'>{startDateError}</div>
        )}
        {endDateError && <div className='end-date-error'>{endDateError}</div>}
      </div>
      <div className='save-setting'>
        {showSave && (
          <button onClick={handleSave}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              fill='currentColor'
              class='bi bi-check-lg'
              viewBox='0 0 16 16'
              style={{
                marginLeft: "-10",
                marginTop: "2",
                position: "absolute",
              }}
            >
              <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z' />
            </svg>
            <span className='title-save'>Save changes</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Settings;
