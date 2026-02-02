import React from "react";

const treeData = {
  id: 1,
  name: "You",
  avatar: "/avatar1.jpg",
  children: [
    {
      id: 2,
      name: "User A",
      avatar: "/avatar2.jpg",
      children: [
        { id: 4, name: "User C", avatar: "/avatar3.jpg" },
        { id: 5, name: "User D", avatar: "/avatar4.jpg" },
      ],
    },
    {
      id: 3,
      name: "User B",
      avatar: "/avatar2.jpg",
      children: [
        { id: 6, name: "Empty" },
        { id: 7, name: "Empty" },
      ],
    },
  ],
};

const Referral = () => {
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
              className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-s-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border"
              placeholder="http://www.bluehaven?ref=28465859"
            />
            <button
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
