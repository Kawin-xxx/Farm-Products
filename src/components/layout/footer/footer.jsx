import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Copyright from "/src/components/ui/сopyright/сopyright";
import "./style.css";

// Обёртка для контента страниц
function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo />
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
