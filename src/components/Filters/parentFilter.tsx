// "use client";

// import { useState } from "react";
// import FiltersSidebar from "@/components/Filters/FiltersSidebar";
// import ChartBarDefault from "@/components/charts/bargraph";

// export default function DashboardPage() {
//   const [filters, setFilters] = useState<{ age: string; race: string }>({
//     age: "",
//     race: "",
//   });

//   return (
//     <div className="flex">
//       {/* Sidebar on the left */}
//       <FiltersSidebar onChange={setFilters} />

//       <div className="flex-1 space-y-6">
//         {/* Pass filters into each chart */}
//         <ChartBarDefault filters={filters} />
//         {/* <AnotherChart filters={filters} /> */}
//         {/* <PieChart filters={filters} /> */}
//       </div>
//     </div>
//   );
// }
