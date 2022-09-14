import { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/slice/user.slice";

export const Dashboard = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ id: "ridvan-123", name: "Ridvann" }));
  }, [dispatch]);

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
