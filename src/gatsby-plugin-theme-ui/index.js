import { dark } from '@theme-ui/presets'

const theme = {
  ...dark,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace',
  },
  cards: {
    primary: {
      backgroundColor: '#222323',
      borderRadius: 10,
      image: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
      },
    },
  },
}

export default theme