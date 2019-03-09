
// This handles the initial dashboard navigation and changes the main id with only the called page
const pageNamesById = {
  newMail: 'sendMail',
  inbox: 'inboxList',
  sent: 'sentList',
  draft: 'draftList',
  deleted: 'deletedList',
  retracted: 'retractedList',
  createGroup: 'createGroup',
  profile: 'profile',
  groupList:'groupList',
  groupMessage: 'groupMessage',
};
function dashboard(id) {
  const main = document.getElementById('main');
  const pageName = pageNamesById[id];
  if (pageName) {
    main.innerHTML = '<object type="text/html" data="https://tochies.github.io/Andela-Epic-mail/html/dashboard/'+ pageName + '.html"></object>';
  }
}
function openSlideMenu(){
			document.getElementById('sidenav').style.visibility = 'visible';
			document.getElementById('close').style.visibility = 'visible';
		}
function closeSlideMenu(){
	document.getElementById('sidenav').style.visibility = 'hidden';
	document.getElementById('close').style.visibility = 'hidden';
	}