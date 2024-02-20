import React from "react";

const FriendsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 w-full lg:gap-y-4">
      {children}
    </div>
  );
};

export default FriendsContainer;
