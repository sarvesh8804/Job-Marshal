// import { LoginForm } from "@/components/forms/LoginForm";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Logo from "@/public/logo.png";
// import Spline from "@splinetool/react-spline/next";

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen w-screen flex items-center justify-center">
//       <div className="flex w-full max-w-sm flex-col gap-6">
//         <Link href="/" className="flex items-center gap-2 self-center">
//           <Image src={Logo} alt="Logo" className="size-10" />
//           <h1 className="text-2xl font-bold">
//             Job<span className="text-primary">Marshal</span>
//           </h1>
//         </Link>
//         <main>
//       <Spline
//         scene="https://prod.spline.design/sV9lZ6pSoB3ILtIK/scene.splinecode" 
//       />
//     </main>
//         <LoginForm />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import { LoginForm } from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import Spline from "@splinetool/react-spline/next";

const LoginPage = () => {
  return (
    // <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 flex items-center justify-center">
      <div className="w-full max-w-7xl flex items-center justify-center p-8">
        <div className="w-full flex flex-col lg:flex-row gap-8 rounded-lg shadow-lg overflow-hidden">
          
          {/* Left column: Spline element */}
          <div className="lg:w-1/2 flex justify-center  p-6">
            <Spline scene="https://prod.spline.design/sV9lZ6pSoB3ILtIK/scene.splinecode" />
          </div>

          {/* Right column: Login form */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center  p-8">
            <Link href="/" className="flex items-center justify-center gap-2 mb-8">
              <Image src={Logo} alt="Logo" width={40} height={40} />
              <h1 className="text-2xl font-bold text-center">
                Job<span className="text-primary">Marshal</span>
              </h1>
            </Link>
            <LoginForm />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default LoginPage;
