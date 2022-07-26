let menutoggle = document.querySelector('.menutoggle');
		let navigation = document.querySelector('.navigation');
		menutoggle.onclick = function(){
			menutoggle.classList.toggle('active');
			navigation.classList.toggle('active');
		}