import type {Metadata} from "next";import "./globals.css";import Navbar from "@/components/Navbar";import Footer from "@/components/Footer";
export const metadata:Metadata={title:"Outpro.India | Digital Experiences That Drive Growth",description:"Premium corporate digital experiences, technology and growth solutions."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><Navbar/><main>{children}</main><Footer/></body></html>}
