"use client";
import Google from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react";
import main from "/public/main.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Component() {
  const notify = () => toast.success("Add Posted Successfully");
  const notifye = () => toast.error("An Error Occur");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status === 201) {
        notify();
        router.push("/login?success=Account has been created");
      } else {
        notifye();
      }
    } catch (error) {
      notifye();
      console.log("data sending fail");
    }
  };
  return (
    <>
      <form
        className="h-screen w-[100%] md:flex justify-around items-center hidden"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex z-10 gap-2">
            <Image src={main} width={50} height={50} />
            <h1 className="font-bold font-mono text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
              Car-Forest
            </h1>
          </div>
          <p className="mt-4 text-gray-500 xl:text-2xl 2xl:text-3xl">
            Explore our wide range of high-quality cars
          </p>
        </div>
        <div className="w-[35%] border bg-white rounded-md shadow-lg">
          <div className="mx-auto w-10/12 mt-5 mb-5">
            <input
              type="name"
              name="name"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 mb-3 border rounded "
            />
            <input
              type="email"
              name="email"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 mb-3 border rounded "
            />
            <input
              type="password"
              name="password"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 mb-3 border rounded"
            />
            <button
              className="w-full bg-blue-600 text-white rounded-md p-3"
              type="submit"
            >
              Register
            </button>
            <ToastContainer />
            <p className="text-gray-500 flex justify-end items-center mt-1">
              Already have an account,
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
            </p>
            {/* <hr className="w-full mt-6 mb-6" />
          <button
            className="w-6/12 bg-blue-600 text-white rounded-md  mx-auto flex items-center p-1 "
            onClick={() => signIn("google")}
          >
            <div className="flex items-center justify-center">
              <div className="bg-white p-1 border  rounded-md">
                <Image
                  src="https://img.freepik.com/free-icon/google_318-278809.jpg?w=360"
                  width={25}
                  height={25}
                />
              </div>
              <p className="ml-1"> Sign in with Google</p>
            </div>
          </button> */}
          </div>
        </div>
      </form>
      {/*  */}
      {/*  */}
      {/*  */}
      <form
        className="h-screen w-[100%] flex justify-around items-center md:hidden"
        onSubmit={handleSubmit}
      >
        <div className="w-[80%] border bg-white rounded-md shadow-lg">
          <div className="mx-auto w-10/12 mt-5 mb-5">
            <input
              type="name"
              name="name"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 mb-3 border rounded "
            />
            <input
              type="email"
              name="email"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 mb-3 border rounded "
            />
            <input
              type="password"
              name="password"
              //   value={carData.price}
              //   onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 mb-3 border rounded"
            />
            <button
              className="w-full bg-blue-600 text-white rounded-md p-3"
              type="submit"
            >
              Register
            </button>
            <ToastContainer />
            <p className="text-gray-500 flex justify-end items-center mt-1">
              Already have an account,
              <Link href="/login" className="text-blue-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

// const { data: session } = useSession();
// console.log(session);
// if (session) {
//   return (
//     <div className="h-screen flex w-screen justify-center items-center">
//       Signed in as {session.user.email} <br />
//       <button onClick={() => signOut()}>Sign out</button>
//     </div>
//   );
// }
// return (
//   <div className="h-screen w-screen flex justify-center items-center">
//     Not signed in <br />
//     <button onClick={() => signIn("google")}>Sign in</button>
//   </div>
// );
