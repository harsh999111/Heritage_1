"use client"
import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import Heritage from "../../public/Images/Layer_1.png"

const wait = (t:number) => new Promise((resolve)=> setTimeout(resolve,t))

const Login = () => {
  const { register, handleSubmit, getValues, formState: { errors,isLoading,isValid,isSubmitting } } = useForm({
    mode:"onBlur",
  });
  const onSubmit =async (data) => {
    await wait (2000);
    console.log(data);
  }
  console.log(errors);
  
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={Heritage} className="mx-auto h-auto w-auto"/>
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-1" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("name",{
                    required:{
                      value:true,
                      message:"Name is Required"
                    }
                  })
                  }
                />
                {errors.email && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
              </div>
            </div>
{/* <-----  email ----------> */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("email",{
                    required:{
                      value:true,
                      message:"Email is Required"
                    },
                    pattern:{
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message:"Please Provid Valid Email Addresh "
                    }
                  })

                  }
                />
                {errors.email && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("password",{
                    required:{
                      value:true,
                      message:"Password Is Required"
                    },
                    pattern:{
                      value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                      message:"Please Provid Valid Password "
                    },
                    minLength:{
                      value: 6,
                      message:"Password should be 6 Character"
                    }
                  })}
                />
                {errors.password && (
                  <span className='text-red-400 text-sm'>{errors.password.message}</span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Password Is Required",
                    },
                    validate: (value) => {
                      const { password } = getValues();
                      return value === password || "Passwords should match";
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <span className='text-red-400 text-sm'>{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="flex  mt-4 w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:bg-yellow-200 disabled:cursor-wait"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
