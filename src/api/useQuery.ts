import {
  useQuery,
  QueryKey,
  QueryFunction,
  UseQueryOptions,
} from "react-query";

type Props<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> = {
  queryKey: TQueryKey;
  queryFn: QueryFunction<TQueryFnData, TQueryKey>;
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >;
};

export const UseQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  props: Props<TQueryFnData, TError, TData, TQueryKey>
) => {
  return useQuery(props.queryKey, props.queryFn, props.options);
};
