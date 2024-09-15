const Loading = () => ( // Define a functional component called Loading
  <div className="flex justify-center items-center h-64"> {/* Render a div element with specific classes for styling */}
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div> {/* Render a div element with classes for animation and styling */}
  </div> // End of the outer div
); // End of the Loading component definition

export default Loading; // Export the Loading component as the default export