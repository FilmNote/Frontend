"use client";

import * as S from "./style";
import Link from "next/link";
import { Logo, SearchIcon } from "@/asset/svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <S.Header>
      <Link href={"/"}>
        <Logo />
      </Link>
      <S.Menu>
        <Link href={"/"}>
          <p>홈</p>
        </Link>
        {/* <p>장르</p> */}
      </S.Menu>
      <S.SearchBox>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <SearchIcon onClick={handleSearch} />
      </S.SearchBox>
    </S.Header>
  );
};

export default Header;
