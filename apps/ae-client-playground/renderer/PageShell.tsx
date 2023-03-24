import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Link } from "./Link";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <div>
              <Logo />
            </div>
            <div>
              <Link className="navitem" href="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="navitem" href="/about">
                About
              </Link>
            </div>
            <div>
              <Link className="navitem" href="/FATE-decode">
                FATE decode
              </Link>
            </div>
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-5">{children}</div>;
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 items-center line-height-2 border-r border-r-2 min-h-[100vh]">
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className={"p-2 col-span-4"}>{children}</div>;
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
