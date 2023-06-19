import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const SignUpForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
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
      setConfirmPassword("");
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

          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-xl">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Type here"
              className="signUpInput"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-[50px]  item just bg-[#141414] h-[50px] w-full text-xl font-semibold "
        >
          Proceed
        </button>

        <div className="flex flex-rwo gap-2 items-center justify-center mt-2 text-base">
          <p>Already have an account?</p>
          <Link href="/" className="font-bold text-xl">
            Log In
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
