import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.googleFonts = [
  {
    name: 'Space Mono',
    styles: ["400", "400i", "700", "700i"],
  }
]

altonTheme.headerFontFamily = ["Space Mono", "sans-serif"]
altonTheme.bodyFontFamily = ["Space Mono", "georgia", "sans-serif"]
altonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  "a:hover,a:active": {
    color: "#ff5700",
    textDecoration: "none"
  }
})

const typography = new Typography(altonTheme)
export const { scale, rhythm, options } = typography
export default typography