import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import React from "react";
import Logo from "../assets/GA_w.png";

export default function Footer() {
  const linkClass = "text-sm text-white/80 hover:text-white transition";
  const headingClass = "text-orange-400 font-semibold tracking-wide text-sm";

  const handleComingSoon = (e) => {
    e.preventDefault();
    alert("🚧 App Coming Soon! Stay tuned.");
  };

  return (
    <footer className="w-full bg-[#0b0b0d] text-white border-t-2 border-orange-600">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Logo and divider */}
        <div className="mb-8">
          <img src={Logo} alt="EP Logo" className="h-15 w-auto sm:h-24 mb-0" />  
          <hr className="border-gray-700" />
        </div>

        <div className="flex flex-col  justify-between gap-12">
          {/* Left side */}
          <div className="flex-1">
            {/* Top row */}
            <div className="flex flex-col gap-20 xl:gap-0 xl:flex-row justify-between mb-15 ">
              <div>
                <h4 className={headingClass}>Company</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Our Address
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={headingClass}>Schools</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      Digital Learning Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Webinars & Workshops
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Institutional Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Partnerships & Collaborations
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Learning & Teaching Apps
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={headingClass}>Students</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      Middle School
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      High School
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      College & Degree Programs
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Postgraduate & Masters
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Competitive Exams
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Additional Skill Courses
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className={headingClass}>Teachers</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      Teaching App
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Online Teaching Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Remote Tutorials & Mentorship
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col gap-20 xl:gap-0 xl:flex-row justify-between ">
              <div>
                <h4 className={headingClass}>Terms & Conditions</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Child Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Data Security & Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Anti-Abuse Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Government Regulations
                    </a>
                  </li>
                </ul>
              </div>

              <div className="xl:mr-40">
                <h4 className={headingClass}>Resources</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className={linkClass}>
                      Cloud Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Blogs & Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Courses Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      University Collaborations
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      Research & Innovation Centers
                    </a>
                  </li>
                  <li>
                    <a href="#" className={linkClass}>
                      e-Education Hubs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-auto flex flex-col self-end">
                <h4 className="text-orange-400 font-semibold tracking-wide text-base mb-6">
                  Download App
                </h4>

                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Google Play */}
                  <a
                    href="#"
                    onClick={handleComingSoon}
                    className="flex items-center bg-white text-black rounded-xl px-4 py-3 hover:opacity-90 transition shadow-md w-full sm:w-[244px] h-[80px]"
                  >
                    <FaGooglePlay className="w-12 h-12 flex-shrink-0" />
                    <div className="ml-3 leading-tight">
                      <p className="text-[12px] uppercase tracking-wide opacity-70 font-poppins">
                        Get it on
                      </p>
                      <p className="text-lg sm:text-xl font-semibold font-poppins">
                        Google Play
                      </p>
                    </div>
                  </a>

                  {/* App Store */}
                  <a
                    href="#"
                    onClick={handleComingSoon}
                    className="flex items-center bg-white text-black rounded-xl px-4 py-3 hover:opacity-90 transition shadow-md w-full sm:w-[244px] h-[80px]"
                  >
                    <FaApple className="w-12 h-12 flex-shrink-0" />
                    <div className="ml-3 leading-tight">
                      <p className="text-[12px] tracking-wide opacity-70 font-poppins">
                        Download on the
                      </p>
                      <p className="text-lg sm:text-xl font-semibold font-poppins">
                        App Store
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side Download App */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white text-sm text-center">
            Copyright © {new Date().getFullYear()} Gaurav Academy. All
            rights reserved.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-2 text-white bg-[rgba(244,94,41,1)] px-5 py-2 rounded-2xl font-bold">
            <FiPhone className="text-lg" />
            <span>+91 9163028087</span>
          </div>
          
          {/* Social icons */}
          <div className="flex gap-2">
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com/" },
              { Icon: FaInstagram, url: "https://www.instagram.com/" },
              { Icon: FaYoutube, url: "https://youtube.com/@gauravsarkar1754" },
              { Icon: FaTwitter, url: "https://twitter.com/" },
              {
                Icon: FaLinkedinIn,
                url: "https://www.linkedin.com/in/gaurav-sarkar-60299b289/",
              },
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 grid place-items-center transition text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
