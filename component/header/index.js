import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledHeader } from "./styled";

export const Header = () => {
  const router = useRouter();
  const handleBrandClick = () => {
    router.push("/");
  };
  return (
    <StyledHeader>
      <a href="/" onClick={handleBrandClick}>
        Hacker News
      </a>
    </StyledHeader>
  );
};
