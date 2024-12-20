import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HomeOptionsSection from "@/components/HomeOptionsSection";
import HomeNewsSection from "@/components/HomeNewsSection";
import Footer from "@/components/Footer";
// import PushNotificationManager from "@/components/PushNotificationManager";
// import InstallPrompt from "@/components/InstallPrompt";


export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <HomeOptionsSection/>
    <HomeNewsSection/>
    <Footer/>
    
    {/* <PushNotificationManager />
        <InstallPrompt /> */}
    </>
  );
}
