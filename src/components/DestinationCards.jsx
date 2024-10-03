
const CardsSection = () => {
    return (
        <section className="flex absolute bottom-2 left-1/2 transform -translate-x-1/2  p-2  rounded-lg h-screen  items-end">
        {/* 1ère Card: Online Booking */}
        <div className="bg-blue-600 text-white p-4 rounded-3xl shadow-lg w-[200px] h-[250px] text-center">
        <h3 className="text-xl font-bold">Online Booking</h3>
    <img
      src="/avion-re.png"
      alt="Online Booking"
      className="mx-auto mb-4 w-full h-[200px] object-cover rounded-lg"
    />
  </div>
  
        <div className="flex p-6  shadow-lg items-center rounded-2xl gap-4 bg-white bg-opacity-50">
        {/* 2ème Card: Europe */}
        <div className=" text-gray-800 p-4 rounded-lg shadow-lg w-[150px] h-[170px] text-center">
          <img
            src="/fleche-re.png"
            alt="Destination Icon"
            className="mx-auto mb-4 w-[30px] h-[30px]"
          />
          <h3 className="text-l font-bold">Europe</h3>
          <button className="mt-2 text-indigo-600 font-bold">Ta destination</button>
        </div>
  
        {/* 3ème Card: Enregistrement */}
        <div className="bg-indigo-200 text-gray-800 p-4 rounded-lg shadow-lg w-[150px] h-[170px] text-center  flex-col">
          <img
            src="/enregistrer-re.png"
            alt="Enregistrement Icon"
            className="mx-auto mb-4 w-[30px] h-[30px]"
          />
          <h3 className="text-l font-bold">Enregistrement</h3>
          <button className="mt-2 text-indigo-600 font-bold">Ajouter une date</button>
        </div>
  
        {/* 4ème Card: Vérifier */}
        <div className="bg-green-100 text-gray-800 p-4 rounded-lg shadow-lg w-[150px] h-[170px] text-center">
          <img
            src="/enregistrer-re.png"
            alt="Vérifier Icon"
            className="mx-auto mb-4 w-[30px] h-[30px]"
          />
          <h3 className="text-l font-bold">Vérification</h3>
          <button className="mt-2 text-indigo-600 font-bold">Ajouter une date</button>
        </div>
  
        {/* 5ème Card: Voyageurs */}
        <div className="bg-pink-100 text-gray-800 p-4 rounded-lg shadow-lg w-[150px] h-[170px] text-center">
          <img
            src="/profile1-re.png"
            alt="Voyageurs Icon"
            className="mx-auto mb-4 w-[30px] h-[30px]"
          />
          <h3 className="text-l font-bold">Voyageurs</h3>
          <button className="mt-2 text-indigo-600 font-bold">Ajouter un invité</button>
        </div>
        </div>
      </section>
    );
  };
  
  export default CardsSection;