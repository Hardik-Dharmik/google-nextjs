import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(router.query.term);
  console.log(router, searchInputRef);
  // searchInputRef.current.value = router.query.term;

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XMarkIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />

          <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://lh3.googleusercontent.com/ogw/AOh-ky2QSF13dtcE2Sp7_bIcBfMd4mTHazF959BM9Wkp=s32-c-mo"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
