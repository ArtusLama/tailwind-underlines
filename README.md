# @artusdev/tailwind-underlines

Advanced animated underline utilities for Tailwind CSS v4.

## ✨ Features

- 🎨 **Fully Customizable** - Control thickness, duration, timing, offset, and color
- 🔄 **Bidirectional Control** - Independent in/out animation directions
- 🎯 **Pure CSS** - Zero JavaScript dependencies
- 🌳 **Tree-Shakeable** - Only includes classes you use
- ✨ **Tailwind v4 Ready** - Native support for arbitrary values and theme tokens
- ♿ **Accessible** - Works with all Tailwind variants (focus, group-hover, etc.)

## 📦 Installation

```bash
npm install @artusdev/tailwind-underlines
```

## 🚀 Quick Start

**1. Import the plugin in your CSS:**

```css
@import "@artusdev/tailwind-underlines";
```

**2. Add to your HTML:**

```html
<a class="underline-base hover:underline-expanded"> Hover me </a>
```

That's it! You now have a beautiful animated underline.

## 📖 How It Works

The plugin uses a two-class pattern:

| Class                          | Purpose                                                                     |
| ------------------------------ | --------------------------------------------------------------------------- |
| `underline-base`               | Sets up the underline container, variables, and collapsed state             |
| `[variant]:underline-expanded` | Triggers the underline animation (e.g., `hover:`, `focus:`, `group-hover:`) |

## 🎨 Customization

### Direction

#### Simple (Bidirectional)

Same direction for both enter and exit animations:

| Class              | Effect                 |
| ------------------ | ---------------------- |
| `underline-left`   | Left → Right (default) |
| `underline-right`  | Right → Left           |
| `underline-center` | Center → Outward       |

```html
<a class="underline-base underline-center hover:underline-expanded"> Center expand </a>
```

#### Advanced (Independent Control)

Control entry and exit directions separately - 9 possible combinations:

| Enter From | Exit To | Classes                                   |
| ---------- | ------- | ----------------------------------------- |
| Left       | Right   | `underline-in-left underline-out-right`   |
| Center     | Left    | `underline-in-center underline-out-left`  |
| Right      | Center  | `underline-in-right underline-out-center` |

```html
<a class="underline-base underline-in-left underline-out-right hover:underline-expanded">
    Enter left, exit right
</a>
```

### Thickness

| Type             | Example                        | Output        |
| ---------------- | ------------------------------ | ------------- |
| Theme tokens     | `underline-thickness-thin`     | 1px           |
|                  | `underline-thickness-normal`   | 2px (default) |
|                  | `underline-thickness-thick`    | 4px           |
| Bare integers    | `underline-thickness-5`        | 5px           |
| Arbitrary values | `underline-thickness-[0.5rem]` | 0.5rem        |

### Duration

| Type             | Example                     | Output          |
| ---------------- | --------------------------- | --------------- |
| Theme tokens     | `underline-duration-fast`   | 150ms           |
|                  | `underline-duration-normal` | 250ms (default) |
|                  | `underline-duration-slow`   | 500ms           |
| Bare integers    | `underline-duration-1000`   | 1000ms          |
| Arbitrary values | `underline-duration-[1.5s]` | 1.5s            |

### Timing Functions

| Type          | Example                                        | Effect                |
| ------------- | ---------------------------------------------- | --------------------- |
| Theme presets | `underline-timing-linear`                      | Linear                |
|               | `underline-timing-ease`                        | Ease                  |
|               | `underline-timing-ease-in`                     | Ease-in               |
|               | `underline-timing-ease-out`                    | Ease-out              |
|               | `underline-timing-ease-in-out`                 | Ease-in-out (default) |
|               | `underline-timing-bounce`                      | Elastic bounce        |
|               | `underline-timing-spring`                      | Spring overshoot      |
| Arbitrary     | `underline-timing-[cubic-bezier(0.4,0,0.2,1)]` | Custom curve          |

### Offset

Control vertical positioning. **Note:** Positive = down, negative = up.

| Pattern            | Example                      | Result        |
| ------------------ | ---------------------------- | ------------- |
| Bare integers      | `underline-offset-3`         | 3px (down)    |
| Arbitrary          | `underline-offset-[0.5rem]`  | 0.5rem (down) |
| Negative prefix    | `-underline-offset-3`        | -3px (up)     |
| Negative arbitrary | `-underline-offset-[0.5rem]` | -0.5rem (up)  |

### Color

Supports all tailwindcss colors, your custom colors and arbitrary color values (defaults to `currentColor`):

```html
<a class="underline-base underline-color-[#3b82f6] hover:underline-expanded"> Custom color </a>
```

## 💡 Examples

### Basic

```html
<a class="underline-base hover:underline-expanded"> Hover me </a>
```

### Centered Fast Animation

```html
<a class="underline-base underline-center underline-duration-fast hover:underline-expanded">
    Quick center expand
</a>
```

### Button with Bounce Effect

```html
<button
    class="underline-base underline-thickness-thick underline-timing-bounce active:underline-expanded"
>
    Click me
</button>
```

### Complex Styling

```html
<a
    class="underline-base underline-thickness-[8px] underline-duration-[2s]
          underline-color-[#3b82f6] underline-in-left underline-out-right
          hover:underline-expanded"
>
    Fully customized
</a>
```

### Navigation Menu

```html
<nav>
    <a class="group" href="/about">
        <span class="underline-base underline-center group-hover:underline-expanded"> About </span>
    </a>
</nav>
```

### Accessible Focus State

```html
<a class="underline-base focus:underline-expanded focus-visible:outline-2"> Tab to focus </a>
```

## 🎨 Extending the Theme

Add custom tokens in your CSS:

```css
@theme {
    --underline-thickness-hairline: 0.5px;
    --underline-duration-ultra-fast: 75ms;
    --underline-timing-elastic: cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

Use them like built-in tokens:

```html
<a
    class="underline-base underline-thickness-hairline underline-duration-ultra-fast underline-timing-elastic hover:underline-expanded"
>
    Custom theme
</a>
```

## 🔧 API Reference

### Utilities

| Utility                 | Description            | Default        |
| ----------------------- | ---------------------- | -------------- |
| `underline-base`        | Base setup (required)  | -              |
| `underline-expanded`    | Shows the underline    | -              |
| `underline-left`        | Left to right          | ✓              |
| `underline-right`       | Right to left          | -              |
| `underline-center`      | Center outward         | -              |
| `underline-in-*`        | Entry direction        | `left`         |
| `underline-out-*`       | Exit direction         | `left`         |
| `underline-thickness-*` | Thickness              | 2px (normal)   |
| `underline-duration-*`  | Animation duration     | 250ms (normal) |
| `underline-timing-*`    | Timing function        | ease-in-out    |
| `underline-offset-*`    | Vertical offset (down) | 0px            |
| `-underline-offset-*`   | Vertical offset (up)   | -              |
| `underline-color-*`     | Color                  | currentColor   |

### CSS Variables

You can also control underlines via CSS custom properties:

```css
.my-link {
    --underline-thickness: 3px;
    --underline-duration: 500ms;
    --underline-timing: cubic-bezier(0.4, 0, 0.2, 1);
    --underline-offset: 2px; /* positive = down, negative = up */
    --underline-color: #3b82f6;
    --underline-origin-in: left;
    --underline-origin-out: right;
}
```

## ⚙️ How It Works

The plugin uses CSS transforms for GPU-accelerated animations:

1. `underline-base` creates a pseudo-element (::after) scaled to 0 width
2. `underline-expanded` scales it to full width (scaleX(1))
3. Transform origin controls the animation direction
4. CSS custom properties enable runtime customization

**Result:** Buttery-smooth 60fps animations with zero JavaScript.

## 🌐 Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Custom Properties required
- ✅ CSS Transforms required

## 📄 License

This project is licensed under the [MIT License](LICENSE).
