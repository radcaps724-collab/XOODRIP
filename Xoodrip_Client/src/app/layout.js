import "../../styles/globals.css"; // 
import Navbar from "./product/Navbar";

export const metadata = {
  title: "Xoodrip | Innovating Today, Implementing Tomorrow",
  description: "Crafting Digital Brilliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}

