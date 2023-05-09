import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import React from "react";
import { Layout } from "./Layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let e = <></>;
  if (isRouteErrorResponse(error)) {
    e = (
      <>
        {error.status} {error.statusText}
        <br />
        {error.data?.message}
      </>
    );
  } else if (error instanceof Error) {
    e = <>{error.message}</>;
  } else {
    return <h1>Oops! Unexpected Error</h1>;
  }

  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>An unexpected error has occurred.</p>
        <p>
          <i>{e}</i>
        </p>
      </div>
    </Layout>
  );
}
