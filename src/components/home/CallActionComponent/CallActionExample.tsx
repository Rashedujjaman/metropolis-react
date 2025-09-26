/**
 * Example usage of CallActionComponent
 * This demonstrates how to integrate the component in your React application
 */

import React from "react";
import CallActionComponent from "./CallActionComponent";

const CallActionExample: React.FC = () => {
  const handleActionClick = (actionName: string) => {
    console.log(`Action clicked: ${actionName}`);
    // Add your custom logic here
    // Example: navigate to another page, show modal, etc.
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>CallActionComponent Examples</h2>

      {/* Default size and text */}
      <div>
        <h3>Default (50px height, 200px width)</h3>
        <CallActionComponent
          actionName="Get Started"
          onActionClick={handleActionClick}
        />
      </div>

      {/* Large size */}
      <div>
        <h3>Large (70px height, 300px width)</h3>
        <CallActionComponent
          actionName="Learn More"
          height={70}
          width={300}
          onActionClick={handleActionClick}
        />
      </div>

      {/* Small size */}
      <div>
        <h3>Small (40px height, 150px width)</h3>
        <CallActionComponent
          actionName="Contact"
          height={40}
          width={150}
          onActionClick={handleActionClick}
        />
      </div>

      {/* Extra large */}
      <div>
        <h3>Extra Large (80px height, 350px width)</h3>
        <CallActionComponent
          actionName="Download Now"
          height={80}
          width={350}
          onActionClick={handleActionClick}
        />
      </div>
    </div>
  );
};

export default CallActionExample;
