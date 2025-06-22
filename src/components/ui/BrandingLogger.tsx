"use client";

import { useEffect } from "react";
import { logBranding } from "@/utils/branding";

export function BrandingLogger() {
  useEffect(() => {
    logBranding();
  }, []);

  return null;
}
