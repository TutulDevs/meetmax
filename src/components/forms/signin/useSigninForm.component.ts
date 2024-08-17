import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { useRouter } from "next/navigation";
import { setToken } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  password: z.string().nonempty({ message: "Password is required." }),
  remember_me: z.boolean(),
});

type FORM = z.infer<typeof formSchema>;

export const useSigninForm = () => {
  const form = useForm<FORM>({
    resolver: zodResolver(formSchema),
    defaultValues: { remember_me: false },
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((v) => !v);

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (values: FORM) => {
    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const user = await res.json();
      const err = user?.error || "Something went wrong!";
      const ok = res?.ok ?? false;

      toast({
        title: !ok ? err : "Signed in successfully.",
        description: !ok ? "Please try again." : "",
        variant: !ok ? "destructive" : "success",
      });

      if (ok) {
        setToken(user);
        router.push("/");
        router.refresh();
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
    showPassword,
    toggleShowPassword,
    onSubmit,
  };
};
