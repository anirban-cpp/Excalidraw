import ThemeProvider from "@/Providers/ThemeProvider";
import AppBar from "@/components/AppBar";
import DrawArea from "@/components/DrawArea";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-container">
        <AppBar />
        <DrawArea />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
