
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
<<<<<<< HEAD
    main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/' + pageName + '.html"></object>';
=======
    main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/' + pageName + '.html"></object>';
>>>>>>> 280ef949152e3eeb673c26de1f89f7ec01b261d0
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