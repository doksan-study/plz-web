import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItems } from "../hooks/MenuItems";

export default ({ onSidebarClose }: any) => {
  const [open, setOpen] = useState<boolean>(true);

  const navigation = useNavigate();

  const { pathname } = useLocation();

  return (
    <Box
      p={2}
      height="100%"
      sx={{
        borderRight: "1px solid #D2D2D2",
      }}
    >
      <div
        style={{
          paddingLeft: "10px",
          fontSize: 22,
          letterSpacing: 1.2,
        }}
      >
        Logo Name
      </div>
      <Box mt={3}>
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
