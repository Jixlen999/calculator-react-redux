const APP_BG_COLOR = ({ theme }) => theme.mainBackground;
const MAIN_TEXT_COLOR = ({ theme }) => theme.mainTextColor;
const BTN_BORDER = ({ theme }) => theme.btnBorder;
const BTN_BG_COLOR = ({ theme }) => theme.btnBackground;
const BTN_BG_COLOR_HOVER = ({ theme }) => theme.btnHover;
const HEADER_COLOR = ({ theme }) => theme.headerColor;
const NAVLINK_COLOR = ({ theme }) => theme.navLinkColor;

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

  APP_BG_COLOR,
  MAIN_TEXT_COLOR,
  BTN_BORDER,
  BTN_BG_COLOR,
  BTN_BG_COLOR_HOVER,
  HEADER_COLOR,
  NAVLINK_COLOR,
};
