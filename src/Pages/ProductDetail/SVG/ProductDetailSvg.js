import React from "react";
import styled from "styled-components";

const RoomIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 2;
  overflow: visible;
`;

const Amenities = styled.svg`
  display: block;
  height: 24px;
  width: 24px;
  fill: currentcolor;
`;

const NormalSvg = styled.svg`
  height: 10px;
  width: 10px;
  display: block;
  fill: currentcolor;
`;

const ProductDetailSvg = {
  rightArrow: (
    <NormalSvg
      viewBox="0 0 18 18"
      role="presentation"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fill-rule="evenodd"
      ></path>
    </NormalSvg>
  ),

  share: (
    <RoomIcon
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
        <path d="M16 3v23V3z"></path>
        <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
      </g>
    </RoomIcon>
  ),

  heart: (
    <RoomIcon
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
    </RoomIcon>
  ),

  superHost: (
    <Amenities
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="M16.996 15.185l3.537-1.987c1.93-1.082 3.8-2.126 5.61-3.132.529-.294.857-.852.857-1.457V2.668C27 1.748 26.254 1 25.333 1H6.667A1.669 1.669 0 0 0 5 2.668v5.94c0 .606.328 1.164.857 1.458l3.323 1.852a1970.5 1970.5 0 0 1 5.827 3.27c.694.39 1.293.39 1.989-.003zm-.981-1.742l-.014.011-.013-.01-3.542-1.99c-1.16-.65-2.298-1.287-3.414-1.91L7 8.414V3.002h18v5.412l-3.155 1.758a2000.26 2000.26 0 0 0-5.83 3.27zM16 17a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"></path>
    </Amenities>
  ),

  entireHome: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z"></path>
    </Amenities>
  ),

  enhancedClean: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z"></path>
    </Amenities>
  ),

  key: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1c6.075 0 11 4.925 11 11 0 1.464-.287 2.888-.834 4.208l-.166.378 9 9V31h-5.414l-4.001-4H16v-4.753l-.155.062a10.95 10.95 0 0 1-3.001.66l-.446.024L12 23C5.925 23 1 18.075 1 12S5.925 1 12 1zm0 2a9 9 0 1 0 0 18c1.409 0 2.77-.323 4-.935l.305-.16.658-.358L18 20.587V25h4.414l4.001 4H29v-2.585l-9.453-9.453.359-.657A8.954 8.954 0 0 0 21 12a9 9 0 0 0-9-9zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
    </Amenities>
  ),

  calender: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z"></path>
    </Amenities>
  ),

  bed: (
    <Amenities
      viewBox="0 0 24 24"
      role="presentation"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z"
        fill-rule="evenodd"
      ></path>
    </Amenities>
  ),

  kitchen: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path>
    </Amenities>
  ),

  parking: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm2 5a5 5 0 0 1 .217 9.995L18 18h-5v6h-2V8zm0 2h-5v6h5a3 3 0 0 0 .176-5.995z"></path>
    </Amenities>
  ),

  cableTv: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 1a5 5 0 0 1 4.995 4.783L29 6v20a5 5 0 0 1-4.783 4.995L24 31h-5v-2h5a3 3 0 0 0 2.995-2.824L27 26V6a3 3 0 0 0-2.824-2.995L24 3H8a3 3 0 0 0-2.995 2.824L5 6v20a3 3 0 0 0 2.824 2.995L8 29h7v-8h-2a2 2 0 0 1-1.995-1.85L11 19v-6a2 2 0 0 1 1.85-1.995L13 11h6a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-2v8a2 2 0 0 1-1.85 1.995L15 31H8a5 5 0 0 1-4.995-4.783L3 26V6a5 5 0 0 1 4.783-4.995L8 1zm-5 12h-6v6h2v-4h2v4h2z"></path>
    </Amenities>
  ),

  hanger: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z"></path>
    </Amenities>
  ),

  wifi: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 20a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0-7a9 9 0 0 1 8.043 4.958L22.53 21.47a7.003 7.003 0 0 0-13.058 0l-1.514-1.514A9 9 0 0 1 16 15zm0-5c4.89 0 9.193 2.506 11.697 6.304l-1.45 1.45A11.993 11.993 0 0 0 16 12c-4.339 0-8.14 2.302-10.247 5.752l-1.45-1.449A13.987 13.987 0 0 1 16 10zm0-5c6.267 0 11.826 3.034 15.286 7.714l-1.432 1.432C26.773 9.821 21.716 7 16 7 10.285 7 5.228 9.82 2.146 14.145L.714 12.714C4.174 8.034 9.733 5 16 5z"></path>
    </Amenities>
  ),

  hairDryer: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
    </Amenities>
  ),

  workSpace: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27 3a2 2 0 0 1 1.995 1.85L29 5l-.001 14.816 2.43 6.482a2 2 0 0 1-.881 2.44l-.145.074-.144.06a2 2 0 0 1-.523.12l-.179.008H2.443a2 2 0 0 1-1.928-2.532l.055-.17L3 19.819 3 5a2 2 0 0 1 1.697-1.977l.154-.018L5 3zm.306 18H4.692l-2.249 6h27.114zM19 23v2h-6v-2zm8-18H5l-.001 14h22zM16 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </Amenities>
  ),

  washer: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm0 2H4v24h24zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.841 7.5c-.342 0-.68.024-1.014.073a7 7 0 0 0 13.107 4.58 8.976 8.976 0 0 1-6.91-2.374l-.236-.23a6.966 6.966 0 0 0-4.947-2.049zM16 9a6.997 6.997 0 0 0-6.066 3.504l.225-.004c2.262 0 4.444.844 6.124 2.407l.237.229a6.979 6.979 0 0 0 4.948 2.05c.493 0 .98-.05 1.456-.151A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </Amenities>
  ),

  carbonMonixideAlarm: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </Amenities>
  ),

  smokeAlarm: (
    <Amenities
      aria-hidden="true"
      role="presentation"
      focusable="false"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm-4.9 14a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
    </Amenities>
  ),
};

export default ProductDetailSvg;