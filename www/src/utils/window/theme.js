import themeDark from '@/assets/images/theme-dark.svg'
import themeLight from '@/assets/images/theme-light.svg'

const AUTO_COLORS = {
  light: {
    '--varBook-theme': 'light',
    '--varBook-background-color': '#fff',
    '--varBook-table-text-color': '#606266',
    '--varBook-table-border-color': '#ebeef5',
    '--varBook-table-box-shadow': '0px 0px 12px #ebeef5',
    '--varBook-input-background-color': '#fbfbfb',
    '--varBook-input-focus-box-shadow': '0px 0px 12px #e2e4e8',
    '--varBook-icon-theme': `url(${themeLight})`
  },
  dark: {
    '--varBook-theme': 'dark',
    '--varBook-background-color': '#272b38',
    '--varBook-table-text-color': '#bbbcbe',
    '--varBook-table-border-color': '#4b4f5b',
    '--varBook-table-box-shadow': '0px 0px 12px #43485c',
    '--varBook-input-background-color': '#f0f8ff',
    '--varBook-input-focus-box-shadow': '0 4px 14px 2px #606266',
    '--varBook-icon-theme': `url(${themeDark})`
  }
}

const color = {
  set(theme) {
    const root = document.querySelector(':root')
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in AUTO_COLORS[theme]) {
      root.style.setProperty(key, AUTO_COLORS[theme][key])
    }
  },
  setLight: () => {
    color.set('light')
  },
  setDark: () => {
    color.set('dark')
  },
  toggle: () => {
    const root = document.querySelector(':root')
    const theme = root.style.getPropertyValue('--varBook-theme')
    // eslint-disable-next-line no-unused-expressions
    theme === 'light' ? color.setDark() : color.setLight()
  },
  auto: () => {
    const check = (isLight) => {
      // eslint-disable-next-line no-unused-expressions
      isLight ? color.setLight() : color.setDark()
    }
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)')
    check(themeMedia.matches)

    themeMedia.addEventListener('change', (e) => {
      check(e.matches)
    })
  }
}

// eslint-disable-next-line import/prefer-default-export
export { color }
