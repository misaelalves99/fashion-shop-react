import { useFavorites } from '../hooks/useFavorites';
import { FaTrashAlt } from 'react-icons/fa';

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou nenhum produto aos favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden group hover:shadow-lg transition"
            >
              {/* Imagem */}
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-sm text-yellow-500 mt-1">⭐⭐⭐⭐⭐ {product.rating}</p>
                <p className="text-green-600 font-medium mt-2">{product.discount}</p>
                <p className="text-gray-800 font-bold text-lg mt-1">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>

              {/* Remover dos favoritos */}
              <button
                onClick={() => removeFromFavorites(product.id)}
                className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full shadow-md hover:bg-red-700 transition"
                title="Remover dos favoritos"
              >
                <FaTrashAlt className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
