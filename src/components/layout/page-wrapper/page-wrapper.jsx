import React from "react";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";
import MainPage from "components/pages/main-page/main-page";
import { Main } from "./styles.js";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
