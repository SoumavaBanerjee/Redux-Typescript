import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Redux/index";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
