import { ReactNode } from "react";

import { SWRConfig } from "swr";
import { NEXT_PUBLIC_API_URL } from "@/shared/config";

async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}${url}`, options);

  if (!res.ok) {
    const errorDetails = await res.json();
    const error = new Error('An error occurred while fetching the data.');
    (error as any).info = errorDetails;
    (error as any).status = res.status;
    throw error;
  }

  return res.json();
}

export function SWRProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher
      }}
    >
      {children}
    </SWRConfig>
  );
}