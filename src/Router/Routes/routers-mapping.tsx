import { Stack } from "@mui/material";
import { Dashboard } from "../../Components";
import { IRouterProps, RoutePath } from "./routes.model";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const routerMapping: Record<RoutePath, IRouterProps> = {
  dashboard: {
    icon: <DashboardIcon />,
    title: "Dashboard",
    component: <Dashboard />,
    path: "dashboard",
  },
  inbox: {
    icon: <MailIcon />,
    title: "Inbox",
    path: "inbox",
    component: <Stack>inbox</Stack>,
  },
  starred: {
    icon: <InboxIcon />,
    title: "Starred",
    path: "starred",
    component: <Stack>starred</Stack>,
  },
};
