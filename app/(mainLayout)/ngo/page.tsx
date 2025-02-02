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
    text: "The Indian government policies for workers include the Labour Codes of 2020, National Rural Employment Guarantee Act (NREGA), Pradhan Mantri Shram Yogi Maan-Dhan (PM-SYM), Pradhan Mantri Kaushal Vikas Yojana (PMKVY), Maternity Benefit (Amendment) Act, 2017, Code on Social Security, 2020, Employees' State Insurance (ESI) Scheme, National Policy on Skill Development, Social Security for Gig and Platform Workers, and the National Policy on Safety, Health, and Environment at Workplace.",
    image: "data:image/jpeg;base64,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",
    link: "https://labour.gov.in/pm-sym",
  },
  {
    text: "Workers' rights in India are safeguarded by several key legislative acts designed to ensure fair treatment, safe working conditions, and equitable remuneration. The Industrial Disputes Act, 1947 provides mechanisms for the resolution of industrial disputes and the promotion of industrial harmony. The Minimum Wages Act, 1948 ensures that workers receive fair wages for their labor. The Factories Act, 1948 sets standards for working conditions, health, and safety in factories. The Payment of Wages Act, 1936 regulates the payment of wages to certain classes of workers. Additionally, the Employees' Provident Fund and Miscellaneous Provisions Act, 1952 and the Employees' State Insurance Act, 1948 provide social security benefits to workers. Collectively, these laws aim to protect workers' rights and promote their welfare in the industrial and labor sectors of India.",
    image: "data:image/png;base64,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",
    link: "https://clc.gov.in/clc/labour-law",
  },
  {
    text: "SLD India, also known as the Society for Labour and Development, is dedicated to enhancing the skills and capabilities of workers across various sectors. They focus on providing rights-based training, promoting leadership among workers, and supporting collective voices to ensure safer workplaces and better living conditions2. Through their initiatives, SLD India empowers workers, especially women, to understand and assert their rights, fostering gender equality and labor justice",
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
  <div className="initiatives-container mb-12" style={{
    marginBottom: "3rem",
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#50c54b",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(38, 250, 34, 0.85)",
  }}>
    <h1 className="text-3xl text-center font-bold mb-6" style={{
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1.5rem",
        color: "#50c54b",
      }}>NGO Initiatives</h1>
      <button style={{
      padding: "12px 30px",
      fontSize: "2.0rem",
      marginBottom: "30px",
      width: "900px",
      fontWeight: "bold",
      backgroundColor: "#000", // Green background
      color: "#fff", // White text
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }} onClick={() => alert("No funds currently available, Please look for a government policy that suits you the best.")}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#0f0f0f"; // Darker green on hover
      e.target.style.transform = "scale(1.03)"; // Slightly enlarge on hover
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#000"; // Reset to original green
      e.target.style.transform = "scale(1)"; // Reset scale
    }}>
        Request Funds
      </button>

      <button style={{
      padding: "12px 30px",
      fontSize: "1.5rem",
      marginBottom: "30px",
      width: "400px",
      fontWeight: "bold",
      backgroundColor: "#000", // Green background
      color: "#fff", // White text
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginRight: "20px",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }} onClick={() => alert("Your request for help has been sent to the necessary authorities")}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#0f0f0f"; // Darker green on hover
      e.target.style.transform = "scale(1.03)"; // Slightly enlarge on hover
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#000"; // Reset to original green
      e.target.style.transform = "scale(1)"; // Reset scale
    }}>
        Request Help
      </button>

      <button style={{
      padding: "12px 30px",
      fontSize: "1.5rem",
      marginBottom: "30px",
      width: "400px",
      fontWeight: "bold",
      backgroundColor: "#000", // Green background
      color: "#fff", // White text
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }} onClick={() => alert("Complete atleast 5 jobs to get a discount coupon")}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#0f0f0f"; // Darker green on hover
      e.target.style.transform = "scale(1.03)"; // Slightly enlarge on hover
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "#000"; // Reset to original green
      e.target.style.transform = "scale(1)"; // Reset scale
    }}>
        Get Coupons
      </button>

    {initiatives.map((initiative, index) => (
      <div
      key={index}
      style={{
        marginBottom: "1.5rem",
        padding: "1rem",
        borderRadius: "8px",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: backgroundColors[index % backgroundColors.length], // Move background color here
      }}
    >
      <MentalHealthInitiative
        key={index}
        text={initiative.text}
        image={initiative.image}
        link={initiative.link}
        backgroundColor={backgroundColors[index % backgroundColors.length]}
      />
      </div>
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
            <div className="p-4 text-center bg-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
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
