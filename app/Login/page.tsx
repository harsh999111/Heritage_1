'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import './input.css'; // Import the CSS file
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

  const onSubmit= async(data) => {
    await wait(3000);
    console.log(data);
    
  };

  return (
    <section>
      <div className="flex justify-center">
        <Image src={Layer1Image} alt="Layer 1" width={100} height={100} className="mt-7" />
      </div>
      <div>
        <div className="text-yellow-600 font-Inter flex justify-center font-bold text-xl mt-2">
          LOGIN NOW
        </div>
        <p className="text-green-600 flex justify-center text-xs">
          Please enter email and password.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <legend className="text-yellow-700 font-bold ml-5">Password</legend>
            <input
              type="password"
              name="password"
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
          <button type="submit"  disabled={isSubmitting || !isValid}  className="bg-yellow-800 w-72 h-9 rounded-xl disabled:bg-yellow-600 disabled:cursor-wait">
            Login
          </button>
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

export default Login;
