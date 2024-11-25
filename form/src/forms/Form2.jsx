import React, { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        ></input>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        {formData.firstName && (
          <div>
            <h3>
              Full name : {formData.firstName} {formData.lastName}
            </h3>
            <h3>Email : {formData.email}</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form2;
