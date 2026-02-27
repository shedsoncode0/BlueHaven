import React from "react";

import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const treeData = {
  id: 1,
  name: "You",
  avatar:
    "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
  children: [
    {
      id: 2,
      name: "User A",
      avatar:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      children: [
        {
          id: 4,
          name: "User C",
          avatar:
            "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg",
        },
        {
          id: 5,
          name: "User D",
          avatar:
            "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-600nw-2460702995.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "User B",
      avatar:
        "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      children: [
        {
          id: 6,
          name: "Empty",
          avatar:
            "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
        },
        {
          id: 7,
          name: "Empty",
          avatar:
            "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
        },
      ],
    },
  ],
};

const copytext = (text) => {
  if (!navigator.clipboard) {
    console.error("Clipboard API not supported");
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Text copied to clipboard!");
    })
    .catch((err) => {
      toast.error("Failed to copy text:", err);
    });
};

const Referral = () => {
  const { user } = useAuth();
  const refBaseLink =
    import.meta.env.REF_BASE_LINK || "https://blue-haven-gamma.vercel.app/sign-up";

  return (
    <section>
      <h1 className="text-2xl font-bold">Referral</h1>
      <div>
        <div className="mt-10">
          <label className="block text-sm font-medium mb-2 ">
            Referral link
          </label>
          <div className="flex rounded-lg">
            <input
              type="text"
              name="hs-search-box-with-loading-2"
              className="py-2.5 sm:py-3 placeholder:text-lg px-4 block w-full border-gray-200 rounded-s-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
              placeholder={`${refBaseLink}?ref=${user.referralCode}`}
            />
            <button
              onClick={() => copytext(`${refBaseLink}?ref=${user.referralCode}`)}
              type="button"
              className="size-11.5 shrink-0 cursor-pointer inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Copy
            </button>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="bg-gray-100 mt-10 rounded-lg p-10">
          <TreeNode node={treeData} />
        </div>
      </div>
    </section>
  );
};

export default Referral;

const TreeNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center relative">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full border-4 border-purple-500 overflow-hidden bg-gray-200 flex items-center justify-center">
        {node?.avatar ? (
          <img
            src={node.avatar}
            alt={node.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-500">+</span>
        )}
      </div>

      {/* Connector */}
      {node.children && <div className="w-px h-6 bg-gray-400"></div>}

      {/* Children */}
      {node.children && (
        <div className="flex gap-16 relative">
          {/* Horizontal line */}
          <div className="absolute top-0 left-1/2 w-full h-px bg-gray-400 -translate-x-1/2"></div>

          {node.children.map((child) => (
            <div key={child.id} className="flex flex-col items-center">
              <div className="w-px h-6 bg-gray-400"></div>
              <TreeNode node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
