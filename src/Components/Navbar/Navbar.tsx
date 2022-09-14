import {
  AppBar,
  Badge,
  ButtonProps,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { getUser, IUser } from "../../Store/slice/user.slice";

interface INavbarProps {
  onHamburgerClick: () => void;
}

export const Navbar: FC<ButtonProps & INavbarProps> = ({
  sx,
  onHamburgerClick,
  ...props
}) => {
  const user = useSelector<IUser>(getUser) as IUser;
  return (
    <AppBar
      sx={{ maxHeight: 64, minHeight: 64, justifyContent: "center", ...sx }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <IconButton onClick={onHamburgerClick}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography sx={{ marginLeft: 2 }}>
            {user.name} {user.id}
          </Typography>
        </Stack>

        <Stack direction="row" sx={{ marginRight: 1 }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge>
              <AccountCircle />
            </Badge>
          </IconButton>
        </Stack>
      </Stack>
    </AppBar>
  );
};
