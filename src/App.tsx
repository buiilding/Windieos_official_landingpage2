import { motion } from 'motion/react';
import { 
  Terminal, 
  MonitorCheck, 
  Cpu, 
  Globe, 
  HardDrive, 
  Mic, 
  MessageSquare,
  Activity,
  Github,
  BookOpen,
  MessageCircle,
  Download,
  ChevronRight
} from 'lucide-react';
import { process } from 'process'; // Mocking purely so it doesn't break if unused, but we omit it
import { LINKS } from './config/links';

// OS Icons as raw SVGs to avoid dependency alignment issues and ensure pixel perfection
const WindowsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.59 11.597h8.219V3.136L2.59 4.25v7.347zm8.219 8.218V12.4h-8.22v7.347l8.22 1.115v-1.047zm.771-16.74v8.522h10.05v-9.98l-10.05 1.458zm10.05 17.58v-10h-10.05v8.522l10.05 1.478z"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.148 13.916c-.035-1.905 1.547-2.825 1.62-2.868-1.055-1.54-2.696-1.748-3.29-1.777-1.39-.14-2.716.82-3.424.82-.708 0-1.802-.8-2.966-.777-1.516.02-2.915.88-3.693 2.248-1.583 2.766-.405 6.85 1.137 9.07 1.01 1.47 2.19 3.12 3.79 3.06 1.53-.06 2.1-.99 3.96-.99 1.84 0 2.37.99 3.96.96 1.62-.03 2.66-1.5 3.63-2.97 1.14-1.65 1.6-3.25 1.63-3.34-.04-.02-3.13-1.19-3.16-4.22h.001zM14.93 6.32c.84-1.02 1.41-2.44 1.25-3.86-1.22.05-2.69.81-3.56 1.84-.77.91-1.42 2.36-1.23 3.75 1.36.1 2.7-.68 3.54-1.73z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 0C7.03 0 3.012 4.417 3.012 9s0 6 .419 6L3 24l5.4-3.61c1.2.3 2.3.6 3.61.6 4.982 0 9-4.417 9-9s-4.018-9-9-9zm0 18.01a7.712 7.712 0 0 1-3.085-.63L6 19.38l.261-2.25c-.719-1.28-1.111-2.73-1.111-4.29-1.02-3.64 2.87-7.23 6.86-7.23 3.985 0 7.23 3.245 7.23 7.23 0 3.981-3.245 7.17-7.23 7.17z"/>
  </svg>
);

// Background Wind Motif Effect
const FlowBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute w-[200vw] h-full opacity-20 left-1/2 -translate-x-1/2 top-0" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
        <motion.path 
          d="M-200 400C200 400, 400 300, 600 400C800 500, 1000 400, 1400 400" 
          stroke="var(--color-windie-blue)" 
          strokeWidth="1" 
          fill="none" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path 
          d="M-200 450C200 450, 400 350, 600 450C800 550, 1000 450, 1400 450" 
          stroke="var(--color-windie-pale)" 
          strokeWidth="0.5" 
          fill="none" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-windie-black text-white font-sans selection:bg-windie-blue selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-windie-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Fallback text logo if banner.png is missing from the nav */}
            <span className="font-display font-black text-xl tracking-tighter">
              WINDIE<span className="text-windie-blue">OS</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
            <a href={LINKS.resources.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={LINKS.resources.docs} className="hover:text-white transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Docs
            </a>
            <a href={LINKS.resources.discord} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Discord
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        <FlowBackground />

        {/* Hero Section */}
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* NOTE: User should upload their `windieos-banner.png` to the /public directory for this to render correctly */}
            <div className="relative mb-8 w-full max-w-2xl h-32 md:h-48 flex items-center justify-center">
               <img 
                 src="/windieos-banner.png" 
                 alt="WindieOS" 
                 className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,122,255,0.2)]"
                 onError={(e) => {
                   // Fallback purely CSS logo if the image isn't configured yet
                   e.currentTarget.style.display = 'none';
                   document.getElementById('fallback-logo')!.style.display = 'flex';
                 }}
               />
               {/* Visual fallback if image is missing */}
               <div id="fallback-logo" className="hidden flex-col items-center justify-center w-full">
                  <h1 className="font-display font-black text-6xl md:text-8xl tracking-tight uppercase">
                    WINDIE<span className="text-windie-blue">OS</span>
                  </h1>
                  <svg className="w-64 md:w-96 h-8 text-windie-pale mt-2" viewBox="0 0 400 40" fill="none">
                    <path d="M0 20C100 20, 150 0, 200 20C250 40, 300 20, 400 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M20 25C120 25, 170 5, 220 25C270 45, 320 25, 400 25" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none"/>
                  </svg>
               </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight tracking-tight mb-6">
              The desktop layer for personal AI agents.
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Download Windie, talk to the pill, and let your agent use your desktop: screen, browser, terminal, files, and memory.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
              <a 
                href="#download"
                className="group relative flex items-center gap-3 bg-windie-blue hover:bg-windie-blue-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-blue-sm hover:glow-blue w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download WindieOS
                </span>
              </a>
              
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a href={LINKS.resources.github} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-windie-gray hover:bg-windie-gray-light border border-white/10 text-white px-6 py-4 rounded-xl font-medium transition-all">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href={LINKS.resources.docs} className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-windie-gray hover:bg-windie-gray-light border border-white/10 text-white px-6 py-4 rounded-xl font-medium transition-all">
                  <BookOpen className="w-5 h-5" />
                  Docs
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Feature Points Grid */}
        <section className="relative w-full max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-white mb-2">OS-Level Capabilities</h3>
            <div className="h-1 w-12 bg-windie-blue rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<MessageSquare className="w-6 h-6 text-windie-pale" />}
              title="Floating Desktop Pill"
              desc="A persistent, minimal chat UI that lives above your windows, ready whenever you need it."
              className="lg:col-span-2"
            />
            <FeatureCard 
              icon={<MonitorCheck className="w-6 h-6 text-windie-blue" />}
              title="Screen-Aware Help"
              desc="Windie sees what you see. Ask questions about your active windows and displayed content."
            />
            <FeatureCard 
              icon={<Activity className="w-6 h-6 text-windie-pale" />}
              title="Live Tool Progress"
              desc="Watch exactly what your agent is doing in real-time. Full transparency into tool execution."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6 text-windie-blue" />}
              title="True Computer-Use"
              desc="Bring your own model. Let your agent control the mouse and keyboard to complete complex tasks."
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6 text-windie-pale" />}
              title="Dedicated Browser Profile"
              desc="A sandboxed environment for your agent to browse safely without messing with your active sessions."
            />
            <FeatureCard 
              icon={<HardDrive className="w-6 h-6 text-windie-blue" />}
              title="Terminal, Files, Memory"
              desc="Execute commands, read local files, and build a persistent memory graph of your preferences."
              className="lg:col-span-2"
            />
            <FeatureCard 
              icon={<Mic className="w-6 h-6 text-windie-pale" />}
              title='Voice Flow "Hey Jarvis"'
              desc="Completely hands-free interaction. Wake word detection to initiate agent workflows instantly."
              className="lg:col-span-4 md:col-span-2"
            />
          </div>
        </section>

        {/* Downloads Section */}
        <section id="download" className="relative w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h3 className="font-display text-4xl font-bold text-white mb-4">Install WindieOS</h3>
            <p className="text-zinc-400 max-w-xl mx-auto">Get the native application for your operating system. Fully packaged and ready to connect to your preferred AI models.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Windows */}
            <div className="bg-windie-gray border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-windie-blue/50 transition-colors group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <WindowsIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Windows</h4>
              <p className="text-sm text-zinc-500 mb-8">Windows 10 / 11 (64-bit)</p>
              
              <a href={LINKS.download.windows} className="w-full bg-white/10 hover:bg-windie-blue hover:text-white text-zinc-300 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Download .exe
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* macOS */}
            <div className="bg-windie-gray border border-windie-blue/30 relative rounded-2xl p-8 flex flex-col items-center text-center hover:border-windie-blue glow-blue-sm transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 bg-windie-blue text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              
              <div className="w-16 h-16 bg-windie-blue/10 text-windie-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AppleIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">macOS</h4>
              <p className="text-sm text-zinc-500 mb-8">Apple Silicon & Intel</p>
              
              <a href={LINKS.download.macos} className="w-full bg-windie-blue hover:bg-windie-blue-hover text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Download .dmg
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Linux */}
            <div className="bg-windie-gray border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-windie-blue/50 transition-colors group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LinuxIcon />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Linux</h4>
              <p className="text-sm text-zinc-500 mb-8">AppImage, Deb, RPM</p>
              
              <div className="w-full space-y-2">
                <a href={LINKS.download.linuxAppImage} className="w-full bg-white/10 hover:bg-white/20 text-zinc-300 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  Download AppImage
                </a>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <a href={LINKS.download.linuxDeb} className="bg-transparent border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white py-2 rounded-lg transition-colors">
                    .deb
                  </a>
                  <a href={LINKS.download.linuxRpm} className="bg-transparent border border-white/10 hover:border-white/30 text-zinc-400 hover:text-white py-2 rounded-lg transition-colors">
                    .rpm
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href={LINKS.download.allReleases} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-windie-pale hover:text-white text-sm font-medium transition-colors">
              <Terminal className="w-4 h-4" />
              View all architectures and releases on GitHub
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-windie-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-black text-2xl tracking-tighter mb-4 block">
              WINDIE<span className="text-windie-blue">OS</span>
            </span>
            <p className="text-zinc-500 text-sm max-w-sm">
              The desktop layer for personal AI agents. <br />
              Screen, browser, terminal, files, memory and voice.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-4">Resources</h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href={LINKS.resources.docs} className="hover:text-windie-pale transition-colors">Documentation</a></li>
              <li><a href={LINKS.resources.github} className="hover:text-windie-pale transition-colors">GitHub Repository</a></li>
              <li><a href={LINKS.resources.releases} className="hover:text-windie-pale transition-colors">Releases & Changelog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-4">Community</h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href={LINKS.resources.discord} className="hover:text-windie-pale transition-colors">Join the Discord</a></li>
              <li>
                <a href={`${LINKS.resources.github}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="hover:text-windie-pale transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} WindieOS. Open source software.</p>
          <div className="mt-4 md:mt-0">
            <a href="https://github.com/buiilding" target="_blank" rel="noreferrer" className="hover:text-zinc-400 transition-colors">Built by @buiilding</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for Bento grid style features
function FeatureCard({ icon, title, desc, className = "" }: { icon: React.ReactNode, title: string, desc: string, className?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
      className={`bg-windie-gray border border-white/5 p-6 rounded-2xl flex flex-col transition-all ${className}`}
    >
      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-zinc-400 text-sm leading-relaxed block mt-auto">{desc}</p>
    </motion.div>
  );
}
