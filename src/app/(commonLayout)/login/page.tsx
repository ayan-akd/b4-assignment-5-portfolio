"use client";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { baseUrl } from "@/utils/authOptions";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <LoginForm />
            </CardContent>
            <p className="text-center">Or Sign In Using</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                effect={"shine"}
                className="rounded-full"
              >
                <FaGoogle />
              </Button>
              <Button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                effect={"shine"}
                className="rounded-full"
              >
                <FaGithub />
              </Button>
            </div>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Register</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <RegisterForm />
            </CardContent>
            <p className="text-center">Or Sign In Using</p>
            <div className="flex justify-center gap-4 mt-4">
              <Button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                effect={"shine"}
                className="rounded-full"
              >
                <FaGoogle />
              </Button>
              <Button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `${baseUrl}/dashboard`,
                  })
                }
                effect={"shine"}
                className="rounded-full"
              >
                <FaGithub />
              </Button>
            </div>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
