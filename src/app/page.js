"use client";

import { useForm } from "react-hook-form";
// Ensure to import your BirthDate component

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // Define validation patterns if needed
  const specialPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Example pattern for emails, update as needed

  console.log(watch("example"));

  return (
    <main className="w-full h-full p-10 bg-blue-100 flex flex-col">
      <div className="w-full flex flex-col gap-2 bg-white">
        <div className="w-full p-10 flex flex-col border-b-2 border-slate-300">
          <h1 className="text-3xl font-semibold">Job Application Form</h1>
          <p>Please complete the form below to apply for a position with us.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-black/50 gap-2"
        >
          {/* Full Name section */}
          <h3 className="text-xl text-black font-semibold ms-4">Full Name</h3>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-3 px-3 w-full">
            {/* First Name */}
            <div className="flex  flex-col gap-2">
              <input
                className="border shadow-sm p-2 focus:border-none focus:outline-slate-300 rounded-md"
                type="text"
                {...register("firstName", {
                  required: { value: true, message: "First Name is required" },
                })}
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">
                  {errors.firstName.message}
                </p>
              )}
              <label className="p-2">First Name</label>
            </div>
            {/* Middle Name */}
            <div className="flex flex-col gap-2">
              <input
                className="border shadow-sm p-2 focus:border-none focus:outline-slate-300 rounded-md"
                type="text"
                {...register("middleName", {
                  required: { value: true, message: "Middle Name is required" },
                })}
              />
              {errors.middleName && (
                <p className="text-red-600 text-sm">
                  {errors.middleName.message}
                </p>
              )}
              <label className="p-2">Middle Name</label>
            </div>
            {/* Last Name */}
            <div className="flex  flex-col gap-2">
              <input
                className="border shadow-sm p-2 focus:border-none focus:outline-slate-300 rounded-md"
                type="text"
                {...register("lastName", {
                  required: { value: true, message: "Last Name is required" },
                })}
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">
                  {errors.lastName.message}
                </p>
              )}
              <label className="p-2">Last Name</label>
            </div>
          </div>

          {/* Birth Date section */}
          <div className="flex flex-col  gap-2">
            <h2 className="text-xl text-black font-semibold ms-4">
              Birth Date
            </h2>
            <div className="flex gap-3 px-3">
              {" "}
              <BirthDate
                register={register}
                errors={errors}
                name="month"
                placeholder="Month"
              />
              <BirthDate
                register={register}
                errors={errors}
                name="day"
                placeholder="Day"
              />
              <BirthDate
                register={register}
                errors={errors}
                name="year"
                placeholder="Year"
              />
            </div>
          </div>

          {/* current Adress */}
          <div>
            <h2 className="text-xl text-black font-semibold ms-4 ">
              Current Address
            </h2>
            <div className="flex flex-col w-full gap-3 p-3 ">
              <CurrentAdress
                register={register}
                errors={errors}
                placeholder="First Address"
                name="Adress1"
              />
              <CurrentAdress
                register={register}
                errors={errors}
                placeholder="Second Address"
                name="Adress2"
              />
            </div>
          </div>

          {/* Region */}
          <div className="w-full p-3">
            <div className="grid grid-cols-2 w-full gap-3 p-2 ">
              <Region
                register={register}
                errors={errors}
                name="city"
                placeholder="City"
              />
              <Region
                register={register}
                errors={errors}
                name="provience"
                placeholder="Provience"
              />
            </div>
            <Region
              register={register}
              errors={errors}
              name="postalcode"
              placeholder="Postal Code "
            />
          </div>
          {/* Contact Information section */}
          <div className="w-full">
            <div className="grid grid-cols-2 w-full gap-3 p-2">
              <Email
                register={register}
                errors={errors}
                name="email"
                placeholder="Email"
              />
              <Contact
                register={register}
                errors={errors}
                name="contact"
                placeholder="Contact"
              />
            </div>
          </div>
          {/* Position Applied section */}
          <div className="grid grid-cols-2 gap-5 p-3">
            <Position
              register={register}
              errors={errors}
              name={"position"}
              placeholder={"Position"}
            />
            <HearFrom
              register={register}
              errors={errors}
              name={"hearFrom"}
              placeholder={"Hear From"}
            />
          </div>
          {/* Resume Selection Section  */}
          <div className="w-full">
            <Resume register={register} errors={errors} name="resume" />
          </div>
          <div className="flex justify-center p-5">
            <button
              className="bg-sky-900 text-zinc-200 px-4 py-2 "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Resume({ register, errors, name }) {
  return (
    <div className="ms-5">
      <input
        type="file"
        {...register(name, {
          required: { value: true, message: `${name} is required` },
        })}
      />
      {errors[name] && <p className="text-red-600">{errors[name].message}</p>}
    </div>
  );
}

function Position({ register, errors, name, placeholder }) {
  return (
    <div>
      <h2 className="text-sm p-2">Which Post Do You Apply</h2>
      <select
        {...register(name)}
        className="border shadow-sm p-2 w-full focus:outline-none focus:border-slate-400  rounded-sm"
      >
        <option>Select please</option>
        <option value="Front End Developer ">Front End Developer</option>{" "}
        <option value="Back End Developer">Back End Developer</option>
      </select>
    </div>
  );
}
function HearFrom({ register, errors, name, placeholder }) {
  return (
    <div>
      <h2 className="text-sm p-2">
        How did you hear about us <span>(optional)</span>
      </h2>
      <select
        {...register(name)}
        className="border shadow-sm p-2 w-full focus:outline-none focus:border-slate-400  rounded-sm"
      >
        <option>Select Please</option>
        <option value="Front End Developer ">Face Book </option>{" "}
        <option value="Back End Developer">Linkdin</option>
      </select>
    </div>
  );
}
function Email({ register, errors, name, placeholder }) {
  return (
    <div>
      <input
        type="email"
        className="border w-full shadow-sm p-2 focus:outline-none focus:border-slate-400  rounded-sm"
        placeholder={placeholder}
        {...register(name, {
          required: { value: true, message: `${placeholder} is required` },
          pattern: {
            value: name ? /.+@.+\..+/ : undefined,
            message: "Email must Conatin @ and .",
          },
        })}
      />
      {errors[name] ? (
        <p className="text-red-600 p-2">{errors[name].message}</p>
      ) : (
        <p className="p-2">{placeholder}</p>
      )}
    </div>
  );
}
function Contact({ register, errors, name, placeholder }) {
  return (
    <div>
      <input
        className="border w-full shadow-sm p-2 focus:outline-none focus:border-slate-400  rounded-sm"
        placeholder={placeholder}
        {...register(name, {
          required: { value: true, message: `${placeholder} is required` },
        })}
      />
      {errors[name] ? (
        <p className="text-red-600 p-2">{errors[name].message}</p>
      ) : (
        <p className="p-2">{placeholder}</p>
      )}
    </div>
  );
}
function Region({ register, errors, name, placeholder }) {
  return (
    <div>
      <input
        className="border w-full focus:outline-none focus:border-slate-400  rounded-sm shadow-sm p-2"
        s
        placeholder={placeholder}
        {...register(name, {
          required: { value: true, message: `${placeholder} is required` },
          minLength: {
            value: 3,
            message: `${placeholder} must be at least 3 characters`,
          },
        })}
      />
      {errors[name] ? (
        <p className="text-red-600 p-2">{errors[name].message}</p>
      ) : (
        <p className="p-2">{placeholder}</p>
      )}
    </div>
  );
}
function CurrentAdress({ register, errors, placeholder, name }) {
  return (
    <div>
      <input
        className="border w-full rounded-sm shadow-sm p-2 focus:border-slate-400 focus:outline-none"
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: { value: true, message: `${placeholder} is required` },
        })}
      />
      {errors[name] ? (
        <p className="text-red-600 p-2">{errors[name].message}</p>
      ) : (
        <p className="p-2">{placeholder}</p>
      )}
    </div>
  );
}

function BirthDate({ register, errors, name, placeholder }) {
  return (
    <div className="flex md:w-1/2 flex-col w-auto ">
      <input
        className="border shadow-sm p-2 focus:outline-none focus:border-slate-400 rounded-sm"
        type="text"
        placeholder={placeholder}
        {...register(name, {
          required: { value: true, message: `${name} is required` },
          pattern: {
            value: name === "day" ? /^(0?[1-9]|[12][0-9]|3[01])$/ : undefined,
            message: `Invalid ${placeholder} format`,
          },
          minLength:
            name === "year"
              ? {
                  value: 4,
                  message: `Year must be 4 digits`,
                }
              : undefined,
          maxLength:
            name === "year"
              ? {
                  value: 4,
                  message: `Year must be 4 digits`,
                }
              : undefined,
        })}
      />
      {errors[name] ? (
        <p className="text-red-600 text-sm">{errors[name].message}</p>
      ) : (
        <p>{placeholder}</p>
      )}
    </div>
  );
}
