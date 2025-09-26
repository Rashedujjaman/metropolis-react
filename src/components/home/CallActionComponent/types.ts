/**
 * Type definitions for CallActionComponent
 */

export interface CallActionComponentProps {
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

  /**
   * Additional CSS class name for custom styling
   */
  className?: string;

  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

export interface CallActionEvent {
  actionName: string;
  timestamp: Date;
  target: "click" | "keyboard";
}
