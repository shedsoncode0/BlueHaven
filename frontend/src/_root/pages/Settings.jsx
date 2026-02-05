import React from "react";
import PrimaryInput from "../../components/input/PrimaryInput";
import PrimaryButton from "../../components/button/PrimaryButton";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
          <p className="text-sm text-gray-500">Manage your profile and preferences</p>
        </div>

        <form className="p-6 space-y-6">
          {/* Profile Info */}
          <PrimaryInput type="text" placeholder="John Doe" label="Fullname" />
          <PrimaryInput type="text" placeholder="you@example.com" label="Email Address" />
          <PrimaryInput type="text" placeholder="••••••••" label="New password" />
          <PrimaryInput type="text" placeholder="000004004s" label="Account Number" />
          <PrimaryInput type="text" placeholder="Jogn jk" label="Account Name" />
          <PrimaryInput type="text" placeholder="Zenith Bank" label="Bank Name" />

          {/* Save Button */}
          <div className="flex justify-end mt-10">
            <PrimaryButton text="Save Changes" />
            
          </div>
        </form>
      </div>
    </div>
  );
}