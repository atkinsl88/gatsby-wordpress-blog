import { dark } from '@theme-ui/presets'

const theme = {
  ...dark,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 10,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
  },
}

export default theme