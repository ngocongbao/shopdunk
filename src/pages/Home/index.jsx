import React, { useEffect, useState } from "react";
import banner from "../../assets/Banneriphone.jpg";
export default function Home() {
  const [Image, setImage] = useState(false);  
  useEffect(() => {
    const img = setTimeout(() => {
      setImage(true);
    }, 2000);
    return () => clearTimeout(img);
  }, []);
  return (
    <div>
      {Image && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/[.5]">
          <div className="relative h-4/5">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-2 right-2" onClick={(e)=>setImage(false)}>
              x
            </div>
            <img src={banner} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      )}
      <div>
      Home
      </div>
    </div>
  );
}
