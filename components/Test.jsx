import React from 'react';

const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <webview
        src="https://www.google.com" // or another site
        className="h-full w-full"
        style={{ border: 'none' }}
      ></webview>
    </div>
  );
};

export default Home;
