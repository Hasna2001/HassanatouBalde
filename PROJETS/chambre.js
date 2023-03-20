
		var condition = /^[a-zA-Z]{2,}$/;

		var sexeId = document.getElementById('sexe');
		sexeId.addEventListener('mouseover',function() {
			var erreur0 = document.getElementById('error0');
			erreur0.innerHTML = "<img src='images/info.png'> Votre sexe";
			var masculinId = document.getElementById('masculin');
			var femininId = document.getElementById('feminin');
			masculinId.addEventListener('click',function () {
				erreur0.innerHTML = "<img src='images/good.png'>";
			});
			femininId.addEventListener('click',function () {
				erreur0.innerHTML = "<img src='images/good.png'>";
			});
			});

		var nomId = document.getElementById('nom'); 
		var mesErreurs = document.getElementById('error');
			
			nomId.addEventListener("focus",function(){
				var mesErreurs = document.getElementById("error");
				mesErreurs.innerHTML = "<img src='images/info.png'> Le nom doit contenir au moins deux caractères";
				
				nomId.addEventListener("input",function(){
				if(condition.test(this.value)) {
					mesErreurs.innerHTML = "<img src='images/good.png'>";
				} 
				else{
					mesErreurs.innerHTML = "<img src='images/bad.png'> Le nom doit contenir au moins deux caractères";
				}
				});
			});

		var prenomId = document.getElementById('prenom'); 
		var mesErreurs1 = document.getElementById('error1');
		prenomId.addEventListener("focus",function(){
				var mesErreurs1 = document.getElementById("error1");
				mesErreurs1.innerHTML = "<img src='images/info.png'> Le prenom doit contenir au moins deux caractères";
				
				prenomId.addEventListener("input",function(){
				if(condition.test(this.value)) {
					mesErreurs1.innerHTML = "<img src='images/good.png'>";
				} 
				else{
					mesErreurs1.innerHTML = "<img src='images/bad.png'> Le prenom doit contenir au moins deux caractères";
				}
				});
			});


		var nbrePersones = document.getElementById('age'); 
		var mesErreurs3 = document.getElementById('error3');
		nbrePersones.addEventListener("focus",function(){
				mesErreurs3.innerHTML = "<img src='images/info.png'> L'age doit être un nombre compris entre 5 et 140 ";
				
				nbrePersones.addEventListener("input",function(e){
				if(((e.target.value) < 1) || ((e.target.value) > 7)) {
					mesErreurs3.innerHTML = "<img src='images/bad.png'> Le nombre de personnes doit être  compris entre 1 et 7";
				} 
				else{
					mesErreurs3.innerHTML = "<img src='images/good.png'>";
				}
				});
			});

		var conditionPseudo = /^[a-zA-Z]{4,}$/;
		var pseudoId = document.getElementById('pseudo'); 
		var mesErreurs4 = document.getElementById('error4');
		pseudoId.addEventListener("focus",function(){
				mesErreurs4.innerHTML = "<img src='images/info.png'> Le pseudo doit contenir au moins quatres caractères";
				
				pseudoId.addEventListener("input",function(){
				if(conditionPseudo.test(this.value)) {
					mesErreurs4.innerHTML = "<img src='images/good.png'>";
				} 
				else{
					mesErreurs4.innerHTML = "<img src='images/bad.png'> Le pseudo doit contenir au moins quatres caractères";
				}
				});
			});

		var conditionMotDePasse = /^[a-zA-Z0-9]{8,}$/;
		var mdpId = document.getElementById('mdp'); 
		var mesErreurs5 = document.getElementById('error5');
		mdpId.addEventListener("focus",function(){
				mesErreurs5.innerHTML = "<img src='images/info.png'> Le mot de passe doit contenir au moins quatres caractères";
				
				mdpId.addEventListener("input",function(){
				if(conditionMotDePasse.test(this.value)) {
					mesErreurs5.innerHTML = "<img src='images/good.png'>";
				} 
				else{
					mesErreurs5.innerHTML = "<img src='images/bad.png'> Le mot de passe doit contenir au moins quatres caractères";
				}
				});
			});


		var mdpConfirmationId = document.getElementById('mdpconfirmation'); 
		var mesErreurs6 = document.getElementById('error6');
		mdpConfirmationId.addEventListener("focus",function(){
				mesErreurs6.innerHTML = "<img src='images/info.png'> Confirmez mot de passe";
				
				mdpConfirmationId.addEventListener("input",function(){
				if(conditionMotDePasse.test(this.value)) {
					mesErreurs6.innerHTML = "<img src='images/good.png'>";
				} 
				else{
					mesErreurs6.innerHTML = "<img src='images/bad.png'> Le mot de passe doit contenir au moins quatres caractères";
				}
				});
			});

		var paysId = document.getElementById('region'); 
		var mesErreurs7 = document.getElementById('error7');
		paysId.addEventListener("focus",function(){
				mesErreurs7.innerHTML = "<img src='images/info.png'> Selectionner votre region";
				
				paysId.addEventListener("input",function(){
				if(condition.test(this.value)) {
					mesErreurs7.innerHTML = "<img src='images/good.png'>";
					var erreur8 = document.getElementById('error8');
					erreur8.innerText = "";
				} 
				else{
					mesErreurs7.innerHTML = "<img src='images/bad.png'> Selectionner votre region";
				}
				});
			});
	