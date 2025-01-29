// // // import React, { useState, useEffect } from 'react';
// // // // import MentalHealthInitiative from './MentalHealthInitiative';
// // // // import civi from '../images/civi-dep-logo.png';
// // // // import sat from '../images/satyarth.png';
// // // // import sld from '../images/SLD.jpg';

// // // interface Initiative {
// // //   text: string;
// // //   image: string;
// // //   link: string;
// // // }

// // // const initiatives: Initiative[] = [
// // //   {
// // //     text: "[italic] CiviDep[/italic] Cividep India is committed to worker's rights and corporate accountability. We partner with workers, collectives and other stakeholders to undertake in-depth research, awareness creation and stakeholder engagement. Our focus is on low wage workers in export-oriented sectors. Through our work we aim to safeguard worker's rights and change the way corporates work in global supply chains.",
// // //     image: "https://cividep.org/wp-content/uploads/2021/03/Cividep-Logo-2021-1.png",
// // //     link: "https://cividep.org/#:~:text=Cividep%20India%20is%20committed%20to,work%20in%20global%20supply%20chains.",
// // //   },
// // //   {
// // //     text: "[italic]Satyarthi[/italic] Best NGO for Children in India working against Child labour, Child Trafficking, Child Education, Child Sexual Abuse etc.",
// // //     image: "https://images.squarespace-cdn.com/content/v1/616ee054c1b1dd18a4243e55/9fd22b8d-c94c-43c2-9f20-b76f1c3f83fa/SLD+Jpg.jpg?format=1500w",
// // //     link: "https://satyarthi.org.in/",
// // //   },
// // //   {
// // //     text: "[italic]SLD India[/italic] SLD recognizes the significance of enhancing the skills and capabilities of workers and its own staff. As a result, there is a strong emphasis on engaging communities in a collaborative manner during capacity-building activities, with specific attention given to topics such as gender, leadership, labor laws, and addressing gender-based violence and harassment (GBVH).",
// // //     image: "https://satyarthi.org.in/wp-content/uploads/2018/12/logo-1.png",
// // //     link: "https://www.sld-india.org/",
// // //   },
// // // ];

// // // const backgroundColors: string[] = ["#e8dff5", "#fce1e4", "#daeaf6", "#fcf4dd", "#ddedea"];

// // // const Initiatives: React.FC = () => {
// // //   return (
// // //     <div className="initiatives-container" style={{ width: '100%' }}>
// // //       <h1>NGO</h1>
// // //       {initiatives.map((initiative, index) => (
// // //         <MentalHealthInitiative
// // //           key={index}
// // //           text={initiative.text}
// // //           image={initiative.image}
// // //           alt="NGO Logo"
// // //           link={initiative.link}
// // //           backgroundColor={backgroundColors[index % backgroundColors.length]}
// // //         />
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // interface Video {
// // //   id: string;
// // //   title: string;
// // //   thumbnail: string;
// // // }

// // // const CalmingVideosSlider: React.FC = () => {
// // //   const [videos, setVideos] = useState<Video[]>([]);

// // //   useEffect(() => {
// // //     const fetchVideos = async () => {
// // //       try {
// // //         const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
// // //         const playlistId = 'PL6Mvvu7LQp8KDQxjFroFUKtD85oDWoMbM';
// // //         const maxResults = 20;

// // //         const response = await fetch(
// // //           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
// // //         );

// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch videos');
// // //         }

// // //         const data = await response.json();
// // //         const videoItems: Video[] = data.items.map((item: any) => ({
// // //           id: item.snippet.resourceId.videoId,
// // //           title: item.snippet.title,
// // //           thumbnail: item.snippet.thumbnails.default.url,
// // //         }));

// // //         setVideos(videoItems);
// // //       } catch (error) {
// // //         console.error('Error fetching videos:', error);
// // //       }
// // //     };

// // //     fetchVideos();
// // //   }, []);

// // //   return (
// // //     <div className="Info-videos-slider">
// // //       <h2>Info Videos</h2>
// // //       <div className="video-list">
// // //         {videos.map(video => (
// // //           <div key={video.id} className="video-card" data-title={video.title}>
// // //             <iframe
// // //               loading="lazy"
// // //               width="500px"
// // //               height="300px"
// // //               src={`https://www.youtube.com/embed/${video.id}`}
// // //               frameBorder="0"
// // //               allowFullScreen
// // //               title={video.title}
// // //             ></iframe>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const CombinedComponent: React.FC = () => {
// // //   return (
// // //     <div>
// // //       <Initiatives />
// // //       <CalmingVideosSlider />
// // //     </div>
// // //   );
// // // };

// // // export default CombinedComponent;


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";

// // interface Initiative {
// //   text: string;
// //   image: string;
// //   link: string;
// // }

// // interface Video {
// //   id: string;
// //   title: string;
// //   thumbnail: string;
// // }

// // const initiatives: Initiative[] = [
// //    {
// //     text: "[italic] CiviDep[/italic] Cividep India is committed to worker's rights and corporate accountability. We partner with workers, collectives and other stakeholders to undertake in-depth research, awareness creation and stakeholder engagement. Our focus is on low wage workers in export-oriented sectors. Through our work we aim to safeguard worker's rights and change the way corporates work in global supply chains.",
// //     image: "https://cividep.org/wp-content/uploads/2021/03/Cividep-Logo-2021-1.png",
// //     link: "https://cividep.org/#:~:text=Cividep%20India%20is%20committed%20to,work%20in%20global%20supply%20chains.",
// //   },
// //   {
// //     text: "[italic]Satyarthi[/italic] Best NGO for Children in India working against Child labour, Child Trafficking, Child Education, Child Sexual Abuse etc.",
// //     image: "https://images.squarespace-cdn.com/content/v1/616ee054c1b1dd18a4243e55/9fd22b8d-c94c-43c2-9f20-b76f1c3f83fa/SLD+Jpg.jpg?format=1500w",
// //     link: "https://satyarthi.org.in/",
// //   },
// //   {
// //     text: "[italic]SLD India[/italic] SLD recognizes the significance of enhancing the skills and capabilities of workers and its own staff. As a result, there is a strong emphasis on engaging communities in a collaborative manner during capacity-building activities, with specific attention given to topics such as gender, leadership, labor laws, and addressing gender-based violence and harassment (GBVH).",
// //     image: "https://satyarthi.org.in/wp-content/uploads/2018/12/logo-1.png",
// //     link: "https://www.sld-india.org/",
// //   },
// // ];

// // const backgroundColors = ["#e8dff5", "#fce1e4", "#daeaf6", "#fcf4dd", "#ddedea"];

// // const MentalHealthInitiative: React.FC<Initiative & { backgroundColor: string }> = ({ text, image, link, backgroundColor }) => (
// //   <div className="grid-row" style={{ backgroundColor, width: "100%" }}>
// //     <div className="grid-text" style={{ fontSize: "18px", color: "#2a2450" }}>
// //       <a href={link} target="_blank" rel="noopener noreferrer">
// //         <strong>{text}</strong> 🔗
// //       </a>
// //     </div>
// //     <div className="grid-image">
// //       <a href={link} target="_blank" rel="noopener noreferrer">
// //         <Image src={image} alt={`Image of ${text}`} width={200} height={100} />
// //       </a>
// //     </div>
// //   </div>
// // );

// // const Initiatives: React.FC = () => (
// //   <div className="initiatives-container" style={{ width: "100%" }}>
// //     <h1>NGO</h1>
// //     {initiatives.map((initiative, index) => (
// //       <MentalHealthInitiative
// //         key={index}
// //         text={initiative.text}
// //         image={initiative.image}
// //         link={initiative.link}
// //         backgroundColor={backgroundColors[index % backgroundColors.length]}
// //       />
// //     ))}
// //   </div>
// // );

// // const CalmingVideosSlider: React.FC = () => {
// //   const [videos, setVideos] = useState<Video[]>([]);

// //   useEffect(() => {
// //     const fetchVideos = async () => {
// //       try {
// //         const apiKey = "AIzaSyDLAaURMjPq0ij7J3or2Q9HrcRSr1AMVQk";
// //         const playlistId = "PL6Mvvu7LQp8KDQxjFroFUKtD85oDWoMbM";
// //         const maxResults = 20;

// //         const response = await fetch(
// //           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
// //         );

// //         if (!response.ok) {
// //           throw new Error("Failed to fetch videos");
// //         }

// //         const data = await response.json();
// //         const videoItems = data.items.map((item: any) => ({
// //           id: item.snippet.resourceId.videoId,
// //           title: item.snippet.title,
// //           thumbnail: item.snippet.thumbnails.default.url,
// //         }));

// //         setVideos(videoItems);
// //       } catch (error) {
// //         console.error("Error fetching videos:", error);
// //       }
// //     };

// //     fetchVideos();
// //   }, []);

// //   if (!videos.length) {
// //     return <p>Loading videos...</p>;
// //   }

// //   return (
// //     <div className="Info-videos-slider">
// //       <h2>Info Videos</h2>
// //       <div className="video-list">
// //         {videos.map((video) => (
// //           <div key={video.id} className="video-card" data-title={video.title}>
// //             <iframe
// //               width="500px"
// //               height="300px"
// //               src={`https://www.youtube.com/embed/${video.id}`}
// //               frameBorder="0"
// //               allowFullScreen
// //               title={video.title}
// //             ></iframe>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const CombinedComponent: React.FC = () => (
// //   <div>
// //     <Initiatives />
// //     <CalmingVideosSlider />
// //   </div>
// // );

// // export default CombinedComponent;


// "use client";

// import React, { useEffect, useState, createContext, useContext } from "react";
// import Image from "next/image";

// // Define the Video type
// interface Video {
//   id: string;
//   title: string;
//   thumbnail: string;
// }

// // Define the Initiative type
// interface Initiative {
//   text: string;
//   image: string;
//   link: string;
// }

// // Define background colors
// const backgroundColors = ["#f0f4f8", "#e0f7fa", "#ffebee"];

// // Define sample initiatives data
// const initiatives: Initiative[] = [
//     {
//             text: "[italic] CiviDep[/italic] Cividep India is committed to worker's rights and corporate accountability. We partner with workers, collectives and other stakeholders to undertake in-depth research, awareness creation and stakeholder engagement. Our focus is on low wage workers in export-oriented sectors. Through our work we aim to safeguard worker's rights and change the way corporates work in global supply chains.",
//             image: "https://cividep.org/wp-content/uploads/2021/03/Cividep-Logo-2021-1.png",
//             link: "https://cividep.org/#:~:text=Cividep%20India%20is%20committed%20to,work%20in%20global%20supply%20chains.",
//           },
//           {
//             text: "[italic]Satyarthi[/italic] Best NGO for Children in India working against Child labour, Child Trafficking, Child Education, Child Sexual Abuse etc.",
//             image: "https://images.squarespace-cdn.com/content/v1/616ee054c1b1dd18a4243e55/9fd22b8d-c94c-43c2-9f20-b76f1c3f83fa/SLD+Jpg.jpg?format=1500w",
//             link: "https://satyarthi.org.in/",
//           },
//           {
//             text: "[italic]SLD India[/italic] SLD recognizes the significance of enhancing the skills and capabilities of workers and its own staff. As a result, there is a strong emphasis on engaging communities in a collaborative manner during capacity-building activities, with specific attention given to topics such as gender, leadership, labor laws, and addressing gender-based violence and harassment (GBVH).",
//             image: "https://satyarthi.org.in/wp-content/uploads/2018/12/logo-1.png",
//             link: "https://www.sld-india.org/",
//           },
// ];

// // Theme Context
// const ThemeContext = createContext({
//   theme: "system", // default theme
//   setTheme: (theme: string) => {},
// });




// const MentalHealthInitiative: React.FC<Initiative & { backgroundColor: string }> = ({ text, image, link, backgroundColor }) => (
//   <div 
//     className="card mb-4 shadow-lg" 
//     style={{ backgroundColor, width: "100%", borderRadius: "8px" }}
//   >
//     <div className="card-header" style={{ padding: "16px", fontWeight: "bold", fontSize: "18px" }}>
//       {text}
//     </div>
//     <div className="card-body" style={{ padding: "16px" }}>
//       <a href={link} target="_blank" rel="noopener noreferrer">
//         <Image src={image} alt={`Image of ${text}`} width={200} height={100} className="rounded-lg" />
//       </a>
//     </div>
//   </div>
// );

// const Initiatives: React.FC = () => (
//   <div className="initiatives-container mb-12">
//     <h1 className="text-3xl text-center font-bold mb-6">NGO Initiatives</h1>
//     {initiatives.map((initiative, index) => (
//       <MentalHealthInitiative
//         key={index}
//         text={initiative.text}
//         image={initiative.image}
//         link={initiative.link}
//         backgroundColor={backgroundColors[index % backgroundColors.length]}
//       />
//     ))}
//   </div>
// );

// const CalmingVideosSlider: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const apiKey = "AIzaSyDLAaURMjPq0ij7J3or2Q9HrcRSr1AMVQk";
//         const playlistId = "PL6Mvvu7LQp8KDQxjFroFUKtD85oDWoMbM";
//         const maxResults = 20;

//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch videos");
//         }

//         const data = await response.json();
//         const videoItems = data.items.map((item: any) => ({
//           id: item.snippet.resourceId.videoId,
//           title: item.snippet.title,
//           thumbnail: item.snippet.thumbnails.default.url,
//         }));

//         setVideos(videoItems);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (!videos.length) {
//     return <p>Loading videos...</p>;
//   }

//   return (
//     <div className="Info-videos-slider mt-8">
//       <h2 className="text-2xl font-bold text-center mb-4">Info Videos</h2>
//       <div className="video-list grid grid-cols-1 md:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <div key={video.id} className="video-card">
//             <iframe
//               width="100%"
//               height="200"
//               src={`https://www.youtube.com/embed/${video.id}`}
//               frameBorder="0"
//               allowFullScreen
//               title={video.title}
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const CombinedComponent: React.FC = () => {
//   const [theme, setTheme] = useState("system");

//   useEffect(() => {
//     // Set theme based on system preferences or default to light mode
//     const savedTheme = localStorage.getItem("theme") || "system";
//     setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     // Update theme in localStorage and apply theme class to document body
//     localStorage.setItem("theme", theme);
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <div className={`theme-${theme}`}>
//         {/* <ThemeSwitcher /> */}
//         <Initiatives />
//         <CalmingVideosSlider />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default CombinedComponent;
"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import Image from "next/image";

// Define the Video type
interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

// Define the Initiative type
interface Initiative {
  text: string;
  image: string;
  link: string;
}

// Define background colors
const backgroundColors = ["#f0f4f8", "#e0f7fa", "#ffebee"];

// Define sample initiatives data
const initiatives: Initiative[] = [
  {
    text: "CiviDep Cividep India is committed to worker's rights and corporate accountability...",
    image: "https://cividep.org/wp-content/uploads/2021/03/Cividep-Logo-2021-1.png",
    link: "https://cividep.org/#:~:text=Cividep%20India%20is%20committed%20to,work%20in%20global%20supply%20chains.",
  },
  {
    text: "Satyarthi Best NGO for Children in India working against Child labour...",
    image: "https://images.squarespace-cdn.com/content/v1/616ee054c1b1dd18a4243e55/9fd22b8d-c94c-43c2-9f20-b76f1c3f83fa/SLD+Jpg.jpg?format=1500w",
    link: "https://satyarthi.org.in/",
  },
  {
    text: "SLD India SLD recognizes the significance of enhancing the skills and capabilities of workers...",
    image: "https://satyarthi.org.in/wp-content/uploads/2018/12/logo-1.png",
    link: "https://www.sld-india.org/",
  },
];

// Theme Context
const ThemeContext = createContext({
  theme: "system", // default theme
  setTheme: (theme: string) => {},
});

const MentalHealthInitiative: React.FC<Initiative & { backgroundColor: string }> = ({
  text,
  image,
  link,
  backgroundColor,
}) => (
  <div
    className="card mb-4 shadow-lg"
    style={{ backgroundColor, width: "100%", borderRadius: "8px" }}
  >
    <div
      className="card-header"
      style={{
        padding: "16px",
        fontWeight: "bold",
        fontSize: "18px",
        color: "black", // Ensuring black color for NGO text
      }}
    >
      <span>{text}</span>
    </div>
    <div className="card-body" style={{ padding: "16px" }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          alt={`Image of ${text}`}
          width={200}
          height={100}
          className="rounded-lg"
        />
      </a>
    </div>
  </div>
);

const Initiatives: React.FC = () => (
  <div className="initiatives-container mb-12">
    <h1 className="text-3xl text-center font-bold mb-6">NGO Initiatives</h1>
    {initiatives.map((initiative, index) => (
      <MentalHealthInitiative
        key={index}
        text={initiative.text}
        image={initiative.image}
        link={initiative.link}
        backgroundColor={backgroundColors[index % backgroundColors.length]}
      />
    ))}
  </div>
);

const CalmingVideosSlider: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = "AIzaSyDLAaURMjPq0ij7J3or2Q9HrcRSr1AMVQk";
        const playlistId = "PL6Mvvu7LQp8KDQxjFroFUKtD85oDWoMbM";
        const maxResults = 6;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        const videoItems = data.items.map((item: any) => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        }));

        setVideos(videoItems);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  if (!videos.length) {
    return <p>Loading videos...</p>;
  }

  return (
    <div className="Info-videos-slider mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Info Videos</h2>
      <div className="video-list grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id}`}
              frameBorder="0"
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const CombinedComponent: React.FC = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // Set theme based on system preferences or default to light mode
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Update theme in localStorage and apply theme class to document body
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <h1 className="text-black">NGO Initiatives</h1>
        <Initiatives />
        <CalmingVideosSlider />
      </div>
    </ThemeContext.Provider>
  );
};

export default CombinedComponent;
