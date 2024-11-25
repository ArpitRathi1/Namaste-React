import { useState } from "react";

function Form() {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications:""
  });


  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevdata) => {
      return { ...prevdata, [name]: type === "checkbox" ? checked : value };
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications:""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name : </label>
      <input
        type="text"
        placeholder="Enter first name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        id="firstName"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="lastName">Last Name : </label>
      <input
        type="text"
        placeholder="Enter last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        id="lastName"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="email">Enter email : </label>
      <input
        type="email"
        placeholder="Enter email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        id="email"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="country">Country : </label>
      <select
        id="country"
        name="country"
        onChange={handleChange}
        value={formData.country}
      >
        <option value="">Select country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="china">China</option>
      </select>

      <br></br>
      <br></br>

      <label htmlFor="address">Address : </label>
      <input
        type="text"
        placeholder="Enter address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        id="address"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="city">City : </label>
      <input
        type="text"
        placeholder="Enter city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        id="city"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="state">State : </label>
      <input
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="Enter State"
        type="text"
      ></input>

      <br></br>
      <br></br>

      <label htmlFor="pinCode">Pin code : </label>
      <input
        type="number"
        id="pinCode"
        onChange={handleChange}
        value={formData.pinCode}
        placeholder="Enter pin code"
        name="pinCode"
      ></input>

      <br></br>
      <br></br>

      <fieldset className="field">
        <legend>By email</legend>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={handleChange}
            ></input>
            <label htmlFor="comments"><b>Comments</b></label>
          </div>
          <p>Get notified when someone posts a comment on a posting</p>
        </div>

        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={handleChange}
            ></input>
            <label htmlFor="candidates"><b>Candidates</b></label>
          </div>
          <p>Get notified when a candidate apply for a job</p>
        </div>

        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={handleChange}
            ></input>
            <label htmlFor="offers"><b>Offers</b></label>
          </div>
          <p>Get notified when a candidate accpects or rejects an offer</p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>This are delivered via SMS to your mobile phone.</p>

        <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={handleChange}
        ></input>
        <label htmlFor="pushEverything">Everything</label>

        <br></br>
        <br></br>

        <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as email"
          onChange={handleChange}
        ></input>
        <label htmlFor="pushEmail">Same as email</label>

        <br></br>
        <br></br>

        <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No push notifications"
          onChange={handleChange}
        ></input>
        <label htmlFor="pushNothing">No push notifications</label> 
      </fieldset>
      <br></br>
      <button className="submit-btn">Save</button>
    </form>
  );
}

export default Form;
