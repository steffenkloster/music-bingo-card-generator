import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  architects_daughter,
  bangers,
  cinzel_decorative,
  creepster,
  dancing_script,
  fascinate_inline,
  fredericka_the_great,
  gloria_hallelujah,
  jacquard_24,
  jersey_15,
  kaushan_script,
  luckiest_guy,
  lugrasimo,
  merriweather,
  monoton,
  montserrat,
  open_sans,
  oswald,
  pinyon_script,
  platypi,
  playfair_display,
  poppins,
  press_start_2p,
  raleway,
  ranchers,
  roboto,
  rye,
  satisfy,
  sedan,
  ubuntu,
} from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generer bingoplader til musik bingo",
  description: "Generer bingoplader til musik bingo online gratis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jacquard_24.variable} ${jersey_15.variable} ${lugrasimo.variable} ${merriweather.variable} ${montserrat.variable} ${open_sans.variable} ${oswald.variable} ${platypi.variable} ${playfair_display.variable} ${poppins.variable} ${dancing_script.variable} ${raleway.variable} ${ubuntu.variable} ${sedan.variable} ${roboto.variable} ${kaushan_script.variable} ${satisfy.variable} ${architects_daughter.variable} ${fredericka_the_great.variable} ${creepster.variable} ${rye.variable} ${press_start_2p.variable} ${monoton.variable} ${luckiest_guy.variable} ${bangers.variable} ${cinzel_decorative.variable} ${fascinate_inline.variable} ${pinyon_script.variable} ${gloria_hallelujah.variable} ${ranchers.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
