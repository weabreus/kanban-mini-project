import { InformationCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const navigation = [
  { name: "Boards", href: "/", icon: Squares2X2Icon, current: true },
  { name: "About", href: "/about", icon: InformationCircleIcon, current: false },
  // { name: "Popular", href: "#", icon: FireIcon, current: false },
  // { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  // { name: "Trending", href: "#", icon: ArrowTrendingUpIcon, current: false },
];


const footerNavigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/weabreus/kanban-mini-project",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Layout({ children, setOpen }) {
  return (
    <>
      <div className="min-h-full">
        <Navbar navigation={navigation} setOpen={setOpen}/>
        <div className="pt-10 pb-[88px] h-[calc(100vh-56px)]">
          <div className="w-full sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
            <Sidebar navigation={navigation} />
            <main className="lg:col-span-10 xl:col-span-10">{children} <Outlet/></main>
          </div>
        </div>
        <Footer footerNavigation={footerNavigation} />
      </div>
    </>
  );
}
