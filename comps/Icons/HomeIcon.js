import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.3 12.308h.002a2.397 2.397 0 0 1-.002 3.384 2.378 2.378 0 0 1-1.692.702h-.392v7.805A2.805 2.805 0 0 1 21.414 27h-4.15a.762.762 0 0 1-.762-.762V20.12a1.28 1.28 0 0 0-1.278-1.278h-2.448a1.28 1.28 0 0 0-1.278 1.278v6.12c0 .42-.341.761-.762.761h-4.15a2.805 2.805 0 0 1-2.801-2.801v-7.805h-.423a2.38 2.38 0 0 1-1.662-.702 2.396 2.396 0 0 1-.005-3.38l.01-.01 10.602-10.6A2.379 2.379 0 0 1 14 1c.64 0 1.24.249 1.693.701L26.3 12.307v.001Zm-1.692 2.562a.872.872 0 0 0 .617-1.484l-.005-.005L14.615 2.778A.864.864 0 0 0 14 2.523c-.232 0-.45.09-.615.255L2.778 13.383v.001a.871.871 0 0 0 .634 1.486h1.134c.421 0 .762.341.762.762V24.2a1.28 1.28 0 0 0 1.278 1.278h3.388v-5.358a2.805 2.805 0 0 1 2.802-2.801h2.448a2.805 2.805 0 0 1 2.802 2.801v5.358h3.388a1.28 1.28 0 0 0 1.278-1.278v-8.567c0-.42.341-.762.762-.762h1.154Z"
      fill="#4B4279"
    />
    <path
      d="m26.302 12.309.354-.353-.025-.026-.029-.021-.3.4Zm-.001-.001.36-.347-.36.347Zm0 3.384.353.354-.354-.354Zm-2.085.702v-.5h-.5v.5h.5Zm-20.431 0h.5v-.5h-.5v.5Zm-.497-.004.048-.497-.013-.002H3.31l-.022.5ZM1.7 15.692l.353-.353-.353.353Zm-.005-3.38.355.353.002-.002-.357-.35Zm.01-.01-.353-.354-.003.003.357.35Zm10.602-10.6.354.353-.354-.354Zm3.386 0-.354.353.354-.354ZM26.3 12.306l-.354.353.354-.353Zm-1.077 2.308.354.354-.354-.354Zm.002-1.229.354-.352-.008-.009-.347.361Zm-.005-.005-.354.354.007.007.347-.36ZM14.615 2.778l-.353.354.353-.354Zm-1.23 0 .354.354-.354-.354ZM2.778 13.383l-.353-.353.353.354Zm0 .001.352.355.001-.001-.353-.354Zm0 0 .425.263-.425-.263Zm0 0v-.5H2.57l-.146.147.353.353Zm0 1.231.353-.353-.354.353Zm.599.254-.01.5h.001l.009-.5Zm.035.001-.033.5h.033v-.5Zm6.562 10.607v.5h.5v-.5h-.5Zm8.052 0h-.5v.5h.5v-.5Zm8.576-13.568c.03.022.05.042.06.052l-.721.694c.01.01.03.031.06.054l.601-.8Zm.052 4.137a2.897 2.897 0 0 0 .002-4.09l-.708.706c.736.738.736 1.94-.001 2.677l.707.707Zm-2.046.848c.771 0 1.5-.302 2.046-.848l-.707-.707a1.879 1.879 0 0 1-1.34.555v1Zm-.392 0h.392v-1h-.392v1Zm.5 7.305v-7.805h-1v7.805h1ZM21.414 27.5a3.305 3.305 0 0 0 3.302-3.301h-1a2.305 2.305 0 0 1-2.302 2.301v1Zm-4.15 0h4.15v-1h-4.15v1Zm-1.262-1.262c0 .697.565 1.262 1.262 1.262v-1a.262.262 0 0 1-.262-.262h-1Zm0-6.119v6.12h1v-6.12h-1Zm-.778-.778a.78.78 0 0 1 .778.778h1a1.78 1.78 0 0 0-1.778-1.778v1Zm-2.448 0h2.448v-1h-2.448v1Zm-.778.778a.78.78 0 0 1 .778-.778v-1a1.78 1.78 0 0 0-1.778 1.778h1Zm0 6.12v-6.12h-1v6.12h1ZM10.736 27.5c.697 0 1.262-.565 1.262-1.262h-1a.262.262 0 0 1-.262.262v1Zm-4.15 0h4.15v-1h-4.15v1Zm-3.301-3.301c0 1.82 1.48 3.301 3.301 3.301v-1a2.305 2.305 0 0 1-2.301-2.301h-1Zm0-7.805v7.805h1v-7.805h-1Zm.077.5h.423v-1h-.423v1Zm-.122-.006c.04.004.081.006.122.006v-1l-.026-.001-.096.995Zm-1.894-.842a2.88 2.88 0 0 0 1.92.844l.044-1a1.88 1.88 0 0 1-1.257-.551l-.707.707Zm-.005-4.086a2.896 2.896 0 0 0 .005 4.086l.707-.707a1.896 1.896 0 0 1-.003-2.674l-.71-.705Zm.008-.009-.01.011.713.7.01-.01-.713-.7ZM11.954 1.348l-10.602 10.6.707.707 10.602-10.6-.707-.707ZM14 .5c-.772 0-1.5.302-2.046.848l.707.707A1.878 1.878 0 0 1 14 1.5v-1Zm2.046.848A2.878 2.878 0 0 0 14 .5v1c.507 0 .98.196 1.34.555l.706-.707Zm10.607 10.605L16.046 1.348l-.707.707L25.946 12.66l.707-.707Zm.008.008a.304.304 0 0 1 .008.009l.002.002-.005-.006a.491.491 0 0 0-.013-.013l-.706.708a.358.358 0 0 1-.006-.006l.72-.694Zm-1.792 2.3a.365.365 0 0 1-.261.11v1c.365 0 .71-.144.968-.402l-.707-.707Zm0-.523a.372.372 0 0 1 0 .524l.708.707c.533-.534.534-1.4.002-1.935l-.71.704Zm.004.004.005.005.693-.722-.005-.004-.693.721ZM14.262 3.132l10.604 10.603.707-.707L14.97 2.425l-.707.707ZM14 3.023c.1 0 .191.038.262.109l.707-.707A1.364 1.364 0 0 0 14 2.023v1Zm-.261.109A.364.364 0 0 1 14 3.023v-1c-.365 0-.71.144-.969.402l.708.707ZM3.132 13.737 13.739 3.132l-.708-.707L2.425 13.03l.707.707Zm0 0-.707-.707.706.708Zm.071-.09c0 .002-.027.046-.073.092l-.705-.71c-.045.046-.072.091-.073.093l.851.524Zm-.426.237a.5.5 0 0 0 .41-.212l.016-.025-.85-.525a.501.501 0 0 1 .425-.237v1Zm.354.378a.371.371 0 0 1 0-.524l-.707-.707a1.371 1.371 0 0 0 0 1.938l.707-.707Zm.254.107a.364.364 0 0 1-.254-.107l-.707.707c.251.252.588.394.944.4l.017-1Zm.06.002a1.27 1.27 0 0 0-.06-.002l-.017 1a.25.25 0 0 1 .011 0l.067-.998Zm1.101 0H3.412v1h1.134v-1Zm1.262 1.261c0-.697-.565-1.262-1.262-1.262v1c.145 0 .262.118.262.262h1Zm0 8.567v-8.567h-1V24.2h1Zm.778.778a.78.78 0 0 1-.778-.778h-1c0 .98.798 1.778 1.778 1.778v-1Zm3.388 0H6.586v1h3.388v-1Zm-.5-4.858v5.358h1v-5.358h-1Zm3.302-3.301a3.305 3.305 0 0 0-3.302 3.301h1a2.305 2.305 0 0 1 2.302-2.301v-1Zm2.448 0h-2.448v1h2.448v-1Zm3.302 3.301c0-1.82-1.48-3.301-3.302-3.301v1a2.305 2.305 0 0 1 2.302 2.301h1Zm0 5.358v-5.358h-1v5.358h1Zm2.888-.5h-3.388v1h3.388v-1Zm.778-.778a.78.78 0 0 1-.778.778v1a1.78 1.78 0 0 0 1.778-1.778h-1Zm0-8.567V24.2h1v-8.567h-1Zm1.262-1.262c-.697 0-1.262.565-1.262 1.262h1c0-.144.117-.262.262-.262v-1Zm1.154 0h-1.154v1h1.154v-1Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
