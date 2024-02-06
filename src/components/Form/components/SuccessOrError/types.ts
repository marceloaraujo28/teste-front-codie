export type SuccessOrErrorProps = {
  type: "success" | "error";
  handleSuccessOrError: (type: string) => void;
  date?: string;
  time?: string;
  amount?: string;
};
