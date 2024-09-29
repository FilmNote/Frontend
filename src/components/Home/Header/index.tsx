"use client";

import * as S from "./style";
import Link from "next/link";
import { Logo, SearchIcon } from "@/asset/svg";

const Header = () => {
  return (
    <S.Header>
      <Link href={"/"}>
        <Logo />
      </Link>
      <S.Menu>
        <Link href={"/"}>
          <p>홈</p>
        </Link>
        <p>장르</p>
      </S.Menu>
      <S.SearchBox>
        <input type="text" placeholder="검색어를 입력해주세요" />
        <SearchIcon />
      </S.SearchBox>
    </S.Header>
  );
};

export default Header;
