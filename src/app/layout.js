
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import { ThemeContextProvider } from "@/Context/ThemeContext";
import AuthProvider from "@/providers/AuthProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import TransitionProvider from "@/providers/TransitionProvider";





export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  


  
  

 
  return (
    <html>
      <body>
        <AuthProvider>

        <ThemeContextProvider>
          <ThemeProvider>
             
            <TransitionProvider>
              <div className="Container">
           
                {children}
              <Footer/>
               
              </div>
            </TransitionProvider>
              

          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
       
       
      </body>
    </html>
  );
}
