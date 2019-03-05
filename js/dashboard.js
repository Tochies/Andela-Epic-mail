
// This handles the initial dashboard navigation and changes the html main id with only the called page
// page ids below from dashboard.html
const pageNamesById = {
  newMail: 'sendMail',
  inbox: 'inboxList',
  sent: 'sentList',
  draft: 'draftList',
  deleted: 'deletedList',
  retracted: 'retractedList',
  createGroup: 'createGroup',
  profile: 'profile',
  groupList: 'groupList',
  groupMessage: 'groupMessage',
};
function dashboard(id) {
  const main = document.getElementById('main');
  const pageName = pageNamesById[id];
  // changes the view to the page called
  if (pageName) {
    main.innerHTML = `<object type="text/html" data="html/dashboard/${pageName}.html"></object>`;
  }
}

// This handles(opens) the navigation for mobile screens
function openSlideMenu() {
  document.getElementById('sidenav').style.visibility = 'visible';
  document.getElementById('close').style.visibility = 'visible';
}

// This handles(closes) the navigation for mobile screens
function closeSlideMenu() {
  document.getElementById('sidenav').style.visibility = 'hidden';
  document.getElementById('close').style.visibility = 'hidden';
}
