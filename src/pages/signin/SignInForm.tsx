import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const SignUpForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    checkFormValidity();
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (email.trim() !== "" && email.includes("@") && password.trim() !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // setIsLoading(true);

    try {
      const response = await fetch("url", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);

      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} action="" className="font-nexa ">
        <div className="space-y-[16px] ">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              value={email}
              onChange={emailChangeHandler}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              value={password}
              onChange={passwordChangeHandler}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>
        </div>

        <Link href="available-bounties">
          <button
            type="submit"
            className="mt-[50px]  item just bg-[#141414] hover:btnBackgroundGradient...  cursor-pointer rounded-[8px] h-[50px] w-full text-xl font-bold "
            disabled={!isFormValid}
          >
            Proceed
          </button>
        </Link>

        <div className="flex flex-rwo gap-2 items-center justify-center mt-2 text-base">
          <p> Don’t have an account? </p>
          <Link href="/signup" className="font-bold text-xl">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
