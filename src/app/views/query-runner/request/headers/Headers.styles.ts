import { FontSizes } from '@uifabric/styling';

export const headerStyles = () => {
  return {
    container: {
      // width: '98%',
      textAlign: 'center',
      padding: 10,
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    itemContent: {
      marginTop: '2.5%',
    },
    rowContainer: {
      fontSize: FontSizes.medium,
      position: 'relative',
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headersList: { marginBottom: '120px' }
  };
};
