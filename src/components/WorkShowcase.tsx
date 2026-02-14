import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, ExternalLink, Instagram, X, ZoomIn } from "lucide-react";
import krishnPoster from "../assets/krushnakunj-2.jpg";
import krishnPoster2 from "../assets/krushnakunj.jpg";
import GuruPurnima3 from "../assets/Guru-Purnima-3.jpg";
import GuruPurnima from "../assets/Guru-Purnima.jpg";
import UTBEkadashi from "../assets/UTB-Ekadashi.jpg";
import Yogaday from "../assets/Yoga-day.jpg";
import poratge17 from "../assets/poratge17.jpeg";
import portage1 from "../assets/portage1.jpeg";
import portage10 from "../assets/portage10.jpeg";
import portage11 from "../assets/portage11.jpeg";
import portage12 from "../assets/portage12.jpeg";
import portage13 from "../assets/portage13.jpeg";
import portage14 from "../assets/portage14.jpeg";
import portage15 from "../assets/portage15.jpeg";
import portage16 from "../assets/portage16.jpeg";
import portage2 from "../assets/portage2.jpeg";
import portage3 from "../assets/portage3.jpeg";
import portage4 from "../assets/portage4.jpeg";
import portage5 from "../assets/portage5.jpeg";
import portage6 from "../assets/portage6.jpeg";
import portage7 from "../assets/portage7.jpeg";
import portage8 from "../assets/portage8.jpeg";
import portage9 from "../assets/portage9.jpeg";
import sankranti from "../assets/sankranti.jpg";


gsap.registerPlugin(ScrollTrigger);

/* ✅ Categories */
const categories = ["All", "Reels", "Posters"];

interface WorkItem {
  title: string;
  category: string;
  type: "video" | "image";
  description: string;
  reelUrl?: string;
  image?: string;
  instagramHandle?: string;
}

/* ✅ Works Data */
const works: WorkItem[] = [
  /* ---------------- REELS ---------------- */
  {
    title: "Falcon Screens Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for Falcon Screens",
    reelUrl: "https://www.instagram.com/falconscreens/",
    instagramHandle: "falconscreens",
  },
  {
    title: "Promo Video Reel",
    category: "Reels",
    type: "video",
    description: "YouTube promotional reel project",
    reelUrl: "https://youtu.be/ccpVvbvSVOA?si=BEhUdEusgB_Mbtr6",
  },
  {
    title: "NutriSpray Campaign",
    category: "Reels",
    type: "video",
    description: "Instagram marketing reel for NutriSpray",
    reelUrl: "https://www.instagram.com/nutrispray.official/",
    instagramHandle: "nutrispray.official",
  },
  {
    title: "Oral Care Centre Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for Balkrishna Oral Care Centre",
    reelUrl: "https://www.instagram.com/balkrishnaoralcarecentre/",
    instagramHandle: "balkrishnaoralcarecentre",
  },
  {
    title: "RJG Logistics Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel for RJG Logistics",
    reelUrl: "https://www.instagram.com/rjglogistics/",
    instagramHandle: "rjglogistics",
  },
  {
    title: "Creative Video Edit",
    category: "Reels",
    type: "video",
    description: "YouTube motion reel editing project",
    reelUrl: "https://youtu.be/WEI8Mit54dE?si=LX3qDx4D7bgGGamK",
  },
  {
    title: "UTB Kitchen Food Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel created for UTB Kitchen showcasing delicious food content and brand promotions",
    reelUrl: "https://www.instagram.com/utb_kitchen/?hl=en",
    instagramHandle: "utb_kitchen",
  },
  {
    title: "NCS Services Promo Reel",
    category: "Reels",
    type: "video",
    description: "Marketing reel for NCS Services highlighting professional services and digital branding",
    reelUrl: "https://www.instagram.com/services_ncs/?hl=en",
    instagramHandle: "services_ncs",
  },
  {
    title: "Little Wonders International Reel",
    category: "Reels",
    type: "video",
    description: "Instagram reel project for Little Wonders International featuring school activities and creative storytelling",
    reelUrl: "https://www.instagram.com/little_wonders_international/?hl=en",
    instagramHandle: "little_wonders_international",
  },

  /* ---------------- POSTERS ---------------- */
  /* ---------------- POSTERS ---------------- */
{
  title: "Krishn Kunj Poster Design 1",
  category: "Posters",
  type: "image",
  description: "Creative festival poster design created for Krishn Kunj campaign.",
  image: krishnPoster2,
},
{
  title: "Krishn Kunj Poster Design 2",
  category: "Posters",
  type: "image",
  description: "Promotional poster artwork designed for Krishn Kunj branding.",
  image: krishnPoster,
},

{
  title: "Guru Purnima Special Poster",
  category: "Posters",
  type: "image",
  description: "A devotional poster design created for the Guru Purnima celebration.",
  image: GuruPurnima,
},
{
  title: "Guru Purnima Event Poster 3",
  category: "Posters",
  type: "image",
  description: "Creative event poster made for Guru Purnima festival campaign.",
  image: GuruPurnima3,
},

{
  title: "UTB Ekadashi Festival Poster",
  category: "Posters",
  type: "image",
  description: "Poster design created for UTB Kitchen Ekadashi festival promotion.",
  image: UTBEkadashi,
},

{
  title: "International Yoga Day Poster",
  category: "Posters",
  type: "image",
  description: "Wellness-themed creative poster designed for Yoga Day celebration.",
  image: Yogaday,
},

{
  title: "Makar Sankranti Festival Poster",
  category: "Posters",
  type: "image",
  description: "Traditional festive poster artwork created for Sankranti campaign.",
  image: sankranti,
},

/* ---------------- PORTFOLIO POSTER SERIES ---------------- */
{
  title: "Portfolio Poster Design 1",
  category: "Posters",
  type: "image",
  description: "A creative poster design showcasing modern layout and branding.",
  image: portage1,
},
{
  title: "Portfolio Poster Design 2",
  category: "Posters",
  type: "image",
  description: "Promotional poster concept designed for digital marketing showcase.",
  image: portage2,
},
{
  title: "Portfolio Poster Design 3",
  category: "Posters",
  type: "image",
  description: "Minimal and clean poster artwork created as part of portfolio series.",
  image: portage3,
},
{
  title: "Portfolio Poster Design 4",
  category: "Posters",
  type: "image",
  description: "Creative visual poster design made with professional typography.",
  image: portage4,
},
{
  title: "Portfolio Poster Design 5",
  category: "Posters",
  type: "image",
  description: "Digital poster layout created for branding and social media use.",
  image: portage5,
},
{
  title: "Portfolio Poster Design 6",
  category: "Posters",
  type: "image",
  description: "Poster design concept featuring modern color and composition.",
  image: portage6,
},
{
  title: "Portfolio Poster Design 7",
  category: "Posters",
  type: "image",
  description: "Creative campaign-style poster designed for portfolio collection.",
  image: portage7,
},
{
  title: "Portfolio Poster Design 8",
  category: "Posters",
  type: "image",
  description: "Promotional poster design showcasing creative branding skills.",
  image: portage8,
},
{
  title: "Portfolio Poster Design 9",
  category: "Posters",
  type: "image",
  description: "Poster artwork created with focus on typography and balance.",
  image: portage9,
},
{
  title: "Portfolio Poster Design 10",
  category: "Posters",
  type: "image",
  description: "Creative poster layout designed for digital portfolio showcase.",
  image: portage10,
},
{
  title: "Portfolio Poster Design 11",
  category: "Posters",
  type: "image",
  description: "Professional marketing poster design created for social media.",
  image: portage11,
},
{
  title: "Portfolio Poster Design 12",
  category: "Posters",
  type: "image",
  description: "Poster design concept focusing on creative branding visuals.",
  image: portage12,
},
{
  title: "Portfolio Poster Design 13",
  category: "Posters",
  type: "image",
  description: "Promotional poster created as part of modern design series.",
  image: portage13,
},
{
  title: "Portfolio Poster Design 14",
  category: "Posters",
  type: "image",
  description: "Clean and creative poster artwork designed for digital campaigns.",
  image: portage14,
},
{
  title: "Portfolio Poster Design 15",
  category: "Posters",
  type: "image",
  description: "Creative portfolio poster highlighting layout and typography skills.",
  image: portage15,
},
{
  title: "Portfolio Poster Design 16",
  category: "Posters",
  type: "image",
  description: "Marketing poster concept designed with a modern professional look.",
  image: portage16,
},
{
  title: "Portfolio Poster Design 17",
  category: "Posters",
  type: "image",
  description: "Poster artwork created as part of portfolio poster design collection.",
  image: poratge17,
},

];

/* ✅ Instagram Profile Preview Component */
const InstagramProfilePreview = ({ username }: { username: string }) => {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading Instagram profile preview
    // In production, you would fetch this from Instagram's API or oEmbed
    const timer = setTimeout(() => {
      setProfileData({
        username,
        avatar: `https://ui-avatars.com/api/?name=${username}&background=random&size=200`,
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  if (loading) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 animate-pulse" />
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex flex-col items-center justify-center p-6 text-white">
      {/* Instagram Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-3 gap-1 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white mb-4 mx-auto overflow-hidden">
          <img
            src={profileData.avatar}
            alt={username}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Instagram className="w-5 h-5" />
          <h4 className="font-bold text-lg">@{username}</h4>
        </div>
        <p className="text-sm text-white/90 mb-4">View Instagram Profile</p>
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 inline-block">
          <span className="text-xs font-medium">Instagram Reels</span>
        </div>
      </div>
    </div>
  );
};

/* ✅ YouTube Preview Component */
const YouTubePreview = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center">
      {/* YouTube Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-8 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-l-8 border-l-white ml-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <p className="text-lg font-bold mb-2">YouTube Video</p>
        <p className="text-sm text-white/90">Promotional Reel</p>
      </div>
    </div>
  );
};

/* ✅ Component */
const WorkShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  /* Filter */
  const filtered =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  /* Animations */
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".work-item");
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [activeCategory]);

  /* Modal/Lightbox open */
  useEffect(() => {
    if (selectedWork || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedWork, lightboxImage]);

  /* Open Video Modal */
  const handleVideoClick = (work: WorkItem) => {
    setSelectedWork(work);
  };

  /* Open Image Lightbox */
  const handleImageClick = (work: WorkItem) => {
    if (work.image) {
      setLightboxImage(work.image);
    }
  };

  const closeModal = () => setSelectedWork(null);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      {/* SECTION */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My Work
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my reels and creative poster designs. Click any reel to open it.
          </p>

          {/* CATEGORY FILTER */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div
            ref={sectionRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((work, i) => (
              <div
                key={i}
                className="work-item group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                onClick={() => {
                  if (work.type === "video") {
                    handleVideoClick(work);
                  } else {
                    handleImageClick(work);
                  }
                }}
              >
                {/* Card Content */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Poster Image */}
                  {work.type === "image" && work.image && (
                    <>
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Zoom Icon Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-8 h-8 text-gray-800" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Reel Card with Instagram/YouTube Preview */}
                  {work.type === "video" && (
                    <>
                      {work.instagramHandle ? (
                        <InstagramProfilePreview username={work.instagramHandle} />
                      ) : (
                        <YouTubePreview />
                      )}

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white rounded-full p-6 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-10 h-10 text-gray-800 fill-gray-800" />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                  <p className="text-sm text-white/80">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedWork && selectedWork.reelUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedWork.title}</h3>
            <p className="text-muted-foreground mb-6">
              {selectedWork.description}
            </p>

            {/* Open Reel */}
            <a
              href={selectedWork.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              {selectedWork.reelUrl.includes("instagram") ? (
                <Instagram className="w-5 h-5" />
              ) : (
                <ExternalLink className="w-5 h-5" />
              )}
              Open {selectedWork.reelUrl.includes("instagram") ? "Instagram" : "YouTube"}
            </a>
          </div>
        </div>
      )}

      {/* IMAGE LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Poster preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkShowcase;
