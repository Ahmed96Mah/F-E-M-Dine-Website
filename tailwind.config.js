/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beaver: '#9E7F66',
        'cod-gray': '#111111',
        mirage: '#17192B',
        'ebony-clay': '#242B37',
        'shuttle-gray': '#5C6779',
        'button-active': '#4C4C4C',
        error: '#B54949',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        xs: [
          '10px',
          {
            lineHeight: '9px',
            fontWeight: '500',
            letterSpacing: '-0.12px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '28px',
            fontWeight: '400',
            letterSpacing: '2px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '26px',
            fontWeight: '400',
          },
        ],
        lg: [
          '17px',
          {
            lineHeight: '16px',
            fontWeight: '600',
            letterSpacing: '2.5px',
          },
        ],
        'xl-light': [
          '20px',
          {
            lineHeight: '30px',
            fontWeight: '400',
          },
        ],
        xl: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '700',
            letterSpacing: '-0.25px',
          },
        ],
        '2xl': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '700',
            letterSpacing: '-0.4px',
          },
        ],
        '3xl': [
          '48px',
          {
            lineHeight: '48px',
            fontWeight: '700',
            letterSpacing: '-0.5px',
          },
        ],
        '4xl': [
          '80px',
          {
            lineHeight: '80px',
            fontWeight: '300',
            letterSpacing: '-1px',
          },
        ],
      },
      backgroundImage: {
        heroHomeMob: 'url("./assets/homepage/hero-bg-mobile@2x.jpg")',
        heroHomeTab: 'url("./assets/homepage/hero-bg-tablet@2x.jpg")',
        heroHomeDesk: 'url("./assets/homepage/hero-bg-desktop@2x.jpg")',
        heroBookingMob: 'url("./assets/booking/hero-bg-mobile@2x.jpg")',
        heroBookingTab: 'url("./assets/booking/hero-bg-tablet@2x.jpg")',
        heroBookingDesk: 'url("./assets/booking/hero-bg-desktop@2x.jpg")',
        readyHomeMob: 'url("./assets/homepage/ready-bg-mobile@2x.jpg")',
        readyHomeTab: 'url("./assets/homepage/ready-bg-tablet@2x.jpg")',
        readyHomeDesk: 'url("./assets/homepage/ready-bg-desktop@2x.jpg")',
      },
      height: {
        79: '316px',
        80: '320px',
        82: '328px',
        150: '600px',
        187: '748px',
        248: '992px',
      },
      padding: {
        6.5: '26px',
        8.5: '34px',
        13: '52px',
        18: '72px',
        19: '76px',
        21: '84px',
        22: '88px',
        24: '96px',
        25: '100px',
        33: '132px',
        41: '164px',
        45: '180px',
        50: '200px',
        57: '232px',
        93: '372px',
        122: '490px',
      },
      width: {
        19: '76px',
        21: '82.4px',
        22: '88px',
        26: '104px',
        111: '444px',
        135: '540px',
        175: '700px',
      },
      margin: {
        18: '72px',
        21: '84px',
        22: '88px',
        25: '100px',
        29: '116px',
        31: '124px',
        35: '140px',
        38: '152px',
        45: '180px',
        48: '192px',
        58: '232px',
        85: '340px',
        110: '440px',
      },
      borderWidth: {
        1: '1px',
      },
      screens: {
        '3xl': '1740px',
      },
      boxShadow: {
        '3xl': '0 50px 55px -17px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
