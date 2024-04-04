import React from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function Other() {
  return (
    <div className="flex-[2] border-r-2 border-gray-500 ">
      <div className="flex justify-between items-center border-b border-gray-500 px-5 py-4 dark:text-white">
        <ManageAccountsIcon />
        <h6 className="font-semibold text-lg">Others</h6>
      </div>
      <h1 className="text-white p-5">hello</h1>
    </div>
  );
}

export default Other;
