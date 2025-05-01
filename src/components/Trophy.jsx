import React from 'react';

function Trophy() {
  const barcelonaTrophies = [
    {
      id: 1,
      name: "La Liga",
      image: "https://i.pinimg.com/736x/0a/02/6a/0a026aceebd401654819620361eb6c96.jpg",
      years: "1928–29, 1944–45, 1947–48, 1948–49, 1951–52, 1952–53, 1958–59, 1959–60, 1973–74, 1984–85, 1990–91, 1991–92, 1992–93, 1993–94, 1997–98, 1998–99, 2004–05, 2005–06, 2008–09, 2009–10, 2010–11, 2012–13, 2014–15, 2015–16, 2017–18, 2018–19, 2022–23"
    },
    {
      id: 2,
      name: "Copa del Rey",
      image: "https://p.turbosquid.com/ts-thumb/pu/0Set6C/CusnJk8D/capturadepantalla20161006alas13.11.40/png/1475753172/1920x1080/fit_q87/3b6d97a288ff19321cd379b0deb8d26cd671c729/capturadepantalla20161006alas13.11.40.jpg",
      years: "1909–10, 1911–12, 1912–13, 1919–20, 1921–22, 1924–25, 1925–26, 1927–28, 1941–42, 1950–51, 1951–52, 1952–53, 1956–57, 1958–59, 1962–63, 1967–68, 1970–71, 1977–78, 1980–81, 1982–83, 1987–88, 1989–90, 1996–97, 1997–98, 2008–09, 2011–12, 2014–15, 2015–16, 2016–17, 2017–18, 2020–21"
    },
    {
      id: 3,
      name: "Supercopa de España",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY4ZzAAorWMiF7vM8bjdFDeIX58r3HCZgyA&s",
      years: "1983, 1991, 1992, 1994, 1996, 2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018, 2022–23"
    },
    {
      id: 4,
      name: "UEFA Champions League",
      image: "https://editorial.uefa.com/resources/0296-1d2ac4aeddcc-a3c557b692c9-1000/fbl-eur-c1-draw.jpeg",
      years: "1991–92, 2005–06, 2008–09, 2010–11, 2014–15"
    },
    {
      id: 5,
      name: "UEFA Cup Winners' Cup",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Cup_Winners_Cup_Trophy.png",
      years: "1978–79, 1981–82, 1988–89, 1996–97"
    },
    {
      id: 6,
      name: "UEFA Super Cup",
      image: "https://editorial.uefa.com/resources/0250-0c50f1415505-b66c7bb7b61a-1000/the_uefa_super_cup_trophy.jpeg",
      years: "1992, 1997, 2009, 2011, 2015"
    },
    {
      id: 7,
      name: "FIFA Club World Cup",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FIFA_Club_World_cup_trophy.jpg/640px-FIFA_Club_World_cup_trophy.jpg",
      years: "2009, 2011, 2015"
    },
    {
      id: 8,
      name: "Inter-Cities Fairs Cup",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Col%C2%B7leccions_del_Museu_del_FC_Barcelona_14.jpg/1200px-Col%C2%B7leccions_del_Museu_del_FC_Barcelona_14.jpg",
      years: "1955–58, 1958–60, 1965–66"
    },
    {
      id: 9,
      name: "Copa Eva Duarte",
      image: "https://www.valenciacf.com/public/Image/2024/1/7oidmn8277o8fyxrcqfqiplktowtogtkcwyt7f0yvnfcf2fio6qb00zmqv053slo.jpg",
      years: "1945, 1948, 1952"
    },
    
    {
      id: 11,
      name: "Catalan Super Cup",
      image: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/10/17/2df809e7-c846-4959-8b6d-1d121cca4a89/Supercopa-Catalunya.jpg",
      years: "2014, 2016, 2018"
    },
    
  ];
  
  return (
    <div className="bg-blue-950 flex flex-col w-full min-h-screen text-white">

      <div className="img flex justify-center ">
        <img className=' mt-32 h-[50vh] w-[80vw]' src="https://www.fcbarcelona.com/photo-resources/2023/05/20/fd8f3ab0-de0a-46f3-b458-889c4678adcf/2022-05-20_FCBvsREIALSOCIETAT_139.JPG?width=3200&height=1400" alt="" />
      </div>
      {/* Yellow options below navbar */}
      <div className="w-full mt-3  bg-yellow-500 py-4 px-6 flex flex-col items-center flex-wrap justify-center gap-4 shadow-inner">
      <span className='bg-red-600 p-2 w-[20vw] flex justify-center text-2xl font-bold rounded-md pl-10 pr-10'>Honours</span> 
      <span className='w-[40vw] flex justify-center items-center'>Very few clubs anywhere in the world have won so many titles. The club's greatest pride and joy remain the five European Cup titles won in Wembley (1992, 2011), Paris (2006), Rome (2009), Berlin (2015) the FIFA Club World Cup (2009, 2011 and 2015)</span>
      </div>
      <div className="w-[50vw] mx-auto  p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
  {barcelonaTrophies.map((trophy) => (
    <div key={trophy.id} className="bg-yellow-500 text-black rounded-xl shadow-lg overflow-hidden">
      <img
        src={trophy.image}
        alt={trophy.name}
        className="w-full h-40 object-contain bg-white p-2"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{trophy.name}</h2>
        <p className="text-sm overflow-y-auto max-h-32">{trophy.years}</p>
      </div>
    </div>
  ))}
</div>

       
    </div>
  );
}

export default Trophy;
