'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import './input.css'; // Import the CSS file
import Link from "next/link";
// import ObjectsImage from "../../public/Images/OBJECTS.png"
const Layer1Image = "/Images/Layer_1.png";
const ObjectsImage = "/Images/OBJECTS.png";

interface Inputs {
  email: string;
  password: string;
}
const wait = (t: number) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};


const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  // const onSubmit= async(data) => {
  //   await wait(3000);
  //   console.log(data);
    
  // };

  return (
    <section className="bg-[#ececec]">
      <div className="flex justify-center ">
        <Image src={Layer1Image} alt="Layer 1" width={130} height={130} className="mt-[90px] sm:mt-20 sm:w-40 sm:h-40 xl:w-52 xl:h-52 2xl:w-48 2xl:h-48 2xl:mt-8" />
      </div>
      <div>
        <div className="text-yellow-600 font-Inter flex justify-center font-bold text-xl  mt-14 sm:mt-20 md:mt-16 lg:mt-8 xl:text-3xl xl:mt-20 2xl:mt-16">
          LOGIN NOW
        </div>
        <p className="text-green-600 flex justify-center text-xs xl:text-lg">
          Please enter email and password.
        </p>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <form>
        <div className="flex justify-center">

        <div>
          <fieldset className="fieldset rounded-lg">
            <legend className="text-yellow-700 font-bold ml-5 lg:text-xl">Email</legend>
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
                  message: "Email is required",
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
            <legend className="text-yellow-700 font-bold ml-5 lg:text-xl">Password</legend>
            <input
              type="password"
              // name="password"
              id="password"
              placeholder="Enter Your Password"
              pattern="^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$"
              className="input1 bg-[#ECECEC] mb-1 text-yellow-700"
              autoComplete="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
          </fieldset>
          <div>
            {errors.password && (
              <span className="text-amber-700">{errors.password.message}</span>
            )}
          </div>
        </div>
        </div>

        <div className="flex justify-center mt-6">
          <Link href={"/Register"} className="bg-yellow-800 w-72 h-9 rounded-xl text-center text-white">Hey</Link>
          {/* <button type="submit"  disabled={isSubmitting || !isValid}  className="bg-yellow-800 w-72 h-9 rounded-xl disabled:bg-yellow-600 disabled:cursor-wait">
            Login
          </button> */}
        </div>
      </form>
      <div className="createaccount"></div>
      <div className="google"></div>
      <div className="Img1 mt-7 flex justify-center sm:mt-[100px] md:mt-[111px] lg:mt-[100px] xl:mt-40 2xl:mt-0">
        <Image src={ObjectsImage} alt="Objects" width={400} height={270} className="sm:w-[800px] sm:h-60 lg:w-[1050px] lg:h-[275px] xl:w-[1300px] xl:h-[390px] 2xl:h-[430px] 2xl:w-[1720px]"/>
      </div>
    </section>
  );
};

export default Login;
