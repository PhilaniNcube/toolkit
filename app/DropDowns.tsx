"use client"



const DropDowns = () => {

  const dropDownGroups = [
    {
      type: ["Peer-to-Peer", "Small Group", "Mass Participation"]
    },
    {
      topic: ["Health", "Education", "Safety"]
    },
    {
      duration: ["Once Off", "Phased", "Ongoing"]
    },
    {
      age: ["Primary School", "High School", "Post School"]
    }
  ]

  console.log(dropDownGroups.map(group => Object.keys(group)[0]));




  return (
    <div className="my-4 container mx-auto">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
        <div className="col-span-1">
          <h3 className="text-lg text-slate-500 font-medium">Or search by:</h3>
        </div>
        <div className="col-span-1  w-full lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="w-full rounded-lg border border-gray-300 py-3">
            <h3 className="text-center">Type</h3>

          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDowns;
