import { AxiosError } from "axios";
import Disclaimer from "./Disclaimer";

export type ErrorMessageProperties = {
  error: any;
  text?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const ErrorMessage = ({ error, text, ...props }: ErrorMessageProperties) => {
  const axiosError = error as AxiosError;

  if (axiosError.isAxiosError) {
    const data = axiosError.response?.data;
    const text = data?.message ?? axiosError.message;
    const status = data?.status ?? axiosError.response?.status;

    props.title = `(${status}): ${text}`;
  }
  
  return (
    <div {...props}>
      <Disclaimer className='alert'>
        {text ?? 'Під час запиту виникла помилка, спробуй ще раз через декілька хвилин'}
      </Disclaimer>
    </div>
  );
};

export default ErrorMessage;
