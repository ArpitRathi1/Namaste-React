import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    // Simulating an API  call
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the form");
    console.log("Data", data);
    reset(); // Will empty the form fields after submition
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>FirstName : </label>
          <input
          className={errors.firstName && "Input-err"}
            {...register("firstName", {
              required: { value: true, message: "first name is required" },
              minLength: { value: 3, message: "Min length atleast 3" },
            })}
          ></input>
          {errors.firstName && <p className="err-msg">{errors.firstName.message}</p>}
        </div>
        <br></br>
        <div>
          <label>email : </label>
          <input 
          className={errors.email && "Input-err"}
          {...register("email", {
            required : {value : true, message : "Email is required"},
            pattern : {value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message : 'Invalid email'}
          })}></input>
          {errors.email && <p className="err-msg">{errors.email.message}</p>}
        </div>
        <br></br>
        <div>
          <label>LastName : </label>
          <input {...register("lastName")}></input>
        </div>
        <br></br>
        <div>
          <button disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Submit"}</button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
