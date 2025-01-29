import { JobFilters } from "@/components/general/JobFilters";
import JobListings from "@/components/general/JobListings";
import JobListingsLoading from "@/components/general/JobListingsLoading";
import { Suspense } from "react";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const jobTypes = params.jobTypes?.split(",") || [];
  const location = params.location || "";

  // Create a composite key from all filter parameters
  const filterKey = `page=${currentPage};types=${jobTypes.join(
    ","
  )};location=${location}`;

  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />
      <div className="col-span-2 flex flex-col gap-6">
        <Suspense key={filterKey} fallback={<JobListingsLoading />}>
          <JobListings
            currentPage={currentPage}
            jobTypes={jobTypes}
            location={location}
          />
        </Suspense>
      </div>
    </div>
  );
}


// import Wrapper from "@/components/global/wrapper";
// import Analysis from "@/components/marketing/analysis";
// import Companies from "@/components/marketing/companies";
// import CTA from "@/components/marketing/cta";
// import Features from "@/components/marketing/features";
// import Hero from "@/components/marketing/hero";
// import Integration from "@/components/marketing/integration";
// import LanguageSupport from "@/components/marketing/lang-support";
// import Pricing from "@/components/marketing/pricing";

// const HomePage = () => {
//     return (
//         <Wrapper className="py-20 relative">
//             <Hero />
//             <Companies />
//             <Features />
//             <Analysis />
//             <Integration />
//             <Pricing />
//             <LanguageSupport />
//             <CTA />
//         </Wrapper>
//     )
// };

// export default HomePage
