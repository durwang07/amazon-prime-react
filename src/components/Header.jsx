import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={logo} alt="Amazon prime video logo" />
        </a>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tv">TV shows</NavLink>
          </li>
          <li>
            <NavLink to="/live-tv">Live TV</NavLink>
          </li>
        </ul>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <svg
              className="fbl-icon _30dE3d _1a_Ljt SL7OAU"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <title>Search</title>
              <svg
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.360 2.025 C 7.466 2.198,5.790 2.960,4.446 4.259 C 3.730 4.951,3.257 5.602,2.817 6.500 C 1.479 9.228,1.809 12.458,3.674 14.900 C 3.949 15.260,4.616 15.933,5.000 16.239 C 6.430 17.378,8.196 17.999,10.000 17.999 C 11.567 17.999,13.170 17.508,14.465 16.632 L 14.911 16.331 17.645 19.066 C 19.449 20.870,20.434 21.828,20.540 21.879 C 20.942 22.074,21.370 22.002,21.686 21.686 C 22.002 21.370,22.074 20.942,21.879 20.540 C 21.828 20.434,20.870 19.449,19.066 17.645 L 16.331 14.911 16.632 14.465 C 18.219 12.120,18.436 9.087,17.200 6.529 C 16.809 5.718,16.392 5.120,15.761 4.464 C 14.541 3.195,12.996 2.388,11.240 2.100 C 10.865 2.039,9.711 1.992,9.360 2.025 M11.041 4.097 C 12.371 4.333,13.638 5.046,14.506 6.045 C 15.229 6.879,15.707 7.879,15.909 8.980 C 15.999 9.468,15.999 10.532,15.909 11.020 C 15.805 11.587,15.653 12.064,15.423 12.545 C 14.584 14.296,13.102 15.462,11.174 15.887 C 10.603 16.013,9.397 16.013,8.826 15.887 C 6.341 15.339,4.548 13.496,4.090 11.020 C 4.000 10.531,4.000 9.469,4.090 8.980 C 4.394 7.335,5.309 5.928,6.660 5.025 C 7.725 4.313,8.873 3.981,10.140 4.019 C 10.448 4.029,10.853 4.063,11.041 4.097 "
                  fill="currentColor"
                  stroke="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </svg>
          </li>
          <li className="lang-selector">
            <span>EN</span>
            <svg
              className="fbl-icon _30dE3d _1a_Ljt DDcp5m"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <title>Caret Down</title>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.643 9.069 C 6.113 9.256,5.857 9.918,6.113 10.444 C 6.174 10.570,6.942 11.363,8.829 13.245 C 11.219 15.629,11.478 15.876,11.657 15.935 C 11.906 16.017,12.094 16.017,12.343 15.935 C 12.522 15.876,12.781 15.629,15.171 13.245 C 18.046 10.377,18.001 10.429,17.999 9.982 C 17.998 9.669,17.903 9.462,17.661 9.249 C 17.449 9.062,17.278 9.000,16.980 9.001 C 16.582 9.002,16.576 9.008,14.210 11.371 L 12.000 13.579 9.770 11.354 C 7.753 9.343,7.521 9.124,7.343 9.065 C 7.101 8.985,6.876 8.986,6.643 9.069 "
                  fill="currentColor"
                  stroke="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </svg>
          </li>
          <li>
            <svg
              className="fbl-icon _30dE3d _1a_Ljt SL7OAU"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              role="img"
              aria-hidden="true"
            >
              <title>Categories Remaster</title>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.580 3.047 C 3.859 3.185,3.199 3.848,3.044 4.592 C 2.905 5.257,3.105 5.912,3.596 6.404 C 4.393 7.200,5.607 7.200,6.404 6.404 C 7.200 5.607,7.200 4.393,6.404 3.596 C 5.913 3.106,5.277 2.914,4.580 3.047 M11.580 3.047 C 10.859 3.185,10.199 3.848,10.044 4.592 C 9.789 5.816,10.751 7.000,12.000 7.000 C 13.080 7.000,14.000 6.080,14.000 5.000 C 14.000 4.477,13.790 3.983,13.404 3.596 C 12.913 3.106,12.277 2.914,11.580 3.047 M18.580 3.047 C 17.859 3.185,17.199 3.848,17.044 4.592 C 16.789 5.816,17.751 7.000,19.000 7.000 C 19.920 7.000,20.768 6.310,20.956 5.408 C 21.095 4.743,20.895 4.088,20.404 3.596 C 19.913 3.106,19.277 2.914,18.580 3.047 M4.580 10.047 C 4.236 10.113,3.883 10.310,3.596 10.596 C 2.800 11.393,2.800 12.607,3.596 13.404 C 4.393 14.200,5.607 14.200,6.404 13.404 C 7.200 12.607,7.200 11.393,6.404 10.596 C 5.913 10.106,5.277 9.914,4.580 10.047 M11.580 10.047 C 10.707 10.214,10.000 11.087,10.000 12.000 C 10.000 12.920,10.690 13.768,11.592 13.956 C 12.816 14.211,14.000 13.249,14.000 12.000 C 14.000 11.477,13.790 10.983,13.404 10.596 C 12.913 10.106,12.277 9.914,11.580 10.047 M18.580 10.047 C 17.707 10.214,17.000 11.087,17.000 12.000 C 17.000 12.920,17.690 13.768,18.592 13.956 C 19.816 14.211,21.000 13.249,21.000 12.000 C 21.000 11.477,20.790 10.983,20.404 10.596 C 19.913 10.106,19.277 9.914,18.580 10.047 M4.580 17.047 C 3.859 17.185,3.199 17.848,3.044 18.592 C 2.789 19.816,3.751 21.000,5.000 21.000 C 5.920 21.000,6.768 20.310,6.956 19.408 C 7.095 18.743,6.895 18.088,6.404 17.596 C 5.913 17.106,5.277 16.914,4.580 17.047 M11.580 17.047 C 10.859 17.185,10.199 17.848,10.044 18.592 C 9.789 19.816,10.751 21.000,12.000 21.000 C 13.080 21.000,14.000 20.080,14.000 19.000 C 14.000 18.477,13.790 17.983,13.404 17.596 C 12.913 17.106,12.277 16.914,11.580 17.047 M18.580 17.047 C 17.859 17.185,17.199 17.848,17.044 18.592 C 16.789 19.816,17.751 21.000,19.000 21.000 C 20.080 21.000,21.000 20.080,21.000 19.000 C 21.000 18.477,20.790 17.983,20.404 17.596 C 19.913 17.106,19.277 16.914,18.580 17.047 "
                  fill="currentColor"
                  stroke="none"
                  fillRule="evenodd"
                ></path>
              </svg>
            </svg>
          </li>
          <li className="account-logo">
            <img src="../../../public/svg/profile.svg" alt="account optoin" />
          </li>
          <li>
            <NavLink to="/">Join Prime</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;



