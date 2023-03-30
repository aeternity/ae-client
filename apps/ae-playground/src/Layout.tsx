import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";
import { AeLogo } from "./components/AeLogo";

export function ToggleDrawerBtn(props: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <label
      className={`btn btn-ghost drawer-button lg:hidden`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.isOpen ? faTimes : faBars} />
    </label>
  );
}

function MainMenuLink(props: { to: string; text: string }) {
  return (
    <li className="hover-bordered">
      <a href={props.to}>{props.text}</a>
    </li>
  );
}

function MainMenu() {
  return (
    <ul className="menu menu-vertical">
      <MainMenuLink to={"/"} text={"Home"} />
      <MainMenuLink to={"/about"} text={"About"} />
      <MainMenuLink to={"/FATE-decoder"} text={"FATE Decoder"} />
    </ul>
  );
}

export function Layout({ children }: { children?: React.ReactNode }) {
  const [drwOpen, setDrwOpen] = useState(false);
  const toggleDrawer = () => {
    setDrwOpen(!drwOpen);
  };

  return (
    <div className="drawer drawer-mobile m-0">
      <input
        type="checkbox"
        className="drawer-toggle"
        checked={drwOpen}
        readOnly
      />
      <div className="drawer-content">
        <ToggleDrawerBtn onClick={toggleDrawer} isOpen={drwOpen} />
        <main className="p-2">{children}</main>
      </div>
      <div
        className={`drawer-side h-screen border-r-0 lg:border-r border-r-primary mr-0 lg:mr-1`}
      >
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
        <div className="bg-base-100 w-64">
          <ToggleDrawerBtn onClick={toggleDrawer} isOpen={drwOpen} />
          <div className="flex justify-center h-16 ">
            <AeLogo />
          </div>
          <div className="p-2">
            <MainMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
