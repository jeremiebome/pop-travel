import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Validation des mots de passe
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
  };

  return (
    <main className=" bg-[url('/logo2.jpg')] bg-cover bg-center h-screen flex items-center justify-center min-h-screen py-4">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-[rgba(44,62,80,0.7)] shadow-md rounded-lg p-6">
          <div className="text-center pb-4">
            <h5 className="text-xl font-bold text-red-700">Créer un compte</h5>
            <p className="text-indigo-400 text-sm">Entrez vos informations personnelles pour créer un compte</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-white">Votre Nom</label>
              <input
                type="text"
                name="nom"
                id="nom"
                className=" bg-transparent border mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.nom}
                onChange={handleChange}
                required
              />
              
            </div>
            
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium text-white">Votre Prénom</label>
              <input
                type="text"
                name="prenom"
                id="prenom"
                className=" bg-transparent border mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
              
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Votre Email</label>
              <div className="relative mt-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-700">@</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" bg-transparent border pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">Mot de Passe</label>
              <input
                type="password"
                name="password"
                id="password"
                className=" bg-transparent border mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
              
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirmer votre mot de passe</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className=" bg-transparent border mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              
              <label className="text-sm text-white mt-2">
                Je suis d&apos;accord et <a href="" className="text-indigo-400 hover:underline">j&apos;accepte les conditions !</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-700 text-black font-medium rounded-md hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-500"
              >
                Créer un Compte
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-white">
                Vous avez déjà un compte? <Link to="/signin" className="text-indigo-400 hover:underline">S&apos;identifier</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
