"use client";

import { Fragment } from "react";

const project = () => {
  return (
    <Fragment>
      <div
        className="header"
        style={{ width: "100%", background: "blue", borderRadius: "0.5em" }}
      >
        Header
      </div>
      <div className="body">Body</div>
    </Fragment>
  );
};

export default project;
