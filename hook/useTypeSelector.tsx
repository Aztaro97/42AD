import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
