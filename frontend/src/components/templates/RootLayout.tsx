import Header from "../organisms/Header.tsx";
import Footer from "../organisms/Footer.tsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* <div className="container mx-auto border-red-500"> */}
        <Outlet />
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
