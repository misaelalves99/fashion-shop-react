import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-cyan-500 text-center mb-6">
                Meu Carrinho
            </h1>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="text-gray-500 text-lg">
                        Seu carrinho está vazio. Adicione produtos para continuar!
                    </p>
                    <img
                        src="https://via.placeholder.com/300x200?text=Carrinho+Vazio"
                        alt="Carrinho vazio"
                        className="mt-6 rounded-lg shadow-md"
                    />
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex items-center py-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                                />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-lg font-semibold text-gray-700">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        {item.description || 'Sem descrição disponível.'}
                                    </p>
                                    <p className="text-cyan-500 font-bold mt-2">
                                        {item.price}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:bg-red-100 rounded-lg p-2 transition"
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 flex justify-between items-center">
                        <p className="text-lg font-semibold text-gray-700">
                            Total:{" "}
                            <span className="text-cyan-500">
                                R${cartItems.reduce((total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.')), 0).toFixed(2)}
                            </span>
                        </p>
                        <button
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
