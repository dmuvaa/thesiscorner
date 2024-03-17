/** @format */
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
export default async function Navbar() {
  const session = await auth();
  return (
    <>
      <div >
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-[#6c00c8] from-10% to-[#19d6e1] to-98% px-28 py-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              Thesis Corner
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border rounded text-white border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow mx-auto lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#about-us"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              >
                About Us
              </a>
              <a
                href="#resources"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
              >
                Resources
              </a>
            </div>
            <div className="ml-auto">
              {session && session.user ? (
                <div className="flex gap-2">
                  <p>{session.user.name}</p>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button
                      className="border hover:bg-blue-100 p-4 rounded"
                      type="submit"
                    >
                      Sign Out
                    </button>
                  </form>
                </div>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn();
                  }}
                >
                  <button
                    className="border hover:bg-blue-100 p-4 rounded"
                    type="submit"
                  >
                    Sign In
                  </button>
                </form>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
