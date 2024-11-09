import Image from "next/image";
export default function CV() {
  return (
    <div className="bg-gray-900 text-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Profile Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">ENGR.MEHNAZAR SYED</h1>
            <p className="text-teal-400 text-xl">Electronics Engineer (ELECTRO/9153)</p>
            <p className="text-teal-400 text-l">Full stack Developer</p>
          </div>
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-teal-400">
            <Image
              src="/images/image.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
              width={400}
              height={200}
            />
          </div>
        </div>

        {/* Profile Description */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-2xl font-semibold">Profile:</h2>
          <p className="mt-2 text-sm leading-relaxed text-justify">
          Welcome to my portfolio! I am an accomplished Electronics Engineer with a Master's degree from Mehran University of Engineering & Technology, Jamshoro, and a Full Stack Developer with expertise in modern web and app development. With over a decade of experience in engineering and a passion for technology, I blend analytical problem-solving skills with advanced coding abilities to deliver innovative solutions.
          </p>
        </div>
        {/* About Me Description */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-2xl font-semibold">About me:</h2>
          <p className="mt-2 text-sm leading-relaxed text-justify">
          I completed my bachelor's in Electronics Engineering in 2007 and earned my master's degree in 2017 with a strong academic record (CGPA 3.57). My engineering background has equipped me with a deep understanding of electronic systems, circuit design, and complex problem-solving.

          </p>
        </div>

        {/* Education Section */}
        
        <div className="mb-8">
          <h2 className="text-teal-400 text-2xl font-semibold">Education:</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold">MEHRAN UET, JAMSHORO</h3>
              <p className="text-sm">Master Degree Graduate (2017)</p>
              <p className="text-xs">
                Masters in Electronics System Engineering with CGPA:3.57 
              </p>
            </div>
            <div>
              <h3 className="font-semibold">MEHRAN UET, JAMSHORO</h3>
              <p className="text-sm">Bachelor Degree Graduate (2007)</p>
              <p className="text-xs">
                B.E, Electonics Engineering with 1st Div 
              </p>
            </div>
            <div>
              <h3 className="font-semibold">GIAIC</h3>
              <p className="text-sm">GIAIC  (2023)</p>
              <p className="text-xs">
               Currently studying in Governor Sindh Initiative for IT  
              </p>
            </div>
            <div>
              <h3 className=" text-teal-400 text-2xl font-semibold mt-4 p-2">Other Certifications:</h3>
              <li> Wireless Local Loop</li>
              <li> Auto CAD</li>
              <li> Primavera Project Planner</li>
               </div>
          </div>
        </div>

        {/* Languages and Hobbies */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="text-teal-400 text-2xl font-semibold">Languages:</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>English</li>
              <li>Urdu</li>
              <li>Sindhi</li>
            </ul>
          </div>
          <div>
            <h2 className="text-teal-400 text-2xl font-semibold">Hobbies:</h2>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Travel</li>
              <li>Gaming</li>
              <li>Gyming</li>
              <li>Music</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-teal-400 text-2xl font-semibold">Skills:</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Typescript</li>
            <li>Javascript</li>
            <li>TailwindCSS</li>              
            <li>HTML & CSS</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Matlab</li>
            <li>Electronics Workbench</li>

          </ul>
        </div>

        {/* Job Experience */}
        <div>
          <h2 className="text-teal-400 text-2xl font-semibold">
            Publications:
          </h2>
          <div className="mt-4 space-y-4">
            <div>
               <p className="text-xs">
                <li>Lab Book of "Embedded System Design" for Under graduate and Post Graduate Levels.
                  ISBN: 978-969-8680-31-2</li>
                  <li> Lab Book of "Microprocessor Based System Design" for Post graduate Level. ISBN:978-969-8680-31-2</li> 
              </p>
            </div>
            
            <div>
          <h2 className="text-teal-400 text-2xl font-semibold">Projects:</h2>
              
              <h2 className="text-teal-400 text-sm text-2x1 font-semibold mt-4 space-y-2" >"Efficient way of controlling Electricity theft And Improving Distribution system"</h2>
              <p className="text-xs text-justify mt-4	">
                Electricity plays an essential role in developing country's economical order. Unfortunately, Pakistan is currently facing the endemic energy crises and the major part of it results electricity theft and inappropriate management of the resources. This work proposes efficient method based on current controllers to reduce non technical losses incurred by the customers. The purpose of this work is to protect the electricity supply system from illegal use by using an automatic current controlled circuit installed at the pole.The circuit can be tuned to different set points from user to user according to the need and adjust the electricity bill accordingly.The proposed system can significantly improve the distribution system by reducing the electric power wastage and also introduces an accurate billing method. 
              </p>
            </div>
            <div>
              <h2 className="text-teal-400 text-sm text-2x1 font-semibold mt-4 space-y-2">"online ATM Machine system"</h2>
              <p className="text-sm mt-4"></p>
              <p className="text-xs">
                An ATM Machine system is deployed using Nextjs and TailwindCSS. The prototype is designed to keep balance record of a particular customer. who can check balance, withdraw amount and can get the fast cash.    
              <a href="https://mehnazar.github.io/online-ATM-Machine/" className="text-blue-600 visited:text-purple-600">ATM link</a>
              </p>
            </div>
            <div>
              <h2 className="text-teal-400 text-sm text-2x1 font-semibold mt-4 space-y-2">"Educational Pedia"</h2>
              <p className="text-sm mt-4"></p>
              <p className="text-xs">
                Educational Pedia is a website designed using TailwindCSS and Nextjs.The website is designed for educational purpose.    
                <a href="https://assignment-no-3-3en2g9ihm-mehnazar-umairs-projects.vercel.app/" className="text-blue-600 visited:text-purple-600 ...">link</a>

              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-xs">
            Phone: +92-346-3863672 | Email: <a href="s.mehnazar@yahoo.com">s.mehnazar@yahoo.com</a> |<a href=" Github:github:https://github.com/Mehnazar">Github:github:https://github.com/Mehnazar</a> | Linkedin:<a href="linkedin:linkedin.com/in/mehnazar-umair-2972ba2ba">Mehnazar Umair</a>
           | Address: Nazimabad, Khi,Sindh
          </p>
        </div>
      </div>
    </div>
  );
}
