import DoctorsProfile from "@/modules/spandana/doctors/DoctorsProfile";

import React from "react";

const IndividualDoctorPage = () => {
  // const { data, isLoading, isError } = useGetIndividualDoctors(params.id);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  return (
    <div className="mt-20 mx-auto">
      <DoctorsProfile />
    
    </div>
  );
};

export default IndividualDoctorPage;
