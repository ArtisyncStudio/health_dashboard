import "./globals.css";
//Continue importing fonts
import { Montserrat, Playfair_Display } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/page/navbar";
import Footer from "@/components/page/footer";
import { FiltersProvider } from "@/context/FiltersContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--montserrat-text-font",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--playfair-display",
});

export const metadata = {
  title: "Harc Community Health Dashboard",
  description:
    "A community health dashboard using HARC's data that shows data about the Coachella Valley.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair_display.variable}`}
    >
      <body className={`${montserrat.variable}`}>
        <ReactQueryClientProvider>
          <FiltersProvider>
            <Navbar />
            {children}
            <Footer />
          </FiltersProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
