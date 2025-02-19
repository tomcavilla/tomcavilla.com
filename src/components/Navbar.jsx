const Navbar = () => {
    return (
      <nav className="flex justify-between items-center p-6 shadow-md bg-stone-50">
        <a href="../"><h1 className="font-bold navtext">TOM CAVILLA</h1></a>
        <div className="space-x-6">
          <a href="/gallery/" className="hover:underline">Gallery</a>
          <a href="/events/" className="hover:underline">Events</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;