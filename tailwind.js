/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig')()
let chroma = require('chroma-js')

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

let colors = {
  'transparent': 'transparent',

  'blue-20'   : '#ECF7FE',
  'blue-40'   : '#3D96FC',
  'blue'      : '#0672EE',
  'blue-80'   : '#0456B4',

  'green-20'  : '#EFFCF6',
  'green-40'  : '#2AA87A',
  'green'     : '#018756',
  'green-80'  : '#116546',

  'red-20'    : '#FEF0F3',
  'red-40'    : '#FF4365',
  'red'       : '#EA0D35',
  'red-80'    : '#B20827',

  'orange-20' : '#FFECE8',
  'orange-40' : '#FD5F38',
  'orange'    : '#E22D00',
  'orange-80' : '#AB2200',

  'purple-20' : '#EBEBFE',
  'purple-40' : '#8E8ED2',
  'purple'    : '#6E6EBA',
  'purple-80' : '#515193',

  'violet-20' : '#F5E4F0',
  'violet-40' : '#DB6AC5',
  'violet'    : '#C43FAA',
  'violet-80' : '#942D81',

  'yellow-20' : '#FAF6DC',
  'yellow-40' : '#F6DB36',
  'yellow'    : '#ECCC0D',
  'yellow-80' : '#887609',

  'gray-0'    : '#FFFFFF',
  'gray-10'   : '#F9FAFA',
  'gray-20'   : '#E3E5E8',
  'gray-40'   : '#B2BBBD',
  'gray-60'   : '#96A1A6',
  'gray-80'   : '#657683',
  'gray'      : '#33434E',
  'gray-100'  : '#222E37'
  
}

module.exports = {

  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    'sm' : '600px',
    'md' : '840px',
    'lg' : '1024px',
    'xl' : '1280px'
  },


  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    'sans': [
      'Gotham SSm A',
      'Gotham SSm B',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    'serif': [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    'mono': [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
  },


  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    'xs'      : '.75rem',      // 12px
    'small'   : '.875rem',     // 14px
    'default' : '1rem',        // 16px
    'medium'  : '1.125rem',    // 18px
    'large'   : '1.25rem',     // 20px
    'xl'      : '1.5rem',      // 24px
    'xxl'     : '1.75rem',     // 28px
    'xxxl'    : '2rem',        // 32px
  },


  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    'normal' : 400,
    'bold'   : 500,
  },


  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    'xs'      : '1rem',        // 16px
    'small'   : '1.25rem',     // 20px
    'default' : '1.5rem',      // 24px
    'medium'  : '1.75rem',     // 28px
    'xl'      : '2rem',        // 32px
    'xxl'     : '2.25rem',     // 36px
    'xxxl'    : '2.5rem',      // 40px
  },


  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    'tight'  : '-0.0625rem',   // -1px
    'normal' : '0',
    'wide'   : '0.0625rem',    // 1px
  },


  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,


  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background sizes. We provide some common
  | values that are useful in most projects, but feel free to add other sizes
  | that are specific to your project here as well.
  |
  | Class name: .bg-{size}
  |
  */

  backgroundSize: {
    'auto'    : 'auto',
    'cover'   : 'cover',
    'contain' : 'contain',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default : '1px',
    '0'     : '0',
    '2'     : '2px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: global.Object.assign({ default: colors['gray-20'] }, colors),


  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | If your scale includes a `0` value to reset already rounded corners, it's
  | a good idea to put it first so other values are able to override it.
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    'none'  : '0',
    'small' : '.125rem',   // 2px
    default : '.25rem',    // 4px
    'large' : '.5rem',     // 8px
    'full'  : '9999px',
  },


  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    'auto': 'auto',
    '4'      : '0.25rem',     // 4px
    '8'      : '0.5rem',      // 8px
    '16'     : '1rem',        // 16px
    '24'     : '1.5rem',      // 24px
    '32'     : '2rem',        // 32px
    '40'     : '2.5rem',      // 40px
    '48'     : '3rem',        // 48px
    '56'     : '3.5rem',      // 56px
    '64'     : '4rem',        // 64px
    '72'     : '4.5rem',      // 72px
    '80'     : '5rem',        // 80px
    '88'     : '5.5rem',      // 88px
    '96'     : '6rem',        // 96px
    '128'    : '8rem',        // 128px
    '192'    : '12rem',       // 192px
    '256'    : '16rem',       // 256px
    '1/2'    : '50%',
    '1/3'    : '33.33333%',
    '2/3'    : '66.66667%',
    '1/4'    : '25%',
    '3/4'    : '75%',
    '1/5'    : '20%',
    '2/5'    : '40%',
    '3/5'    : '60%',
    '4/5'    : '80%',
    '1/6'    : '16.66667%',
    '1/12'   : '8.333334',
    '5/6'    : '83.33333%',
    'full'   : '100%',
    'screen' : '100vw',
  },


  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    'auto': 'auto',
    '4'      : '0.25rem',     // 4px
    '8'      : '0.5rem',      // 8px
    '16'     : '1rem',        // 16px
    '24'     : '1.5rem',      // 24px
    '32'     : '2rem',        // 32px
    '40'     : '2.5rem',      // 40px
    '48'     : '3rem',        // 48px
    '56'     : '3.5rem',      // 56px
    '64'     : '4rem',        // 64px
    '72'     : '4.5rem',      // 72px
    '80'     : '5rem',        // 80px
    '88'     : '5.5rem',      // 88px
    '96'     : '6rem',        // 96px
    '128'    : '8rem',        // 128px
    '192'    : '12rem',       // 192px
    '256'    : '16rem',       // 256px
    'full'   : '100%',
    'screen' : '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    '0'   : '0',
    'xl'  : '64rem', // 1024px
    'full': '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    '0': '0',
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    'xs'   : '20rem',    // 320px
    'sm'   : '30rem',    // 480px
    'md'   : '40rem',    // 640px
    'lg'   : '50rem',    // 800px
    'xl'   : '60rem',    // 960px
    '2xl'  : '70rem',    // 1120px
    '3xl'  : '78rem',    // 1248px
    '4xl'  : '90rem',    // 1440px
    '5xl'  : '103rem',   // 1648px
    'full' : '100%',
  },


  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    'full': '100%',
    'screen': '100vh',
  },


  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    '0'  : '0',
    '4'  : '0.25rem',    // 4px
    '8'  : '0.5rem',     // 8px
    '12' : '0.75rem',    // 12px, 24px/2 – grid only
    '16' : '1rem',       // 16px
    '24' : '1.5rem',     // 24px
    '32' : '2rem',       // 32px
    '40' : '2.5rem',     // 40px
    '48' : '3rem',       // 48px
    '56' : '3.5rem',     // 56px
    '64' : '4rem',       // 64px
    '72' : '4.5rem',     // 72px
    '80' : '5rem',       // 80px
    '88' : '5.5rem',     // 88px
    '96' : '6rem',       // 96px
  },


  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    'auto': 'auto',
    '0'  : '0',
    '4'  : '0.25rem',    // 4px
    '8'  : '0.5rem',     // 8px
    '12' : '0.75rem',    // 12px, 24px/2 – grid only
    '16' : '1rem',       // 16px
    '24' : '1.5rem',     // 24px
    '32' : '2rem',       // 32px
    '40' : '2.5rem',     // 40px
    '48' : '3rem',       // 48px
    '56' : '3.5rem',     // 56px
    '64' : '4rem',       // 64px
    '72' : '4.5rem',     // 72px
    '80' : '5rem',       // 80px
    '88' : '5.5rem',     // 88px
    '96' : '6rem',       // 96px
  },


  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    '0': '0',
    '4'  : '0.25rem',    // 4px
    '8'  : '0.5rem',     // 8px
    '12' : '0.75rem',    // 12px, 24px/2 – grid only
    '16' : '1rem',       // 16px
    '24' : '1.5rem',     // 24px
    '32' : '2rem',       // 32px
    '40' : '2.5rem',     // 40px
    '48' : '3rem',       // 48px
    '56' : '3.5rem',     // 56px
    '64' : '4rem',       // 64px
    '72' : '4.5rem',     // 72px
    '80' : '5rem',       // 80px
    '88' : '5.5rem',     // 88px
    '96' : '6rem',       // 96px
  },


  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: '0 2px 2px 0 rgba(0, 0, 0, .12)',
    'sm': '0 2px 4px 0 rgba(0, 0, 0, .12)',
    'md': '0 2px 4px 0 rgba(0, 0, 0, .12)',
    'lg': '0 3px 6px 0 rgba(0, 0, 0, .12)',
    'xl': '0 8px 16px 0 rgba(0, 0, 0, .16)',
    'none': 'none',
    'focus': 'inset 0 0 0 1px' + colors.blue,
    'gray': '0 8px 8px -8px ' + colors.gray,
    'blue': '0 4px 12px -8px ' + colors['blue'] + ', 0 4px 4px -4px' + colors['blue-40'],
    'blue-light': '0 4px 12px -8px ' + colors['blue-40'],
    'green': '0 4px 12px -8px ' + colors['green'] + ', 0 4px 6px -6px' + colors['green-40'],
    'green-light': '0 4px 12px -8px ' + colors['green-40'],
    'red': '0 4px 12px -8px ' + colors['red'] + ', 0 4px 6px -6px' + colors['red-40'],
    'red-light': '0 4px 12px -8px ' + colors['red-40'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },


  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    '0': '0',
    '20': '.2',
    '40': '.4',
    '80': '.8',
    '100': '1',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG fill colors. By default we just provide
  | `fill-current` which sets the fill to the current text color. This lets you
  | specify a fill color using existing text color utilities and helps keep the
  | generated CSS file size down.
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your SVG stroke colors. By default we just provide
  | `stroke-current` which sets the stroke to the current text color. This lets
  | you specify a stroke color using existing text color utilities and helps
  | keep the generated CSS file size down.
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    'current': 'currentColor',
  },


  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    require('tailwindcss/plugins/container')({
      center: true,
      padding: '1.5rem',
    }),
  ],


  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },

}
