const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">TOM CAVILLA</h1>
        <div className="space-x-6">
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#events" className="hover:underline">Events</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;