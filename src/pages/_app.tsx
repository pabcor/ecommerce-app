import Overlay from "@/components/overlay/Overlay";
import OverlayProvider from "@/contexts/OverlayContext";
import Header from "@/layouts/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="content relative min-h-screen">
      <OverlayProvider>
        <Header />

        <div className="relative">
          <Overlay />
          <Component {...pageProps} />
        </div>
      </OverlayProvider>
    </main>
  );
}
