"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";


const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("Form submitted with:", userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      callbackURL:'/'
    })

    console.log("Signup response:", { data, error });

    if (error) {
        alert("signup failed: " + error.message);
    }

    if (data) {
        alert("signup successful! Please check your email to verify your account.");
    }

  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-[#1e293b] px-4 py-10">
      {/* Light gray card matching the screenshot */}
      <div className="w-full max-w-md bg-[#cbd5e1] rounded-3xl shadow-2xl p-8 text-slate-800">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Create Account</h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Join us and start your journey
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

          {/* Name */}
          <TextField isRequired name="name">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-semibold text-slate-700">Full Name</Label>
              <Input
                name="name"
                placeholder="Enter your name"
                className="w-full bg-transparent border-2 border-slate-400 rounded-xl px-4 py-2.5 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-all text-slate-900"
              />
              <FieldError className="text-red-600 text-xs" />
            </div>
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-semibold text-slate-700">Email Address</Label>
              <Input
                name="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border-2 border-slate-400 rounded-xl px-4 py-2.5 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-all text-slate-900"
              />
              <FieldError className="text-red-600 text-xs" />
            </div>
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password">
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm font-semibold text-slate-700">Password</Label>
              <Input
                name="password"
                placeholder="Enter password"
                className="w-full bg-transparent border-2 border-slate-400 rounded-xl px-4 py-2.5 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 transition-all text-slate-900"
              />
              <Description className="text-[10px] text-slate-500 leading-tight">
                Minimum 8 characters, at least 1 uppercase and 1 number
              </Description>
              <FieldError className="text-red-600 text-xs" />
            </div>
          </TextField>

          {/* Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#c042da] to-[#ea44a1] hover:opacity-90 text-white transition py-3 rounded-xl font-bold text-lg shadow-md"
            >
              Sign Up
            </Button>

            <Button
              type="reset"
              className="w-full text-slate-600 hover:text-slate-900 font-medium py-1 text-sm"
            >
              Reset
            </Button>
          </div>

        </Form>

        {/* Footer */}
        <p className="text-sm text-center text-slate-600 mt-8 font-medium">
          Already have an account?{" "}
          <span className="text-purple-600 font-bold cursor-pointer hover:underline">
            Login
          </span>
        </p>

      </div>
    </div> 
  );
};

export default SignupPage;
