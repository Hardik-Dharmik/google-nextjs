import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { Squares2X2Icon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left  */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right  */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://lh3.googleusercontent.com/ogw/AOh-ky2QSF13dtcE2Sp7_bIcBfMd4mTHazF959BM9Wkp=s32-c-mo" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-40 flex-grow w-4/5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          height={100}
          width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within: shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
