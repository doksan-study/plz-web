import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItems } from "../hooks/MenuItems";

export default ({ onSidebarClose }: any) => {
  const [open, setOpen] = useState<boolean>(true);

  const navigation = useNavigate();

  const { pathname } = useLocation();

  return (
    <Box p={2} height="100%">
      <div>로고</div>
      <Box mt={2}>
        <List>
          {MenuItems.map((item, index) => {
            return (
              <List component="li" disablePadding key={item.title}>
                <div>
                  <ListItem
                    onClick={() => navigation(item.href)}
                    button
                    selected={pathname === item.href}
                    sx={{
                      mb: 1,
                      ...(pathname === item.href && {
                        color: "white",
                        backgroundColor: (theme) =>
                          `${theme.palette.primary.main}!important`,
                      }),
                      borderRadius: 3,
                    }}
                  >
                    <ListItemIcon>
                      {/* <FeatherIcon
                        style={
                          {
                            // color: `${location === item.href ? "white" : ""} `,
                          }
                        }
                        icon={item.icon}
                        width="20"
                        height="20"
                      /> */}
                    </ListItemIcon>

                    <ListItemText onClick={onSidebarClose}>
                      {item.title}
                    </ListItemText>
                  </ListItem>
                </div>
              </List>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};
