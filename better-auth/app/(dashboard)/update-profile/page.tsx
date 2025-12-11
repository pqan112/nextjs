// import { updateProfile } from "@/app/actions/user";
// import { ChangePasswordForm } from "@/components/change-password";
// import { ToggleOtpForm } from "@/components/toggle-otp-form";
import { updateProfile } from "@/app/actions/user";
import { UpdateProfile } from "@/components/update-profile";

export default async function UpdateProfilePage() {
  const user = await updateProfile();

  return (
    <div className="w-full p-6 shadow-lg mx-auto max-w-7xl min-h-dvh rounded-2xl h-full flex gap-6 justify-center items-start">
      <UpdateProfile
        email={user.email}
        name={user.name ?? ""}
        image={user.image ?? ""}
      />
    </div>
  );
}
