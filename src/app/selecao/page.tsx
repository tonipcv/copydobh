"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Premium() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Format phone number for WhatsApp API
      const phoneNumber = "5511976650763"; // Removed special characters
      window.location.href = `https://wa.me/${phoneNumber}`;
    }, 3000); // 3 segundos

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Texto em cima */}
        <h1 className="text-white text-xl lg:text-2xl font-medium leading-relaxed">
          POR SER SÓ 30 SELECIONADOS VOU CRIAR UM GRUPO MAIS PRIVATIVO
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 lg:w-64 lg:h-64">
            <Image
              src="/bh.jpeg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-white shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
          
          <p className="text-white text-lg">
            Redirecionando em {countdown} segundos...
          </p>
          
          <div className="w-64 bg-gray-800 rounded-full h-2 mx-auto">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((3 - countdown) / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
} 