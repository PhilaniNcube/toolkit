const Filters = () => {
  return (
    <div className="w-full mt-4">
      <h3 className="uppercase text-xl text-slate-800 font-medium">
        Adjust Filters
      </h3>
      <div className="w-full mt-2">
        <h4 className="text-lg text-slate-700 font-medium">Type</h4>
        <div className="flex flex-col mt-2 space-y-2 w-full">
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="peer-to-peer" id="peer-to-peer" />
              <label htmlFor="peer-to-peer" className="text-slate-700 font-medium text-md">Peer To Peer</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">22</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="small-group" id="small-group" />
              <label htmlFor="small-group" className="text-slate-700 font-medium text-md">Small Group</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">11</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="mass-participation" id="mass-participation" />
              <label htmlFor="mass-participation" className="text-slate-700 font-medium text-md">Mass Participation</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">10</small>
          </span>
        </div>
      </div>
      <div className="pt-3">

      <hr className="" />
      </div>
      <div className="w-full mt-2">
        <h4 className="text-lg text-slate-700 font-medium">Topic</h4>
        <div className="flex flex-col mt-2 space-y-2 w-full">
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="health" id="health" />
              <label htmlFor="health" className="text-slate-700 font-medium text-md">Health</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">22</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="education" id="education" />
              <label htmlFor="education" className="text-slate-700 font-medium text-md">Education</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">11</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="safety" id="safety" />
              <label htmlFor="safety" className="text-slate-700 font-medium text-md">Safety</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">10</small>
          </span>
        </div>
      </div>
      <div className="pt-3">

      <hr className="" />
      </div>
      <div className="w-full mt-2">
        <h4 className="text-lg text-slate-700 font-medium">Duration</h4>
        <div className="flex flex-col mt-2 space-y-2 w-full">
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="once-off" id="once-off" />
              <label htmlFor="once-off" className="text-slate-700 font-medium text-md">Once off</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">22</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="phased" id="phased" />
              <label htmlFor="phased" className="text-slate-700 font-medium text-md">Phased</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">11</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="ongoing" id="ongoing" />
              <label htmlFor="ongoing" className="text-slate-700 font-medium text-md">Ongoing</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">10</small>
          </span>
        </div>
      </div>
      <div className="pt-3">

      <hr className="" />
      </div>
      <div className="w-full mt-2">
        <h4 className="text-lg text-slate-700 font-medium">Age Group</h4>
        <div className="flex flex-col mt-2 space-y-2 w-full">
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="primary-school" id="primary-school" />
              <label htmlFor="primary-school" className="text-slate-700 font-medium text-md">Primary School</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">22</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="high-school" id="high-school" />
              <label htmlFor="high-school" className="text-slate-700 font-medium text-md">High School</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">11</small>
          </span>
          <span className="flex justify-between items-center">
            <div className="flex space-x-2">
              <input type="checkbox" name="post-school" id="post-school" />
              <label htmlFor="post-school" className="text-slate-700 font-medium text-md">Post School</label>
            </div>
            <small className="font-bold text-xs  flex items-center justify-center p-1 bg-gray-300 rounded text=slate-900">10</small>
          </span>
        </div>
      </div>

    </div>
  );
};
export default Filters;
