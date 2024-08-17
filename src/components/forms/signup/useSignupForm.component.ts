import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useState } from "react";
import { useToast } from "../../ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .nonempty({ message: "Email is required." }),
  name: z.string().nonempty({ message: "Name is required." }),
  password: z.string().nonempty({ message: "Password is required." }),
  dob: z.date({ required_error: "Date of birth is required." }),
  gender: z.string().nonempty({ message: "Gender is required." }),
});

type FORM = z.infer<typeof formSchema>;

const genders = [
  { value: "male", title: "Male" },
  { value: "female", title: "Female" },
];

export const useSignupForm = () => {
  const form = useForm<FORM>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
    },
  });

  const selectedGender = useWatch({
    control: form.control,
    name: "gender",
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((v) => !v);

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (values: FORM) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const ok = res?.ok ?? false;

      toast({
        title: !ok ? "Something went wrong!" : "Account created successfully.",
        description: !ok ? "Please try again." : "Please login to access.",
        variant: !ok ? "destructive" : "success",
      });

      if (ok) router.push("/signin");
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    genders,
    form,
    selectedGender,
    showPassword,
    toggleShowPassword,
    onSubmit,
  };
};
