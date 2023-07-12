import React, { useState } from 'react'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const PasswordField = ({formik}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>

    <label htmlFor="description" className="text-md mb-1">
    Password:
  </label>
  <div className="relative">
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Add your password"
      id="password"
      onChange={formik.handleChange}
      value={formik.values.password}
      className={`outline-none w-full border-2 rounded-md border-black/20 py-1 pl-3 transition-all duration-300 ease-linear focus:border-black/40 placeholder:focus:opacity-0 placeholder:focus:duration-200 placeholder:focus:ease-in ${
        formik.errors.password &&
        formik.touched.password &&
        'border-red-500 placeholder:text-red-500 focus:border-red-500'
      }`}
    />
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
    </div>
  </div>
  </>
  )
}

export default PasswordField