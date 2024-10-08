import { AuthTopContent } from "@/components/auth_top_content/AuthTopContent.component";
import { SignupForm } from "@/components/forms/signup/SignupForm.component";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <AuthTopContent
        title="Getting Started"
        subtitle="Create an account to continue and connect with the people."
      />

      {/* form */}
      <Card>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </>
  );
};

export default SignUpPage;
