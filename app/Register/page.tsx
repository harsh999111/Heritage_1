"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Layer1Image from "../../public/Images/Layer_1.png";
import ObjectsImage from "../../public/Images/OBJECTS.png";
import "./Register.css";
import Link from "next/link";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const wait = (t: number) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const onSubmit= async(data) => {
    await wait(3000);
    console.log(data);
    
  };

  return (
    <section>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <Image
            src={Layer1Image}
            alt="Layer 1"
            width={100}
            height={100}
            className="mt-7"
          />
        </div>
        <div>
          <div className="text-yellow-600 font-Inter flex justify-center font-bold text-xl mt-2">
            Create Account
          </div>
          <p className="text-green-600 flex justify-center text-xs">
            Let us know about yourself.
          </p>
        </div>
        
        <div className="flex justify-center mt-6">
          <div>
            <fieldset className="fieldset rounded-lg ">
              <legend className="text-yellow-700 font-bold ml-5">Name</legend>
              <input
                type="text"
                id="text"
                placeholder="Enter Your Name"
                className="input bg-[#ECECEC] mb-1 text-yellow-700"
                autoComplete="text"
                {...register("text", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
              />
            </fieldset>
            <div>
              {errors.text && (
                <span className="text-amber-700">{errors.text.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <fieldset className="fieldset rounded-lg">
              <legend className="text-yellow-700 font-bold ml-5">Email</legend>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Gmail "
                pattern=".+@gmail\.com"
                className="input bg-[#ECECEC] mb-1 text-yellow-700"
                autoComplete="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
              />
            </fieldset>
            <div>
              {errors.email && (
                <span className="text-amber-700">{errors.email.message}</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <fieldset className="fieldset rounded-lg">
              <legend className="text-yellow-700 font-bold ml-5">
                Password
              </legend>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                pattern="^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$"
                className="input1 bg-[#ECECEC] mb-1 text-yellow-700"
                autoComplete="new-password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                })}
              />
            </fieldset>
            <div>
              {errors.password && (
                <span className="text-amber-700">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <fieldset className="fieldset rounded-lg">
              <legend className="text-yellow-700 font-bold ml-5">
                Confirm Password
              </legend>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Your Password"
                pattern="^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$"
                className="input1 bg-[#ECECEC] mb-1 text-yellow-700"
                autoComplete="new-password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
            </fieldset>
            <div>
              {errors.confirmPassword && (
                <span className="text-amber-700">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link href={"/Bording"} className="bg-yellow-800 w-72 h-9 rounded-xl">Register</Link>
          {/* <button
            type="submit"
            value="Register"
            disabled={isSubmitting || !isValid}
            className="bg-yellow-800 w-72 h-9 rounded-xl disabled:bg-yellow-600 disabled:cursor-wait"
          >
            Register
          </button> */}
        </div>
      </form>

      <div className="createaccount"></div>
      <div className="google"></div>
      <div className="Img1 mt-7 flex justify-center">
        <Image src={ObjectsImage} alt="Objects" width={350} height={100} />
      </div>
    </section>
  );
};

export default Register;
