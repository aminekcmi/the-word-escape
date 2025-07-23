"use client";

import AuthenticatedUI from "@/components/ui/layout/AuthenticatedUI";
import LoadingUI from "@/components/ui/layout/LoadingUI";
import UnauthenticatedUI from "@/components/ui/layout/UnauthenticatedUI";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export default function Home() {
  return (
    <>
      <AuthLoading>
        <LoadingUI />
      </AuthLoading>

      <Unauthenticated>
        <UnauthenticatedUI />    
      </Unauthenticated>

      <Authenticated>
        <AuthenticatedUI />
      </Authenticated>

      <footer className="bottom-1 absolute w-full font-bold text-slate-950 dark:text-slate-50 text-xs 4xs:text-sm text-center">
        <p>&copy; Copyright 2025 Amine KACIMI</p>
      </footer>
    </>
  );
}