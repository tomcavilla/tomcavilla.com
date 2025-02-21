const Gallery = () => {
    return (
      <section id="gallery" className="py-16 bg-stone-50">
        <h2 className="text-3xl font-bold text-center">GALLERIES</h2>
        <div className="mt-6 ml-6 mr-6 flex justify-center space-x-4">
          <a href="/gallery/"><img src="https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0" alt="Bristol " className="rounded-lg shadow-md"/></a>
          <a href="/gallery/"><img src="https://lh3.googleusercontent.com/pw/AP1GczPqqmiNx6ACK_85SruQXYgnn1ch0MlP2xeqiXUaB_IqjlGA7KeGy5KYLo9u3jWSKlSQ6MSdj15NNunIq5hMYIyf6nPX2plTZJinizaRHjCNsXQb04dySAsfY6bAbZtsufPEFps7Me1Kql0QVP7AIfdo=w872-h581-s-no-gm?authuser=0" alt="Gallery 2" className="rounded-lg shadow-md"/></a>
          <a href="/gallery/"><img src="https://lh3.googleusercontent.com/pw/AP1GczPGXUFJFeg97iaYD3RSoe91NaFMH9W-rWjNPQWA34KxCIoZdLtpc_w63sqzOQL8-gm_QA5jDoReWvIUW2A7kPWkCGwGnDEpo4tGFvn05_w9fvBMEj7Z9t7ysz9tG4u0vYD8tv5s-AgjFgALz26DhcVq=w872-h581-s-no-gm?authuser=0" alt="Dartmoor" className="rounded-lg shadow-md"/></a>
        </div>
      </section>
    );
  };
  
  export default Gallery;