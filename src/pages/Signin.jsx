import { useForm } from 'react-hook-form';

export default function SigninPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <main>
      <div className=" bg-[url('/logo2.jpg')] bg-cover bg-center h-screen flex items-center justify-center min-h-screen py-4">
        <section className="min-h-screen flex flex-col items-center justify-center py-4">
          <div className="w-full max-w-lg">
            <div className="bg-[rgba(44,62,80,0.7)] shadow-md rounded-lg p-6">
              <div className="text-center py-4">
                <h5 className="text-xl font-semibold text-red-700">Connectez-vous 👋🏾</h5>
                <p className="text-sm text-indigo-400">Entrer votre Mail & Mot de Passe pour vous connectez!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium text-white">E-Mail</label>
                  <div className="relative mt-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-700">@</span>
                    <input
                      type="text"
                      id="email"
                      className={`pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full bg-transparent ${errors.email ? 'border-red-500' : ''}
                      }`}
                      {...register('email', { required: 'S\'il vous plaît Veuillez saisir votre Mail!' })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="password" className="block text-sm font-medium text-white">Mot de Passe</label>
                  <input
                    type="password"
                    id="password"
                    className={` bg-transparent border border-gray-300 p-2 pl-3 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 w-full ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                    {...register('password', { required: 'S\'il vous plaît Veuillez saisir votre Mot de Passe!' })}
                  />
                  {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className=" h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    {...register('remember')}
                  />
                  <label htmlFor="rememberMe" className=" ml-2 block text-sm text-indigo-400">Se Souvenir de moi</label>
                </div>

                <div>
                  <button
                    className="w-full bg-red-700 text-black py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    type="submit"
                  >
                    Se connecter
                  </button>
                </div>

                <div className="text-sm text-white">
                  <p>Vous avez déjà un compte? <a href="/signup" className="text-indigo-400 hover:text-indigo-500">Créer un compte</a></p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
