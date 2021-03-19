import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/index";
import { useDispatch } from "react-redux";

const useAction = () => {
  const dispatch = useDispatch();
  //   Bind action creators with dispatch
  return bindActionCreators(actionCreators, dispatch);
};

export default useAction;
