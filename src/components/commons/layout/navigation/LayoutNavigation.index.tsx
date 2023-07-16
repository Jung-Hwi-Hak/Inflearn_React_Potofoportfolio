import { useEffect, Fragment } from "react";
import { useRouter } from "next/router";

import * as S from "./LayoutNavigation.styles";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

const NAVIGATION_MENUS = [
  { name: "Firebase Boards", page: "/firebasePage" },
  { name: "Public APIs", page: "/publicApis" },
  { name: "Graphql Boards", page: "/boards" },
  { name: "My Page", page: "/mypages" },
];

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  useEffect(() => {
    const changeFocusNavigation = (): void => {
      const path = router.asPath.split("/")[1];
      if (path === null) return;
      const navigation = document.getElementById(`/${path}`);
      const navigationFocus = document.querySelectorAll(".focus");
      navigationFocus.forEach((el) => {
        el.classList.remove("focus");
      });
      navigation?.classList.add("focus");
    };
    changeFocusNavigation();
  }, [router.asPath]);
  return (
    <>
      <S.Wrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={onClickMoveToPage(el.page)}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Wrapper>
    </>
  );
}