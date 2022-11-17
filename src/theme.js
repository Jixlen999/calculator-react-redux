const appBgColor = ({ theme }) => theme.mainBackground;
const mainTextColor = ({ theme }) => theme.mainTextColor;
const btnBorder = ({ theme }) => theme.btnBorder;
const btnBgColor = ({ theme }) => theme.btnBackground;
const btnBgColorHover = ({ theme }) => theme.btnHover;
const headerColor = ({ theme }) => theme.headerColor;
const navLinkColor = ({ theme }) => theme.navLinkColor;

const borderColor = '#717171';
const navlinkColorHoverActive = '#ececec';
const white = '#ffffff';

export default {
  width: [2, 15, 20, 100, 300],
  height: [10, 15, 50, 70, 85, 90, 100],
  margin: [2, 5, 20],
  padding: [5, 15, 20, 30],
  fontSize: [18, 20, 24, 26, 36, 40],
  fontWeight: [400, 500],
  borderSize: [1.5, 2],
  borderRadius: [5],
  transition: [0.3],
  gap: [10, 20],

  borderColor,
  navlinkColorHoverActive,
  white,

  appBgColor,
  mainTextColor,
  btnBorder,
  btnBgColor,
  btnBgColorHover,
  headerColor,
  navLinkColor,
};
