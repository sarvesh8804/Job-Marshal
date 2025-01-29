import { signIn } from "@/app/utils/auth";
    import Spline from '@splinetool/react-spline/next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as React from "react";
import type { SVGProps } from "react";
import { GeneralSubmitButton } from "../general/SubmitButtons";

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    width="1em"
    height="1em"
    fill="#24292f"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className="dark:invert"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 256 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);

export function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <form
                action={async () => {
                  "use server";
                  await signIn("github", {
                    redirectTo: "/onboarding",
                  });
                }}
              >
                <GeneralSubmitButton
                  text="Login with GitHub"
                  icon={<Github />}
                  variant="outline"
                  width="w-full"
                />
              </form>
              <form
                action={async () => {
                  "use server";
                  await signIn("google", {
                    redirectTo: "/onboarding",
                  });
                }}
              >
                <GeneralSubmitButton
                  text="Login with Google"
                  icon={<Google />}
                  variant="outline"
                  width="w-full"
                />
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

// "use client"
// import { useState } from 'react'
// import { signIn } from "@/app/utils/auth";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import * as React from "react";
// import type { SVGProps } from "react";
// import { GeneralSubmitButton } from "../general/SubmitButtons";
// import { redirect } from 'next/navigation';

// const Github = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     viewBox="0 0 256 250"
//     width="1em"
//     height="1em"
//     fill="#24292f"
//     xmlns="http://www.w3.org/2000/svg"
//     preserveAspectRatio="xMidYMid"
//     className="dark:invert"
//     {...props}
//   >
//     <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
//     />
//   </svg>
// );

// const Google = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width="1em"
//     height="1em"
//     viewBox="0 0 256 262"
//     xmlns="http://www.w3.org/2000/svg"
//     preserveAspectRatio="xMidYMid"
//     {...props}
//   >
//     <path
//       d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
//       fill="#4285F4"
//     />
//     <path
//       d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
//       fill="#34A853"
//     />
//     <path
//       d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
//       fill="#FBBC05"
//     />
//     <path
//       d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
//       fill="#EB4335"
//     />
//   </svg>
// );

// export function LoginForm() {
//   const [step, setStep] = useState<'login' | 'worker' | 'employer' | 'otp'>('login')
//   const [role, setRole] = useState('')
//   const [otp, setOtp] = useState('')
//   const [error, setError] = useState('')
//   const [workerDetails, setWorkerDetails] = useState({
//     name: '',
//     contact: '',
//     location: '',
//     occupation: '',
//     aadharNumber: '',
//     aadharPhoto: '',
//   })
//   const [employerDetails, setEmployerDetails] = useState({
//     name: '',
//     organizationName: '',
//     address: '',
//     documents: '',
//     contactNumber: '',
//   })

//   const handleRoleChange = (value: string) => {
//     setRole(value)
//     setStep(value === 'worker' ? 'worker' : 'employer')
//   }

//   const handleWorkerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setWorkerDetails({
//       ...workerDetails,
//       [name]: value,
//     })
//   }

//   const handleEmployerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setEmployerDetails({
//       ...employerDetails,
//       [name]: value,
//     })
//   }

//   const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setOtp(e.target.value)
//   }

//   const handleWorkerSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setStep('otp')
//   }

//   const handleEmployerSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setStep('otp')
//   }

//   const handleOTPVerification = (e: React.FormEvent) => {
//     e.preventDefault()
//     const expectedOTP = role === 'worker' ? '2374' : '6657'
//     if (otp === expectedOTP) {
//       setError('')
//       // Redirect to respective dashboard
//       if (role === 'worker') {
//         // Redirect to worker dashboard
//         alert('Worker Dashboard')
//         redirect("/");
//       } else if (role === 'employer') {
//         // Redirect to employer dashboard
//         alert('Employer Dashboard')
//       }
//     } else {
//       setError('Invalid OTP')
//     }
//   }

//   return (
//     <div className="flex flex-col gap-6">
//       {step === 'login' && (
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle className="text-xl">Welcome back</CardTitle>
//             <CardDescription>
//               Login with your Apple or Google account
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-6">
//               <div className="flex flex-col gap-4">
//                 <form
//                   action={async () => {
//                     // "use server"
//                     await signIn("github", {
//                       redirectTo: "/onboarding",
//                     });
//                   }}
//                 >
//                   <GeneralSubmitButton
//                     text="Login with GitHub"
//                     icon={<Github />}
//                     variant="outline"
//                     width="w-full"
//                   />
//                 </form>
//                 <form
//                   action={async () => {
//                     // "use server"
//                     await signIn("google", {
//                       redirectTo: "/onboarding",
//                     });
//                   }}
//                 >
//                   <GeneralSubmitButton
//                     text="Login with Google"
//                     icon={<Google />}
//                     variant="outline"
//                     width="w-full"
//                   />
//                 </form>
//               </div>
//               <div className="flex flex-col gap-4">
//                 <Label htmlFor="role">Role</Label>
//                 <Select onValueChange={handleRoleChange} defaultValue={role}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select your role" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="worker">Worker</SelectItem>
//                     <SelectItem value="employer">Employer</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       )}
//       {step === 'worker' && (
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle className="text-xl">Worker Registration</CardTitle>
//             <CardDescription>
//               Fill in your details to register as a worker.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleWorkerSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" type="text" name="name" value={workerDetails.name} onChange={handleWorkerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="contact">Contact</Label>
//                   <Input id="contact" type="tel" name="contact" value={workerDetails.contact} onChange={handleWorkerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="location">Location</Label>
//                   <Input id="location" type="text" name="location" value={workerDetails.location} onChange={handleWorkerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="occupation">Occupation</Label>
//                   <Select onValueChange={(value) => handleWorkerChange({ target: { name: 'occupation', value } } as any)} defaultValue={workerDetails.occupation}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select your occupation" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="construction">Construction</SelectItem>
//                       <SelectItem value="carpenters">Carpenters</SelectItem>
//                       <SelectItem value="painter">Painter</SelectItem>
//                       <SelectItem value="electrician">Electrician</SelectItem>
//                       <SelectItem value="mason">Mason</SelectItem>
//                       <SelectItem value="plumber">Plumber</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="aadharNumber">Aadhar Number</Label>
//                   <Input id="aadharNumber" type="text" name="aadharNumber" value={workerDetails.aadharNumber} onChange={handleWorkerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="aadharPhoto">Aadhar Photo</Label>
//                   <Input id="aadharPhoto" type="file" name="aadharPhoto" onChange={(e) => handleWorkerChange({ target: { name: 'aadharPhoto', value: e.target.files?.[0]?.name || '' } } as any)} required />
//                 </div>
//               </div>
//               <Button type="submit">Submit</Button>
//             </form>
//           </CardContent>
//         </Card>
//       )}
//       {step === 'employer' && (
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle className="text-xl">Employer Registration</CardTitle>
//             <CardDescription>
//               Fill in your details to register as an employer.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleEmployerSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" type="text" name="name" value={employerDetails.name} onChange={handleEmployerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="organizationName">Organization Name</Label>
//                   <Input id="organizationName" type="text" name="organizationName" value={employerDetails.organizationName} onChange={handleEmployerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="address">Address</Label>
//                   <Input id="address" type="text" name="address" value={employerDetails.address} onChange={handleEmployerChange} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="documents">Documents</Label>
//                   <Input id="documents" type="file" name="documents" onChange={(e) => handleEmployerChange({ target: { name: 'documents', value: e.target.files?.[0]?.name || '' } } as any)} required />
//                 </div>
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="contactNumber">Contact Number</Label>
//                   <Input id="contactNumber" type="tel" name="contactNumber" value={employerDetails.contactNumber} onChange={handleEmployerChange} required />
//                 </div>
//               </div>
//               <Button type="submit">Submit</Button>
//             </form>
//           </CardContent>
//         </Card>
//       )}
//       {step === 'otp' && (
//         <Card>
//           <CardHeader className="text-center">
//             <CardTitle className="text-xl">OTP Verification</CardTitle>
//             <CardDescription>
//               Enter the OTP sent to your email/phone number.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleOTPVerification}>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="otp">OTP</Label>
//                 <Input id="otp" type="text" value={otp} onChange={handleOTPChange} required />
//                 {error && <p className="text-red-500">{error}</p>}
//                 <Button type="submit">Verify</Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//       )}
//       <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
//         By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
//         and <a href="#">Privacy Policy</a>.
//       </div>
//     </div>
//   )
// }