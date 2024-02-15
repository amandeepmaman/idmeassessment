export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  export const formatPurchasePrice = (priceInCents) => {
    const dollars = priceInCents / 100;
    return `$${dollars.toFixed(2)}`;
  };
  
  export const getCategoryClass = (category) => {
    switch (category) {
      case 'Technology':
        return 'technology-category';
      case 'Entertainment':
        return 'entertainment-category';
      case 'Automotive':
        return 'automotive-category';
      case 'Shopping':
        return 'shopping-category';
      default:
        return '';
    }
  };
  