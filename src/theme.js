const borderColor = '#717171';
const navlinkColorHoverActive = '#ececec';
const white = '#ffffff';
const mutualStyles = {
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
};

export default {
  DarkTheme: {
    value: 'dark',
    btnBackground: '#766993',
    headerColor: '#201c25',
    btnBorder: '#573880',
    btnHover: '#635579',
    mainTextColor: '#ececec',
    mainBackground: '#3E3649',
    navLinkColor: '#afafaf',
    ...mutualStyles,
  },

  LightTheme: {
    value: 'light',
    btnBackground: '#FFd7b5',
    headerColor: '#E25817',
    btnBorder: '#FC929B',
    btnHover: '#FDC4D2',
    mainTextColor: '#FA5F66',
    mainBackground: '#FCF7F6',
    navLinkColor: '#FFD396',
    ...mutualStyles,
  },

  // appBgColor,
  // mainTextColor,
  // btnBorder,
  // btnBgColor,
  // btnBgColorHover,
  // headerColor,
  // navLinkColor,
};
