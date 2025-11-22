# CodeForge Design Guidelines

## Design Approach
**Reference-Based**: Inspired by premium developer tools (Linear, GitHub, Vercel) combined with cyberpunk aesthetics. Focus on creating a cutting-edge, professional code generation platform with stunning visual feedback.

## Color Palette
- Deep space blacks: `#0a0e27`
- Electric blues: `#00d4ff`, `#0066ff`
- Neon purples: `#b24bf3`, `#8b5cf6`
- Accent cyan: `#00ffff` for highlights
- Use subtle gradients throughout
- Glassmorphism with frosted panels and backdrop blur

## Typography
- **Primary Font**: Inter (via Google Fonts CDN)
- **Code Font**: JetBrains Mono
- **Hierarchy**: 
  - Hero: text-5xl to text-7xl with gradient effects
  - Section Headers: text-3xl to text-4xl
  - Body: text-base to text-lg
  - Code: text-sm with monospace

## Layout System
**Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, m-8, gap-6)

**Application Layout** (Post-login):
- Three-panel resizable layout: Chat (30%) | File Explorer (25%) | Code Editor (45%)
- Resizable handles appear on hover with glow effect
- Smooth panel transitions with momentum physics

**Landing Page Layout**:
- Full-width hero with animated particle network background
- Feature cards in 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Generous vertical spacing (py-20 to py-32)

## Core Components

### Navigation
- Fixed top navbar with glassmorphic background
- Logo on left, navigation links center, CTA button right
- Backdrop blur effect: `backdrop-blur-lg bg-opacity-80`

### Hero Section
- Animated particle network background (dots with connecting lines)
- Large gradient text: "Build. Generate. Deploy."
- 3D floating code snippets with rotation
- Glowing primary CTA with pulse animation
- Height: 80vh with centered content

### Chat Interface
- Chainlit-style message bubbles
- **User messages**: Slide from right, glowing border on send
- **AI responses**: Typewriter effect, code blocks with syntax highlighting
- **Typing indicator**: 3 bouncing dots
- Avatar with breathing glow effect

### AI Agent Visualization
- 4 circular agent indicators at top of chat
- Light up sequentially: Perception → Reasoning → Synthesis → UX Bridge
- Animated connecting lines between agents
- Pulse effect on active agent, checkmark on completion

### File Explorer
- Tree view with smooth dropdown animations
- Custom file icons with pulse on creation
- Hover highlights with gradient sweep
- Active file: glowing left border with accent color
- Search bar with glowing focus state

### Code Editor
- Monaco editor integration
- **File tabs**: Smooth slide animation, active tab indicator line
- **Toolbar**: Floating action buttons with glassmorphism
- **Copy button**: Shows checkmark animation on success
- Line numbers glow on hover

### Progress Feedback
- Horizontal timeline showing generation steps
- Current step illuminated with animated gradient
- ETA countdown with smooth number transitions
- Matrix-style falling code effect in background on completion

### Buttons
- Primary: Gradient background with glow, ripple on click
- Secondary: Outlined with hover glow
- Scale slightly on hover (scale-105)
- Loading state: spinning gradient border

### Cards
- Glassmorphic background with border glow
- 3D tilt on hover using transform
- Icon animations (SVG paths drawing in)
- Each card unique accent color from palette

## Animations
- **Entry**: Fade + scale for elements, stagger for lists
- **Transitions**: 300-500ms with ease-out
- **Hover**: Subtle glow intensification, slight scale
- **Loading**: Orbiting particles or gradient spinner
- **Success**: Confetti burst or checkmark reveal
- **Typewriter**: 30-50ms per character for AI responses

## Icons
**Library**: Heroicons via CDN (outline for most, solid for emphasis)

## Images
**Hero Background**: Animated particle network (canvas-based) with gradient mesh overlay
**Feature Illustrations**: Abstract 3D code snippets, floating UI mockups showing generated projects

## Accessibility
- Maintain WCAG AA contrast ratios
- Smooth focus indicators with glow effects
- Keyboard navigation for all interactive elements
- ARIA labels for icons and status indicators

## Responsive Behavior
- **Mobile**: Bottom sheet for file explorer, stacked chat + editor
- **Tablet**: Side-by-side 2-panel layout
- **Desktop**: Full 3-panel resizable layout
- Smooth breakpoint transitions, no jarring jumps