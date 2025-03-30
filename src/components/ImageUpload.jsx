/* eslint-disable react/prop-types */
const ImageUpload = ({ uploadImageHandler }) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };
  

  return (
    <div className="relative group bg-gray-800/50 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-3xl transition-all border border-gray-700/30 hover:border-purple-400/40 hover:shadow-3xl">
      <label
        htmlFor="fileInput"
        className="flex flex-col items-center justify-center h-64 cursor-pointer transition-all duration-300 hover:bg-purple-900/10 rounded-xl border-2 border-dashed border-gray-600/50 hover:border-purple-400/50 group-hover:scale-[99%]"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex bg-gradient-to-r from-purple-400 to-blue-400 p-4 rounded-full transition-transform hover:scale-110">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Drag & Drop to Upload
            </p>
            <p className="text-gray-400 text-sm">or click to browse files</p>
          </div>

          <p className="text-xs text-gray-500 mt-4">Supported formats: PNG, JPG, JPEG up to 10MB</p>
        </div>

        <input type="file" id="fileInput" className="hidden" accept="image/png, image/jpeg, image/jpg" onChange={showImageHandler} />
      </label>

      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
      </div>
    </div>
  );
};

export default ImageUpload;
