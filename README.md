# Perplexity AI Clone

A pixel-perfect clone of Perplexity AI's chat interface built with Next.js and modern web technologies.

## 🚀 Features

- **Landing Page**: Clean hero section with search bar that routes to chat
- **Chat Interface**: Multi-turn conversation with streaming AI responses
- **Streaming Responses**: Real-time streaming with progressive loading states
- **Source Citations**: Display of sources with proper formatting
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Pixel-Perfect UI**: Matches Perplexity AI's exact design and animations

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TailwindCSS** for styling
- **shadcn/ui** for UI components
- **TanStack Query** for state management
- **TypeScript** for type safety
- **Lucide React** for icons

## 📡 API Integration

Uses the mock streaming API endpoint: `https://mock-askperplexity.piyushhhxyz.deno.net`

- Progressive loading states ("Searching..." → "Finding results...")
- Source listings with crawling states
- Word-by-word answer streaming
- Source citations at the end

## 🎯 Core Functionality

- ✅ User can type and send multiple questions (5-6 messages in one chat)
- ✅ Each question triggers the streaming API
- ✅ Display streaming response exactly like Perplexity:
  - Initial loading state
  - Progressive plan updates
  - URL listings with crawling states
  - Word-by-word answer streaming
  - Source citations at the end
- ✅ New chat button to reset conversation
- ✅ Question scroll behavior - questions move to top of viewport
- ✅ Auto-scroll functionality
- ✅ Smooth animations and transitions

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd perplexity-ai-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
perplexity-ai-clone/
├── app/                    # Next.js App Router pages
│   ├── search/            # Chat interface page
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx          # Landing page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── chat-interface.tsx # Main chat component
│   └── providers.tsx     # TanStack Query provider
├── lib/                  # Utility functions
│   ├── api.ts           # Streaming API integration
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 🎬 Key Features Demonstrated

### Landing Page
- Clean, minimalist design matching Perplexity
- Hero section with compelling copy
- Search bar with smooth animations
- Suggested questions for quick start
- Proper routing to chat interface

### Chat Interface
- Multi-turn conversations
- Real-time streaming responses
- Progressive loading indicators
- Source citations with external links
- Auto-scroll behavior
- Question positioning at top of viewport
- New chat functionality
- Responsive design for all screen sizes

### Streaming Implementation
- Proper parsing of streaming JSON responses
- Progressive state updates (search states → sources → answer)
- Word-by-word answer rendering
- Error handling for failed requests
- Smooth animations throughout the process

## 🎨 Design System

The application uses a custom design system based on shadcn/ui with:
- CSS variables for consistent theming
- Tailwind utility classes for rapid development
- Custom components matching Perplexity's exact styling
- Smooth transitions and animations
- Proper accessibility considerations

## 📱 Responsive Design

- Desktop-first approach with mobile optimizations
- Responsive grid layouts for source citations
- Adaptive typography scaling
- Touch-friendly interface elements
- Optimized for various screen sizes

## 🔧 Development Notes

- Built with TypeScript for type safety
- Uses Next.js App Router for modern routing
- Implements proper error boundaries
- Follows React best practices
- Optimized for performance and SEO

## 📄 License

This project is for educational and demonstration purposes only.
