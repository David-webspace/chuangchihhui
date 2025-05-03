// src/hooks/usePayment.js
import { useState } from 'react';

export const usePayment = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    const time = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    const string = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    return { time, string };
  };

  const [merchantID, setMerchantID] = useState("3002607");
  const [token, setToken] = useState("");
  const [language, setLanguage] = useState(ECPay.Language.zhTW);
  const [serverType, setServerType] = useState("Stage");
  const [isLoading, setIsLoading] = useState(1);
  const [version, setVersion] = useState("V2");
  const [paymentInfo, setPaymentInfo] = useState("");
  const [merchantTradeNo, setMerchantTradeNo] = useState("");
  
  const backendurl = "https://ecpay-embedded-checkout-backend.vercel.app";
  // const backendurl = "http://localhost:3000";

  return {
    getCurrentTime,
    merchantID,
    setMerchantID,
    token,
    setToken,
    language,
    setLanguage,
    serverType,
    setServerType,
    isLoading,
    setIsLoading,
    version,
    setVersion,
    paymentInfo,
    setPaymentInfo,
    merchantTradeNo,
    setMerchantTradeNo,
    backendurl
  };
};