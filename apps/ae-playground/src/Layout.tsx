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
        {children}
      </div>
      <div
        className={`drawer-side h-screen border-r-0 lg:border-r border-r-primary mr-0 lg:mr-1`}
      >
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
        <div className="bg-base-100 w-80 lg:w-80">
          <ToggleDrawerBtn onClick={toggleDrawer} isOpen={drwOpen} />
          <div className="flex justify-center h-16 ">
            <AeLogo />
          </div>
          <div>menu here</div>
        </div>
      </div>
    </div>
  );
}
