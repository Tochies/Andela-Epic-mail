
// This handles the initial dashboard navigation and changes the main id with only the called page
function dashboard(id){
	main = document.getElementById('main');
	switch(id){
		case 'newMail':
			return main.innerHTML = '<object type="text/html" data="https://tochies.github.io/Andela-Epic-mail/html/dashboard/sendMail.html"></object>';
		
		case 'inbox':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/inboxList.html"></object>';
		
		case 'sent':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/sentList.html"></object>';
		
		case 'draft':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/draftList.html"></object>';
		
		case 'deleted':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/deletedList.html"></object>';
		
		case 'retracted':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/retractedList.html"></object>';
		
		case 'createGroup':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/createGroup.html"></object>';
		
		case 'groupList':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/groupList.html"></object>';
		
		case 'groupMessage':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/groupMessage.html"></object>';
		
		case 'profile':
			return main.innerHTML = '<object type="text/html" data="file:///home/tochie/andela_challenge/UI/html/dashboard/profile.html"></object>';
		
		default:
			return document;
	}
}

