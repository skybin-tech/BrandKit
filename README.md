# @skybin-tech/brandkit

A React component library providing brand-compliant social login/signup buttons for 20 platforms. Provides **UI only** — you wire up your own auth logic.

## Features

- 20 platform buttons with accurate brand colors, fonts, and logos
- Light and dark themes for every button
- Three modes: `signin`, `signup`, `continue`
- Two shapes: `square`, `rounded`
- Configurable `width` / `height`
- Inline SVG icons — no external image assets
- Full TypeScript support
- Tree-shakeable ESM build (`sideEffects: false`)
- Zero runtime dependencies beyond React and styled-components

## Installation

```bash
npm install @skybin-tech/brandkit
# or
yarn add @skybin-tech/brandkit
```

**Peer dependencies** (must be installed separately):

```bash
npm install react react-dom styled-components
```

## Quick Start

```tsx
import { GoogleButton, GitHubButton } from '@skybin-tech/brandkit';

function LoginPage() {
  return (
    <>
      <GoogleButton onClick={() => signInWithGoogle()} />
      <GitHubButton dark onClick={() => signInWithGitHub()} />
    </>
  );
}
```

## Available Buttons

| Component | Platform | Light default | Dark default |
|---|---|---|---|
| `GoogleButton` | Google | White + border | Dark gray bg |
| `GitHubButton` | GitHub | White + border | Charcoal bg |
| `FacebookButton` | Facebook | Facebook Blue bg | Dark bg + border |
| `LinkedInButton` | LinkedIn | White + border | LinkedIn Blue bg |
| `AppleButton` | Apple | White + border | Black bg |
| `MicrosoftButton` | Microsoft | White + border | Dark bg |
| `TwitterButton` | Twitter / X | White + border | Near-black bg |
| `DiscordButton` | Discord | Blurple bg | Dark gray + border |
| `SlackButton` | Slack | White + border | Aubergine bg |
| `SpotifyButton` | Spotify | Green bg + black text | Dark bg + green text |
| `RedditButton` | Reddit | Reddit Orange bg | Dark bg + orange text |
| `TwitchButton` | Twitch | Purple bg | Black bg + purple text |
| `GitLabButton` | GitLab | Orange bg | Dark bg + orange text |
| `BitbucketButton` | Bitbucket | Atlassian Blue bg | Dark bg + blue text |
| `AmazonButton` | Amazon | White + border | Dark navy bg |
| `TikTokButton` | TikTok | Black bg | Dark bg + border |
| `PayPalButton` | PayPal | Navy bg | Dark navy bg |
| `DropboxButton` | Dropbox | Dropbox Blue bg | Dark bg + blue text |
| `ZoomButton` | Zoom | Zoom Blue bg | Dark bg + blue text |
| `SteamButton` | Steam | Dark navy bg | Darker navy bg |

## Props

All buttons share the same props interface:

| Prop | Type | Default | Description |
|---|---|---|---|
| `mode` | `'signin' \| 'signup' \| 'continue'` | `'signin'` | Button label variant |
| `dark` | `boolean` | varies by platform | Toggle dark theme |
| `shape` | `'square' \| 'rounded'` | `'square'` | Border radius style |
| `width` | `string \| number` | `'auto'` | Button width (number = px) |
| `height` | `string \| number` | `'40px'` | Button height (number = px) |
| `onClick` | `() => void` | — | Click handler |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | — | Custom CSS class |

### Platform defaults for `dark`

Most buttons default to `dark={false}`. The following default to `dark={true}` because their canonical brand button is dark-colored:

- `AppleButton` — black is Apple's specified button color
- `LinkedInButton` — blue-filled is LinkedIn's primary OAuth button
- `TwitterButton` — near-black matches X's own design
- `TikTokButton` — black is TikTok's specified button color
- `SteamButton` — dark navy is Steam's brand color

## Usage Examples

### Mode variants

```tsx
<GoogleButton mode="signin" />
<GoogleButton mode="signup" />
<GoogleButton mode="continue" />
```

### Dark / light themes

```tsx
// Light (default for most)
<GitHubButton dark={false} />

// Dark
<GitHubButton dark={true} />

// Apple defaults to dark — explicitly use light
<AppleButton dark={false} />
```

### Shapes

```tsx
<GoogleButton shape="square" />   // default, 4px radius
<GoogleButton shape="rounded" />  // pill shape
```

### Custom size

```tsx
<FacebookButton width={280} height={48} />
<FacebookButton width="100%" />
```

### Disabled state

```tsx
<SlackButton disabled />
```

### With custom class

```tsx
<DiscordButton className="my-login-btn" />
```

## Tree Shaking

The package ships with `"sideEffects": false` and an `exports` field pointing to the ESM build. Modern bundlers (webpack 5+, Rollup, Vite) will automatically tree-shake unused buttons.

```tsx
// Only GoogleButton will be included in your bundle
import { GoogleButton } from '@skybin-tech/brandkit';
```

## Brand Compliance Notes

Each button follows the official brand guidelines for its platform:

- **Google** — Roboto font, exact colors from Google Identity spec, hover shadow per spec
- **GitHub** — GitHub Primer colors (`#24292f` / `#ffffff`)
- **Facebook** — Meta blue `#1877f2`; dark mode uses Meta's dark UI palette
- **LinkedIn** — Blue filled (`#0a66c2`) is the canonical OAuth button
- **Apple** — Black/white only per Apple's Human Interface Guidelines, `-apple-system` font stack
- **Microsoft** — 4-color logo with exact brand quadrant colors; Segoe UI font
- **Twitter / X** — Near-black `#0f1419` following current X design
- **Discord** — Blurple `#5865f2` on light; dark uses Discord's background palette
- **Slack** — White button is the official "Sign in with Slack" style; dark uses Slack aubergine `#4a154b`
- **Spotify** — **Black text on green** (brand rule); Circular/system font; pill shape default
- **Reddit** — Reddit orange `#ff4500`
- **Twitch** — Twitch purple `#9146ff`; dark uses Twitch Core Black `#0e0e10`
- **GitLab** — GitLab orange `#fc6d26`
- **Bitbucket** — Atlassian blue `#0052cc`
- **Amazon** — **White button** is the "Sign in with Amazon" spec; orange is accent only in dark mode
- **TikTok** — Black with white text; follows TikTok's login button guidelines
- **PayPal** — PayPal deep navy `#003087`
- **Dropbox** — Dropbox blue `#0061ff`
- **Zoom** — Zoom blue `#2d8cff`
- **Steam** — Valve/Steam dark palette

## Development

```bash
yarn start           # Storybook dev server (port 6006)
yarn dev             # Vite dev server for local preview
yarn build           # Build the library to dist/
yarn build-storybook # Build Storybook static site
yarn lint            # ESLint with auto-fix
yarn format          # Prettier formatting
```

## License

MIT — see [LICENSE](./LICENSE)
