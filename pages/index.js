import Image from "next/image";
import { Inter } from "next/font/google";
import MainScreen from "@/components/MainScreen";
import BottomBar from "@/components/ButtomBar";
import Toast from "@/components/Toast";
import ModalPlaylist from "@/components/ModalPlayList";


export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Toast />
      <MainScreen />
      <BottomBar />
      <ModalPlaylist />
    </main>
  );
}