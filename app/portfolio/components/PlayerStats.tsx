export default function PlayerStats() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-900 bg-opacity-50 p-6 border-2 border-green-800 rounded-lg">
      <div className="w-32 h-32 bg-green-900 rounded-full flex items-center justify-center border-4 border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.3)]">
        <span className="text-4xl">👾</span>
      </div>
      
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold text-white">Character Bio</h3>
        <p className="opacity-80 leading-relaxed">
          A creative developer with a passion for building immersive digital experiences. 
          Specializes in Frontend Magic, UI/UX Design, and turning coffee into code.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-black p-2 border border-green-700">
            <div className="text-xs text-green-500 uppercase">Class</div>
            <div className="font-bold">Technomancer</div>
          </div>
          <div className="bg-black p-2 border border-green-700">
            <div className="text-xs text-green-500 uppercase">Guild</div>
            <div className="font-bold">Open Source</div>
          </div>
        </div>
      </div>
    </div>
  );
}
