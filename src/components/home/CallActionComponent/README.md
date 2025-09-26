# CallActionComponent

A reusable React call-to-action overlay component with customizable dimensions and action text for various UI contexts.

## Features

- ✅ Configurable action name/text
- ✅ Customizable height and width dimensions
- ✅ Accessible keyboard navigation support (Enter and Space keys)
- ✅ Orange and black themed design sections
- ✅ Click and keyboard event handling
- ✅ ARIA accessibility attributes
- ✅ Flexible positioning (no absolute positioning)
- ✅ Hover animations and visual feedback
- ✅ Responsive text sizing based on component size

## Usage

### Basic Usage

```tsx
import { CallActionComponent } from "./components/home";

function MyComponent() {
  const handleActionClick = (actionName: string) => {
    console.log(`Action clicked: ${actionName}`);
    // Add your custom logic here
  };

  return (
    <CallActionComponent
      actionName="Get Started"
      onActionClick={handleActionClick}
    />
  );
}
```

### Advanced Usage

```tsx
import { CallActionComponent } from "./components/home";

function MyComponent() {
  const handleActionClick = (actionName: string) => {
    // Custom logic: navigation, analytics, etc.
    if (actionName === "Learn More") {
      // Navigate to learn more page
    } else if (actionName === "Contact") {
      // Open contact modal
    }
  };

  return (
    <div>
      {/* Large call-to-action button */}
      <CallActionComponent
        actionName="Learn More"
        height={70}
        width={300}
        onActionClick={handleActionClick}
      />

      {/* Small contact button */}
      <CallActionComponent
        actionName="Contact"
        height={40}
        width={150}
        onActionClick={handleActionClick}
      />
    </div>
  );
}
```

## Props

| Prop            | Type                           | Default         | Description                                                  |
| --------------- | ------------------------------ | --------------- | ------------------------------------------------------------ |
| `actionName`    | `string`                       | `'Get Started'` | The action name/text to display in the overlay               |
| `height`        | `number`                       | `50`            | Height of the overlay component in pixels                    |
| `width`         | `number`                       | `200`           | Width of the overlay component in pixels                     |
| `onActionClick` | `(actionName: string) => void` | `undefined`     | Event handler when the action button is clicked or activated |

## Accessibility

The component is fully accessible with:

- **Keyboard Navigation**: Supports Enter and Space key activation
- **ARIA Labels**: Proper aria-label attributes for screen readers
- **Focus Management**: Visual focus indicators
- **Semantic HTML**: Uses proper button role and tabindex

## Styling

The component uses CSS custom properties (CSS variables) for theming:

- `--primary-orange`: Orange background color for the arrow section
- `--black`: Black background color for the text section

These are defined in your global CSS:

```css
:root {
  --primary-orange: #dd3c08;
  --black: #000000;
}
```

## Responsive Behavior

The component automatically adjusts text size based on its height:

- **Small** (30px-40px height): 0.8rem font size
- **Medium** (50px height): 0.9rem font size (default)
- **Large** (60px-70px height): 1rem font size
- **Extra Large** (80px+ height): 1.1rem font size

## Animation & Interaction

- **Hover Effect**: Component lifts up (translateY) with shadow
- **Active State**: Component returns to normal position
- **Focus State**: Orange outline for accessibility
- **Haptic Feedback**: Vibrates on mobile devices when clicked

## Browser Support

- Modern browsers with CSS custom properties support
- Touch devices with haptic feedback capability
- Screen readers and assistive technologies

## Examples

Check `CallActionExample.tsx` for comprehensive usage examples showing different sizes and configurations.
