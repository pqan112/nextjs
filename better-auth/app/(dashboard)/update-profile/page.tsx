import { updateProfile } from "@/app/actions/user";
import { ChangePasswordForm } from "@/components/change-password-form";
import { ToggleOtpForm } from "@/components/toggle-otp-form";
import { UpdateProfile } from "@/components/update-profile";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function UpdateProfilePage() {
  const user = await updateProfile();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full p-6 mx-auto max-w-7xl rounded-2xl h-full flex gap-6 justify-center items-start">
      <Suspense fallback="Loading...">
        <UpdateProfile
          email={user.email}
          name={user.name ?? ""}
          image={user.image ?? ""}
        />
      </Suspense>

      <ChangePasswordForm />

      <Suspense fallback="Loading...">
        <ToggleOtpForm
          twoFactorEnabled={user.twoFactorEnabled}
          key={user.twoFactorEnabled.toString()}
        />
      </Suspense>
    </div>
  );
}
