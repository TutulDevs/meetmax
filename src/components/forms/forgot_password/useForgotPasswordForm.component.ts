import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../../ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
});

type FORM = z.infer<typeof formSchema>;

export const useForgotPasswordForm = () => {
  const form = useForm<FORM>({
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (values: FORM) => {
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      const err = data?.error || "Something went wrong!";
      const ok = res?.ok ?? false;

      toast({
        title: !ok ? err : "Reset password successful.",
        description: !ok
          ? "Please try again."
          : "Reset link sent to your email",
        variant: !ok ? "destructive" : "success",
      });

      if (ok) {
        router.push("/signin");
      }
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    form,
    onSubmit,
  };
};
