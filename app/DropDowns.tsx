"use client"

import TypeDropdown from "./TypeDropdown";
import TopicDropdown from "./TopicDropdown";
import DurationDropdown from "./DurationDropdown";
import AgeDropdown from "./AgeDropdown";



const DropDowns = () => {


  return (
    <div className="my-4 container px-4 mx-auto">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-slate-500 font-medium">Or search by:</h3>
        </div>
        <div className="col-span-2  w-full lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="w-full rounded-lg border border-gray-300 p-4 min-h-[35vh] relative isolate">
            <h3 className="text-center">Type</h3>
            <TypeDropdown />
          </div>
          <div className="w-full rounded-lg border border-gray-300 p-4 min-h-[35vh] relative isolate">
            <h3 className="text-center">Topic</h3>
            <TopicDropdown />
          </div>
          <div className="w-full rounded-lg border border-gray-300 p-4 min-h-[35vh] relative isolate">
            <h3 className="text-center">Duration</h3>
            <DurationDropdown />
          </div>
          <div className="w-full rounded-lg border border-gray-300 p-4 min-h-[35vh] relative isolate">
            <h3 className="text-center">Age Group</h3>
            <AgeDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDowns;
