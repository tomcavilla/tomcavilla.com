const Gallery = () => {
    return (
      <section id="gallery" className="py-16 bg-stone-50">
        <h2 className="text-3xl font-bold text-center">GALLERIES</h2>
        <div className="mt-6 flex justify-center space-x-4">
          <img src="https://via.placeholder.com/200" alt="Gallery 1" className="rounded-lg shadow-md"/>
          <img src="https://via.placeholder.com/200" alt="Gallery 2" className="rounded-lg shadow-md"/>
          <img src="https://via.placeholder.com/200" alt="Gallery 3" className="rounded-lg shadow-md"/>
        </div>
      </section>
    );
  };
  
  export default Gallery;