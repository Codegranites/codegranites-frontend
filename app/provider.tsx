'use client';

import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider className="relative max-container min-h-screen">{children}</NextUIProvider>;
}
