import { useCart } from '../context/CartContext';

const Card = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className='overflow-hidden bg-white border-solid border-2 border-gray-300 hover:border-cyan-500 rounded-2xl m-auto shadow-md hover:shadow-gray-500'> 
            <div className='w-full p-5'>
                <div className='w-full'>
                    <img src={product.img} alt={product.img} className='w-full' />
                </div>
                <div className='w-full pt-3 pb-3'>
                    <h1 className='text-center font-bold text-xl'>{product.title}</h1>
                </div>
                <div className='w-full text-center'>⭐⭐⭐⭐⭐ {product.rating}</div>
                <div className='flex justify-evenly pt-5 pb-5'>
                    <div>
                        <p className='text-sm text-red-500 font-bold line-through'>{product.priceOld}</p>
                    </div>
                    <div>
                        <p className='text-sm text-green-500 font-bold'>{product.discount}</p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center pl-3 pr-3 pt-3 pb-3 bg-cyan-500">
                    <p className='text-xl font-bold'>{product.price}</p>
                    <button onClick={() => addToCart(product)}>
                        <div className='text-xl font-bold'>{product.icon}</div>
                    </button>
                </div>
            </div>
        </div>
    );
};
  
export default Card;