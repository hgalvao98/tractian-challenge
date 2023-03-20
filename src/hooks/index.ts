import { get, put } from "../api";

export const useGetData = (url: string) => get(url)

export const useEditData = (url: string, config: object) => put(url, config)
