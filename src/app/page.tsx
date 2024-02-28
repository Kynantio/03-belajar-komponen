import Image from "next/image";
import Profile from "../components/profile";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div>
        <center>
          <h1>Ilmuwan Luar Biasa</h1>
        </center>
      </div>
      <div className="image-container">
        <Profile /><Profile /><Profile />
      </div>
    </main>
  );
}
