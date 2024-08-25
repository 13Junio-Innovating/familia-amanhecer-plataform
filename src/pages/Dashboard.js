import React from 'react';

const Dashboard = () => {
  const videos = [
    { title: "Video 1", link: "https://www.youtube.com/watch?v=L4T4j8J5sUY&list=RDL4T4j8J5sUY&start_radio=1" },
    { title: "Video 2", link: "https://link-to-video-2.com" },
    { title: "Video 3", link: "https://link-to-video-1.com" },
    { title: "Video 4", link: "https://link-to-video-2.com" },
    { title: "Video 5", link: "https://link-to-video-1.com" },
    { title: "Video 6", link: "https://link-to-video-2.com" },
    { title: "Video 7", link: "https://link-to-video-1.com" },
    { title: "Video 8", link: "https://link-to-video-2.com" },
    { title: "Video 9", link: "https://link-to-video-1.com" },
    { title: "Video 10", link: "https://link-to-video-2.com" },
    { title: "Video 11", link: "https://link-to-video-1.com" },
    { title: "Video 12", link: "https://link-to-video-2.com" },
    // Adicione mais vídeos aqui
  ];

  const books = [
    { title: "Book 1", link: "https://elivros.love/livro/baixar-livro-trabalhando-com-a-inteligencia-emocional-daniel-goleman-em-epub-pdf-mobi-ou-ler-online" },
    { title: "Book 2", link: "https://link-to-book-2.com" },
    { title: "Book 3", link: "https://link-to-book-1.com" },
    { title: "Book 4", link: "https://link-to-book-2.com" },
    { title: "Book 5", link: "https://link-to-book-1.com" },
    { title: "Book 6", link: "https://link-to-book-2.com" },
    { title: "Book 7", link: "https://link-to-book-1.com" },
    { title: "Book 8", link: "https://link-to-book-2.com" },
    { title: "Book 9", link: "https://link-to-book-1.com" },
    { title: "Book 10", link: "https://link-to-book-2.com" },
    { title: "Book 11", link: "https://link-to-book-1.com" },
    { title: "Book 12", link: "https://link-to-book-2.com" },
    // Adicione mais livros aqui
  ];

  return (
    <div className="dashboard-container p-8 my-24">
      {/* Seção de Vídeos */}
      <div className="videos-section mb-10">
        <h2 className="text-2xl font-bold mb-4">Vídeos do Amanhecer</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="card bg-white bg-opacity-20 p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{video.title}</h3>
                <p className="text-sm text-gray-600">Clique para assistir</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Livros */}
      <div className="books-section">
        <h2 className="text-2xl font-bold mb-4">Livros de Referência</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="card bg-white bg-opacity-20 p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">Clique para ler</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
