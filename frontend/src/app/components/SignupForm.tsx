/** @format */

const SignUpForm = () => (
  <form>
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
    <button
      className="block w-full p-2 text-white bg-green-500 rounded"
      type="submit"
    >
      Sign Up
    </button>
  </form>
);

export default SignUpForm;