import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Index from "./pages/Index";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ContactMe from "./pages/ContactMe";
import "./App.css";

const queryClient = new QueryClient();

// Create an AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={650} // Updated timeout to match the new transition duration
        classNames="page-transition"
        unmountOnExit
        mountOnEnter
      >
        <div className="page-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactMe />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="app-container">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-[#343a40] text-white overflow-hidden">
              <AnimatedRoutes />
            </main>
          </div>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
