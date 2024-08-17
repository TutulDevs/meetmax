import { AuthTopContent } from "@/components/auth_top_content/AuthTopContent.component";
import { SigninForm } from "@/components/forms/signin/SigninForm.component";
import { Card, CardContent } from "@/components/ui/card";

const SignInPage = () => {
  return (
    <>
      <AuthTopContent
        title="Sign In"
        subtitle="Welcome back, you've been missed!"
      />

      {/* form */}
      <Card>
        <CardContent>
          <SigninForm />
        </CardContent>
      </Card>
    </>
  );
};

export default SignInPage;
