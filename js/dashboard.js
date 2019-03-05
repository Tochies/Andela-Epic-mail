
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
    main.innerHTML = `<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/${pageName}.html"></object>`;
  }
}