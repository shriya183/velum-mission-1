
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BeamsBackground } from "@/components/ui/beams-background";
import Logo from "@/components/Logo";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, Google } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    toast.success("Sign up successful!", {
      description: "Welcome to Velum!",
    });
    console.log("Sign up data:", data);
    // Here you would typically handle the signup logic
    navigate("/");
  };

  const handleGoogleSignUp = () => {
    toast.info("Google sign up clicked", {
      description: "Google authentication would be integrated here",
    });
    console.log("Google sign up clicked");
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <BeamsBackground intensity="medium" className="min-h-screen">
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black bg-opacity-50 text-white border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo />
              <span className="text-2xl font-semibold">Velum</span>
            </div>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            className="bg-black bg-opacity-50 border-zinc-700 text-white pl-10"
                            {...field}
                          />
                        </FormControl>
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-zinc-500" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="bg-black bg-opacity-50 border-zinc-700 text-white pl-10"
                            {...field}
                          />
                        </FormControl>
                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-zinc-500" />
                        <button
                          type="button"
                          onClick={toggleShowPassword}
                          className="absolute right-3 top-2.5 text-zinc-500 hover:text-white"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[rgba(65,105,225,1)] hover:bg-[rgba(65,105,225,0.8)]">
                  Sign Up
                </Button>
              </form>
            </Form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-2 text-zinc-400">or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
              onClick={handleGoogleSignUp}
            >
              <Google className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-zinc-400 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[rgba(65,105,225,1)] hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </BeamsBackground>
  );
};

export default SignUp;
