

import Link from 'next/link';
<link rel="stylesheet" href="../../assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css"></link>;

const Header = () => {
  return (
    <header className="bg-slate-600 text-amber-500 shadow-black sticky top-0 z-10">
      <div className="border-amber-500 container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-amber-400 text-3xl font-extrabold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="#about" className="hover:text-dark-gray">About</Link></li>
            <li><Link href="#projects" className="hover:text-dark-gray">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-dark-gray">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
