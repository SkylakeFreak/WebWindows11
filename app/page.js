"use client";
import Image from "next/image";
import Main from "@/components/Main";
import { UserProvider } from '@/app/userContext';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <UserProvider>
      <Main/>

      </UserProvider>
      
      

    </div>
  );
}
