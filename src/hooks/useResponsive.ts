import { Breakpoint, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

// FIXME: type 재지정
interface IUseResponsive {
  query?: any;
  start?: any;
  end?: any;
}

export default (query?: any, start?: any, end?: any) => {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
};
