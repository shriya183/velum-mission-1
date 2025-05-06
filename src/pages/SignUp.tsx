
import React, { useState } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { BeamsBackground } from "@/components/ui/beams-background";

// Define form schema
const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw error;
      }

      toast.success("Sign-up successful! Please check your email to verify your account.");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        throw error;
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to sign up with Google.");
    }
  };

  return (
    <BeamsBackground intensity="medium" className="min-h-screen">
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black/20 backdrop-blur-lg border border-white/10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-white">Sign Up</CardTitle>
            <CardDescription className="text-gray-300">
              Create an account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-gray-500"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-200">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-gray-500"
                    {...register("password")}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[rgba(65,105,225,1)] hover:bg-[rgba(65,105,225,0.9)] text-white" 
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              type="button"
              className="w-full border-white/10 bg-black/30 text-white hover:bg-white/10"
              onClick={handleGoogleSignUp}
            >
              <GoogleIcon className="mr-2 h-5 w-5" />
              Sign up with Google
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-400 w-full">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline underline-offset-4 hover:text-white text-blue-400"
              >
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </BeamsBackground>
  );
};

export default SignUp;
