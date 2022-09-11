import { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { Stack } from "@mui/system";

export const Dashboard = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const params = useParams();

  console.log(params);
  return (
    <>
      <Navbar onHamburgerClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      <Sidebar open={isNavbarOpen} />
      <Stack
        sx={{ marginTop: "65px", marginLeft: isNavbarOpen ? "250px" : "60px" }}
      >
        <Outlet />
      </Stack>
    </>
  );
};
