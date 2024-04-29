/** @format */
import { authenticate } from "../lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import {
  ExclamationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";
import Button from "@/app/components/Button";

const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch}>
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Username"
      />
      <input
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        type="password"
        placeholder="Password"
      />
      <LoginButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

export default LoginForm;
