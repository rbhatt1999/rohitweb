"use client";

import { useEffect } from "react";

export default function LocatorLoader() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@locator/runtime").then((locator) => {
        locator.setup();
      });
    }
  }, []);

  return null;
}
