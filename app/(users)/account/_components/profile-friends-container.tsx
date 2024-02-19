import React from "react";

const FriendsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ul className="px-4">{children}</ul>;
};

export default FriendsContainer;
