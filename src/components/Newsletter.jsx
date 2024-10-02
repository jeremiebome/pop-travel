
const Newsletter = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Inscrivez-vous à notre Newsletter</h2>
            <p className="mb-4">Recevez les dernières nouvelles et mises à jour directement dans votre boîte de réception.</p>
            <form className="flex flex-col">
                <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="p-2 mb-4 border border-gray-300 rounded"
                    required 
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                    S&apos;inscrire
                </button>
            </form>
        </div>
    );
};

export default Newsletter;