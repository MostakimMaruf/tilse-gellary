"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log("Form submitted with:", userData);

    const { data, error } = await authClient.signIn.email({
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
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-700 via-slate-800 to-slate-700 px-4 py-10">
  
  {/* Card */}
  <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8">
    
    {/* Title */}
    <div className="text-center space-y-1">
      <h2 className="text-3xl font-bold text-gray-800">
        Welcome Back
      </h2>
      <p className="text-gray-500 text-sm">
        Sign in to explore your tile gallery
      </p>
    </div>

    {/* Form */}
    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
      
      {/* Email */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Enter a valid email";
          }
          return null;
        }}
        className="flex flex-col gap-1"
      >
        <Label className="text-sm font-medium text-gray-700">
          Email
        </Label>

        <Input
          className="w-full px-4 py-2.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="you@example.com"
        />

        <FieldError className="text-red-500 text-xs mt-1" />
      </TextField>

      {/* Password */}
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Min 8 characters required";
          }
          if (!/[A-Z]/.test(value)) {
            return "Add one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Add one number";
          }
          return null;
        }}
        className="flex flex-col gap-1"
      >
        <Label className="text-sm font-medium text-gray-700">
          Password
        </Label>

        <Input
          className="w-full px-4 py-2.5 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          placeholder="••••••••"
        />

        <FieldError className="text-red-500 text-xs mt-1" />
      </TextField>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm mt-1">
        <label className="flex items-center gap-2 cursor-pointer text-gray-600">
          <Checkbox />
          Remember me
        </label>

        <button
          type="button"
          className="text-purple-600 hover:underline font-medium"
        >
          Forgot?
        </button>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-2">
        <Button
          type="submit"
          className="w-full py-2.5 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Sign In
        </Button>

        <Button
          type="reset"
          className="w-full py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
        >
          Reset
        </Button>
      </div>
    </Form>

    {/* Divider */}
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-gray-300"></div>
      <span className="text-xs text-gray-400 font-medium">OR</span>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>

    {/* Google Login */}
    <button className="w-full py-2.5 rounded-lg border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-100 transition">
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="w-5 h-5"
        height={100}
        width={100}
      alt="google logo"
      />
      <span className="font-medium text-gray-700">
        Continue with Google
      </span>
    </button>

    {/* Register Link */}
    <p className="text-center text-sm text-gray-500">
      Don’t have an account?
      <Link href="/auth/signup" className="text-purple-600 font-medium cursor-pointer hover:underline">
        Sign Up
      </Link>
    </p>
  </div>
</div>
  );
};

export default SignupPage;
