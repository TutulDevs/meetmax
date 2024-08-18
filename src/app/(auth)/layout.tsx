import { AuthHeader } from "@/components/headers/AuthHeader.component";

export default function RootLayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* header */}
      <AuthHeader />

      {/* content */}
      <main className="max-w-xl-1 w-full mx-auto px-6 py-8">{children}</main>
    </>
  );
}
