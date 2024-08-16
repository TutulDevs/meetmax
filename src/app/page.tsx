import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 space-y-8">
      {/* inputs */}
      <div className="flex gap-4 flex-wrap flex-col max-w-sm">
        <Input placeholder="Your Email" />
      </div>

      {/* buttons */}
      <div className="flex gap-4 flex-wrap">
        <Button>Click me</Button>
        <Button variant={"danger"}>Click me</Button>
        <Button variant={"outline"}>Click me</Button>
        <Button variant={"success"}>Click me</Button>
        <Button variant={"ghost"}>Click me</Button>
        <Link href={"/signup"} className={buttonVariants({ variant: "link" })}>
          Click me
        </Link>
      </div>

      {/* text colors */}
      <div className="space-y-2">
        <h1 className="text-2xl text-danger">
          <strong>BASIC</strong> Lorem ipsum dolor sit amet
        </h1>

        <h1 className="text-2xl text-danger-light-100">
          <strong>BASIC</strong> Lorem ipsum dolor sit amet
        </h1>

        <h1 className="text-2xl text-danger-dark-100">
          <strong>BASIC</strong> Lorem ipsum dolor sit amet
        </h1>

        <h1 className="text-2xl text-neutral">
          <strong>NEUTRAL</strong> Lorem ipsum dolor sit amet
        </h1>

        <h1 className="text-2xl text-dark">
          <strong>DARK</strong> Lorem ipsum dolor sit amet
        </h1>
      </div>
    </main>
  );
}
