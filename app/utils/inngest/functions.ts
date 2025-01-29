// import { inngest } from "./client";
// import { prisma } from "../db";

// export const handleJobExpiration = inngest.createFunction(
//   { id: "job-expiration" },
//   { event: "job/created" },
//   async ({ event, step }) => {
//     const { jobId, expirationDays } = event.data;

//     // Wait for the specified duration
//     await step.sleep("wait-for-expiration", `${expirationDays}d`);

//     // Update job status to expired
//     await step.run("update-job-status", async () => {
//       await prisma.jobPost.update({
//         where: { id: jobId },
//         data: { status: "EXPIRED" },
//       });
//     });

//     return { jobId, message: "Job marked as expired" };
//   }
// );


import { inngest } from "./client";
import { prisma } from "../db";
import {Resend} from "resend";
const resend = new Resend(process.env.RESEND_API);


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const handleJobExpiration = inngest.createFunction(
  { id: "job-expiration" },
  { event: "job/created" },
  async ({ event, step }) => {
    const { jobId, expirationDays } = event.data;

    // Wait for the specified duration
    await step.sleep("wait-for-expiration", `${expirationDays}d`);

    // Update job status to expired
    await step.run("update-job-status", async () => {
      await prisma.jobPost.update({
        where: { id: jobId },
        data: { status: "EXPIRED" },
      });
    });

    return { jobId, message: "Job marked as expired" };
  }
);

export const sendPeriodicJobListings = inngest.createFunction(
  {
    id: "send-job-listings",
  },
  { event: "jobseeker/created" },
  async ({ event, step }) => {
    const { userId, email } = event.data;
    const totalDay = 2; // Temporary for debugging
    const intervalDays = 1; // Temporary for debugging
    let currentDay = 0;

    console.log("Event data:", event.data);

    while (currentDay < totalDay) {
      await step.sleep("wait-interval", `1s`);
      currentDay += intervalDays;

      const recentJobs = await step.run("fetch-recent-jobs", async () => {
        const jobs = await prisma.jobPost.findMany({
          where: { status: "DRAFT" },
          orderBy: { createdAt: "desc" },
          take: 2,
          include: {
            company: {
              select: { name: true },
            },
          },
        });
        console.log("Fetched recent jobs:", jobs);
        return jobs;
      });

      if (recentJobs.length > 0) {
        const jobListingsHtml = recentJobs
          .map(
            (job) => `
            <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 5px;">
              <h3 style="margin: 0;">${job.jobTitle}</h3>
              <p style="margin: 5px 0;">${job.company.name} • ${job.location}</p>
              <p style="margin: 5px 0;">$${job.salaryFrom.toLocaleString()} - $${job.salaryTo.toLocaleString()}</p>
            </div>`
          )
          .join("");

        await step.run("send-email", async () => {
          console.log("Preparing to send email...");
          try {
            const response = await resend.emails.send({
              from: "Jobs <onboarding@resend.dev>",
              to: ["sarvesh.huddar1@gmail.com"],
              subject: "Latest Job Opportunities for You",
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2>Latest Job Opportunities</h2>
                  ${jobListingsHtml}
                  <div style="margin-top: 30px; text-align: center;">
                    <a href="${process.env.NEXT_PUBLIC_URL}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                      View More Jobs
                    </a>
                  </div>
                </div>
              `,
            });
            console.log("Email sent successfully:", response);
          } catch (error) {
            console.error("Error sending email:", error);
          }
        });


        
      }
    }

    return { userId, message: "Completed job listings notifications." };
  }
);
