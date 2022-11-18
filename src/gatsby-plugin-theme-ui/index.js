import { dark } from '@theme-ui/presets'

const theme = {
  ...dark,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace',
  },
  cards: {
    large: {
      backgroundColor: '#222323',
      borderRadius: 10,
      image: {
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
      },
    },
    medium: {
      backgroundColor: '#222323',
      borderRadius: 10,
      image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        objectFit: 'cover',
        height: '300px',
        width: '100%',
      },
    },
    small: {
      backgroundColor: '#222323',
      borderRadius: 10,
      image: {
        borderRadius: 10,
        objectFit: 'cover',
        width: '400px',
      },
    },
  },
}

export default theme