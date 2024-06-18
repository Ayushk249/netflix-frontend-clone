const tabIcons = document.querySelectorAll('.tab-item');
// This would be a node list of all the tab icons

const tabContents = document.querySelectorAll('.tab-content-item');


const selectItem = (event) => {
    // removing border from all tabs
    removeBorder();
    // adding red border to current tab
    TabElement = event.currentTarget;
    TabElement.classList.add('tab-border');
    
    TabElementId = TabElement.id;
    contentId = TabElementId + '-content';

    tabContents.forEach((tabContent) => {tabContent.id === contentId ? tabContent.classList.add('show') : tabContent.classList.remove('show')});
}


const removeBorder = () => {
    tabIcons.forEach(tabIcon => tabIcon.classList.remove('tab-border'));
}

// Adding event listener to all tab icons
tabIcons.forEach(tabIcon => tabIcon.addEventListener('click',selectItem));
