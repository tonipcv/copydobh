"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Info() {
  const router = useRouter();

  useEffect(() => {
    // Immediate redirect
    router.push("/selecao");

    // Cleanup
    return () => {
      // No cleanup needed for immediate redirect
    };
  }, [router]);

  // We don't need to render anything since we're redirecting immediately
  return null;
} 