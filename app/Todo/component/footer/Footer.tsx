import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4">
      <p className="text-neutral-130 font-bold text-sm text-center">
        Drag and drop to reorder list
      </p>

      <div className="text-center mt-8 text-neutral-160 text-sm tracking-wider">
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io?ref=challenge">
          <a target="_blank" rel="noreferrer" className="text-pri-100">
            Frontend Mentor
          </a>
        </Link>
        . Coded by
        <Link href="https://github.com/avatarfreak">
          <a target="_blank" rel="noreferrer" className="text-pri-100">
            {" "}
            avatarfreak
          </a>
        </Link>
      </div>
    </footer>
  );
};
export { Footer };
