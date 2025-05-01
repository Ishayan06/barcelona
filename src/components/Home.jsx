import React from "react";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-blue-950 items-center justify-start p-4 pt-36 text-white">
      {/* MSN image at the top */}
      <div className="team mb-10">
        <img
          src="https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_342/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jmzbywbdrvse831jx5.jpg"
          alt="Msn"
          className="h-[50vh] w-[80vw] rounded-xl shadow-2xl"
        />
      </div>
      {/* Club Motto Section */}
      <div className="mb-10 bg-gradient-to-r from-blue-700 via-purple-700 to-red-600 w-full p-4 text-center">
        <h1 className="text-5xl font-bold text-yellow-300">Més que un club</h1>
        <p className="text-gray-300 mt-2">“More than a club” – A symbol of Catalan culture and pride.</p>
      </div>

      {/* Jersey Section */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-white pb-2">Kits 2024/25</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Home Kit */}
          <div className="bg-blue-900 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://xclusivejerseys.com/cdn/shop/files/Screenshot_2025-02-25_at_15.25.08.png?v=1740489981&width=1445"
              alt="Home Kit"
              className="mx-auto h-64 object-contain"
            />
            <h3 className="text-xl font-semibold mt-4">Home Kit</h3>
          </div>

          {/* Away Kit */}
          <div className="bg-blue-900 p-4 rounded-lg shadow-lg text-center">
            <img
              src="https://xclusivejerseys.com/cdn/shop/files/Screenshot_2025-03-20_at_14.47.08.png?v=1742474859"
              alt="Away Kit"
              className="mx-auto h-64 object-contain"
            />
            <h3 className="text-xl font-semibold mt-4">Away Kit</h3>
          </div>
        </div>
      </div>
    {/* home ground */}
    {/* <div className="ground m-5  mt-10 mb-10 ">
      <img className="relative" src="https://www.fcbarcelona.com/photo-resources/2025/03/26/41a94f44-166d-4b27-9dcc-62f1f4bbabd5/Render-Skywalk.jpg?width=3200&height=1400" alt="" />
      <div className=" desc absolute text-yellow-400 font-extrabold text-7xl flex flex-col"><span>RETURN TO THE</span><span>SPOTIFY CAMP NOU</span> <span>AS A VIP</span> </div>
    </div> */}
    <div className="relative w-full max-w-8xl m-5 mt-10 mb-10">
  <img
    className="w-full h-[500px] object-cover rounded-xl"
    src="https://www.fcbarcelona.com/photo-resources/2025/03/26/41a94f44-166d-4b27-9dcc-62f1f4bbabd5/Render-Skywalk.jpg?width=3200&height=1400"
    alt="Spotify Camp Nou"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-yellow-400 font-extrabold text-4xl md:text-6xl text-center bg-black bg-opacity-30 rounded-xl">
    <span>RETURN TO THE</span>
    <span>SPOTIFY CAMP NOU</span>
    <span>AS A VIP</span>
  </div>
</div>

      {/* Coach Section */}
      <div className="w-full max-w-4xl mb-16 bg-blue-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img
          src="https://www.fcbarcelona.com/photo-resources/2024/07/03/03eb12a9-196a-41ca-9046-f1db441c0549/flick_-ok.jpg?width=640&height=400"
          alt="Coach Hansi Flick"
          className="h-48 w-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">Coach: Hansi Flick</h2>
          <p className="text-sm text-gray-300">
          C Barcelona and Hansi Flick have reached an agreement for the German to become men’s first team football coach until 30 June 2026. The new coach has signed a contract at the Club’s offices accompanied by FC Barcelona president Joan Laporta; first vice president responsible for the sporting area, Rafa Yuste and the Club’s sporting director, Anderson Luís de Souza, Deco. 
          </p>
        </div>
      </div>

      {/* News Section with Images */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-white pb-2">
          Latest Barcelona News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 object-cover">
          {[
            {
              title: "Barcelona vs Inter Milan, Champions League: Team News, Match Preview",
              desc: "Date/Time: Wednesday, April 30, 2025, 9pm CET...",
              img: "https://www.aljazeera.com/wp-content/uploads/2025/04/AFP__20250426__43M27W8__v1__HighRes__FblEspCupBarcelonaRealMadrid-1745707335.jpg?resize=770%2C513&quality=80",
            },
            {
              title: "Barcelona Targets Brazilian Wonderkid",
              desc: "Barça eyes Estevão Willian from Palmeiras as part of its youth rebuild.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwhVEps3xZ-R7GFuojFCnwuQc4su6ltss1g&s",
            },
            {
              title: "Injury Update: De Jong Out",
              desc: "Frenkie de Jong sidelined for the rest of the season due to an ankle injury.",
              img: "https://assets.goal.com/images/v3/blt6cde9f1be5ebb711/GOAL_-_Blank_WEB_-_Facebook_-_2024-04-22T130338.496.png?auto=webp&format=pjpg&width=3840&quality=60",
            },
          ].map((news, idx) => (
            <div key={idx} className="bg-blue-900 rounded-lg overflow-hidden shadow-md">
              <img src={news.img} alt={news.title} className="w-full h-48 object-fill" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-16 mb-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.instagram.com/fcbarcelona"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/FCBarcelona"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://www.fcbarcelona.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Official Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
