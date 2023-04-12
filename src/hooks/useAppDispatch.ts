import { TypedDispatch } from "helpers/types";
import { RootState } from "index";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();