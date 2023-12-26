export default {
  currentRoute(currentPath) {
    if(currentPath.startsWith('/guest_house')){
      return 'guest_house';
    } else if (currentPath.startsWith('/space')) {
      return 'space';
    } else if (currentPath.startsWith('/kurokamome')) {
      return 'kurokamome';
    } else {
      return '';
    }
  },
};
