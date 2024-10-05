import React from 'react';
import ProfileCard from './components/ProfileCard';
import ProductCard from './components/ProductCard';
import Card from './components/Card'; 
import Header from './components/Header';

const products = [
    {
        name: 'Smartphone XYZ',
        description: 'El mejor smartphone del año con cámara de 108 MP y batería de larga duración.',
        image: require('./assets/smartphone.jpg'), 
    },
    {
        name: 'Laptop ABC',
        description: 'Laptop ultra ligera y potente con procesador i7 y 16GB de RAM.',
        image: require('./assets/laptop.jpg'), 
    },
    {
        name: 'Auriculares Inalámbricos',
        description: 'Sonido premium y cancelación de ruido para una experiencia auditiva inigualable.',
        image: require('./assets/auriculares.jpg'), 
    },
];

function App() {
    return (
        <div className="App">
            <Header />
            <section className="products-section my-6 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-black">Nuestros Productos de Tecnología</h2>
                <p className="text-md text-black mt-2 mb-4">Descubre lo último en gadgets y dispositivos innovadores.</p>
                <div className="flex flex-wrap justify-center">
                    <ProfileCard />
                    {products.map((product, index) => (
                        <ProductCard 
                            key={index}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                        />
                    ))}
                    <Card /> { }
                </div>
            </section>
        </div>
    );
}

export default App;
