import React from 'react';

//      Reusable Card Component
// here to decliyer to titile , img , description .. 
const Card = ({ title, description, badge, image }) => {
  return (
    <div className="w-80 p-1 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-green-400 hover:-translate-y-1 transition-transform duration-200 ease-in-out cursor-pointer shadow-sm hover:shadow-md">

      {/* Inner Card Content  and set back ground color and border color */}
    <div className="bg-white rounded-lg   p-5 h-full flex flex-col    gap-4">
        {/* Top Section: Badge & Title */}
        <div className="flex flex-col gap-2">
          <span className="self-start bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
          <h3 className="text-xl font-bold text-gray-900 m-0">
{title}
</h3>
</div>
{/* Middle Section: Image (Card ke bich mein pic) */}
        <div className="w-full h-40 overflow-hidden rounded-md shadow-sm">
<img
src={image}
alt={title}
className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
/>
</div>
        {/* Bottom Section: Description */}
        <p className="text-gray-600 text-sm leading-relaxed m-0">
{description}
        </p>
      </div>
    </div>
  );
};
//  parent Component 
export default function App() {
  // Array of objects me 'image' add kiya hia 
  const cardData = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Learn to build user interfaces using React, Vue, or Angular.",
      badge: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60" // React/Frontend placeholder
    },
    // second card hai ye 
    {
      id: 2,
      title: "Backend Development",
      description: "Create robust APIs and manage databases with Node.js or Python.",
      badge: "Node.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60" // Code/Backend placeholder
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design intuitive and beautiful user experiences using Figma.",
      badge: "Figma",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60" // Design placeholder
    }
,
    {
      id: 4,
      title: "Python Data scince ",
      description: "Python is a versatile, high-level programming language known for its simple, English-like syntax and readability.",
      badge: "Python",
      image: "https://st2.depositphotos.com/4021139/5815/i/450/depositphotos_58156479-stock-photo-python-concept.jpg" // Design placeholder
    }
// card no 5. java few information 
    ,
    {
      id: 5,
      title: " object-oriented language",
      description: "Java is a highly popular, high-level, object-oriented programming language and computing platform",
      badge: "JAVA",
      image: "https://as1.ftcdn.net/v2/jpg/03/22/70/80/1000_F_322708042_uPQMkUFxMUDnoMatCDb0h3re4wnFlVeV.jpg" // Design placeholder
    }, 
    {
      id: 6,
      title: " Hypertext Preprocessor",
      description: "A free, open-source, server-side scripting language designed primarily for web development. ",
      badge: "P H P ",
      image: "https://images.unsplash.com/photo-1599507593548-0187ac4043c6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Design placeholder
    }
    , 
    {
      id: 7,
      title: "HyperText Markup Language",
      description: "HTML is not a programming language; it is a markup language.",
      badge: "H T M L",
      image: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg" // Design placeholder
    },
    {
      id: 8,
      title: "High-level language",
      description: "Speed and Efficiency: One of the fastest languages available.",
      badge: "C++",
      image: "https://images5.alphacoders.com/430/thumb-1920-430890.jpg" // Design placeholder
    },
    {
      id: 9,
      title: " Popular NoSQL document database.",
      description: "A database is an organized collection of data used to power apps. Think of MongoDB as a giant, digital filing cabinet",
      badge: "MongoDB",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*BmLKgrU_qFtakYsB.png" // Design placeholder
    }
    ,

  ];
  // use justify center and gap between to card 8px 
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            badge={item.badge}
            image={item.image} /* Image prop pass ki gayi hai */
          />
        ))}
      </div>
    </div>
  );
}