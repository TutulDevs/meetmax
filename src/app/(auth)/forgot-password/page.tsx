import { AuthTopContent } from "@/components/auth_top_content/AuthTopContent.component";
import { ForgotPasswordForm } from "@/components/forms/forgot_password/ForgotPasswordForm.component";
import { Card, CardContent } from "@/components/ui/card";

const ForgotPasswordPage = () => {
  return (
    <>
      <AuthTopContent
        title="Forgot password?"
        subtitle="Enter your details to receive a reset link"
      />

      {/* form */}
      <Card>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </>
  );
};

export default ForgotPasswordPage;
