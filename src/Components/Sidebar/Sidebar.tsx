import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { routerMapping } from "../../Router";
import { useNavigate } from "react-router-dom";

interface ISidebarProps {
  open: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({ open }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        [`& .MuiDrawer-paper`]: {
          top: "65px",
          width: open ? "250px" : "60px",
          transition: "width 100ms",
        },
      }}
    >
      <List>
        {Object.values(routerMapping).map((barItem, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(`/${barItem.path}`)}
          >
            <ListItemButton>
              <ListItemIcon>{barItem.icon}</ListItemIcon>
              <ListItemText
                sx={{ whiteSpace: "nowrap" }}
                primary={barItem.title}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
