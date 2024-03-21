"use client";

import { LogOut, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, getProviders, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [toogleDropdown, setToogleDropdown] = useState(false);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3 pb-2  border-button">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          alt="hello"
          width={35}
          height={35}
          className="object-contain"
        />
        <p className="logo_text">Mypager</p>
      </Link>

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href={"/create-prompt"}>
              <Terminal className="mr-1" /> Add Prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              <LogOut className="mr-2" /> Log Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={session?.user.image}
                width={35}
                height={35}
                className="rounded-md object-cover mt-1 cursor-pointer"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Get Started
                </button>
              ))}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex cursor-pointer">
            <Image
              src={session?.user.image}
              width={35}
              height={35}
              className="rounded-md object-cover mt-1"
              alt="profile"
              onClick={() => setToogleDropdown((prev) => !prev)}
            />
            {toogleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToogleDropdown(false)}
                >
                  <span className="flex transition justify-center items-center mb-6">
                    <Image
                      src={session?.user.image}
                      width={27}
                      height={27}
                      className="rounded-full object-cover mt-1 mr-3"
                      alt="profile"
                    />
                    {""}
                    My Profile
                  </span>
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToogleDropdown(false)}
                >
                  <span className="flex">
                    {" "}
                    <Terminal className="mr-1 transition-all" /> Add Prompt
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToogleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  {" "}
                  <LogOut className="mr-2" /> Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Get Started
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
