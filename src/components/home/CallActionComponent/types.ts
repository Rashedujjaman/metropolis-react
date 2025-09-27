export interface CallActionComponentProps {
  actionName?: string;
  height?: number;
  width?: number;
  onActionClick?: (actionName: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface CallActionEvent {
  actionName: string;
  timestamp: Date;
  target: "click" | "keyboard";
}
