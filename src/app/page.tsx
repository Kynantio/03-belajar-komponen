import Image from "next/image";
import Profile from "../components/profile";
import "./globals.css";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <main>
      <div>
        <Gallery />
      </div>
    </main>
  );
}
