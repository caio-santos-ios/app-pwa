import SignInForm from "@/src/components/auth/SignInForm";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex items-center justify-center bg-zinc-50 font-sans dark:bg-(--color-brand-900)">
      <div className="w-10/12">
        <SignInForm />
      </div>
    </div>
  );
}
