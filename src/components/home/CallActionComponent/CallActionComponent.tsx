/**
 * ===============================================
 * CALL ACTION OVERLAY COMPONENT
 * ===============================================
 *
 * Reusable call-to-action overlay component with customizable
 * dimensions and action text for various UI contexts.
 *
 * Features:
 * - Configurable action name/text
 * - Customizable height and width dimensions
 * - Accessible keyboard navigation support
 * - Orange and black themed design sections
 * - Click and keyboard event handling
 * - ARIA accessibility attributes
 * - Flexible positioning (no absolute positioning)
 *
 * @component CallActionComponent
 * @author Metropolis Living Team
 * @version 1.1.0
 * @since 2025-09-18
 */

import React from "react";
import "./CallActionComponent.css";

interface CallActionComponentProps {
  /**
   * The action name/text to display in the overlay
   * @default 'Get Started'
   */
  actionName?: string;

  /**
   * Height of the overlay component in pixels
   * @default 50
   */
  height?: number;

  /**
   * Width of the overlay component in pixels
   * @default 200
   */
  width?: number;

  /**
   * Event handler when the action button is clicked or activated
   * Receives the action name as parameter
   */
  onActionClick?: (actionName: string) => void;
}

/**
 * CallActionComponent - Interactive overlay with orange arrow and black action text
 * Responsive to click, Enter, and Space key events
 * Positioning handled by parent component
 */
const CallActionComponent: React.FC<CallActionComponentProps> = ({
  actionName = "Get Started",
  height = 50,
  width = 200,
  onActionClick,
}) => {
  /**
   * Handles click and keyboard activation events
   * Calls onActionClick callback with current action name
   */
  const handleActionClick = (): void => {
    // Call the callback with the current action name
    onActionClick?.(actionName);

    // Optional: Add analytics tracking
    console.log(`Action clicked: ${actionName}`);

    // Optional: Add haptic feedback for mobile devices
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
  };

  /**
   * Handles keyboard events (Enter and Space)
   */
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleActionClick();
    }
  };

  return (
    <div
      className="hero-overlay"
      role="button"
      tabIndex={0}
      aria-label={`Action: ${actionName}`}
      style={{ height: `${height}px`, width: `${width}px` }}
      onClick={handleActionClick}
      onKeyDown={handleKeyDown}
    >
      {/* Left Section: Orange arrow indicator */}
      <div className="section-left" aria-hidden="true">
        <span>&gt;&gt;</span>
      </div>

      {/* Right Section: Action name/text */}
      <div className="section-right">
        <span>{actionName}</span>
      </div>
    </div>
  );
};

export default CallActionComponent;
