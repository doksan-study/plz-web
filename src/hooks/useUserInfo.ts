import { useSelector, shallowEqual } from "react-redux";

export default () => {
  const { principal } = useSelector((state: any) => state.auth, shallowEqual);
  return principal;
};
