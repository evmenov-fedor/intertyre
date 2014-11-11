	function calculate() 
	{
		oldA.innerHTML = oldWidth.value;
		newA.innerHTML = newWidth.value;
		difA.innerHTML = newA.innerHTML - oldA.innerHTML;
									
		oldC.innerHTML = Math.round(oldRadius.value*25.4);
		newC.innerHTML = Math.round(newRadius.value*25.4);
		difC.innerHTML = newC.innerHTML - oldC.innerHTML;
									
		oldD.innerHTML = Math.round(oldWidth.value*oldProfile.value*0.02+oldRadius.value*25.4);
		newD.innerHTML = Math.round(newWidth.value*newProfile.value*0.02+newRadius.value*25.4);
		difD.innerHTML = newD.innerHTML - oldD.innerHTML;
									
		oldB.innerHTML = Math.round((oldD.innerHTML - oldC.innerHTML)/2);
		newB.innerHTML = Math.round((newD.innerHTML - newC.innerHTML)/2);
		difB.innerHTML = newB.innerHTML - oldB.innerHTML;
									
		difClearense.innerHTML = (Math.round(newWidth.value*newProfile.value*0.02+newRadius.value*25.4)-Math.round(oldWidth.value*oldProfile.value*0.02+oldRadius.value*25.4))/2;
									
		newSpeed.innerHTML = Math.round((Math.round(newWidth.value*newProfile.value*0.02+newRadius.value*25.4)/Math.round(oldWidth.value*oldProfile.value*0.02+oldRadius.value*25.4))*oldSpeed.value*100)/100;
		difSpeed.innerHTML = Math.round((newSpeed.innerHTML - oldSpeed.value)*100)/100;
									
		newSize.innerHTML = newWidth.value + '/' + newProfile.value + ' R' + newRadius.value;
	}
				
	function calculateWidth()
	{
		var width = document.getElementById('paramWidth').value;
		var profile = document.getElementById('paramProfile').value;
		var radius = document.getElementById('paramRadius').value;
											
		if(profile<50) scalar=0.85;
		if(profile>=50) scalar=0.7;
											
		rimWidthMin = (Math.round(((width*scalar)*0.03937)*2))/2;
		rimWidthMax = (rimWidthMin+1.5);
											
		document.getElementById('resultWidthMin').innerHTML = rimWidthMin;
		document.getElementById('resultWidthMax').innerHTML = rimWidthMax;
		document.getElementById('resultDiameter').innerHTML = radius;
	}
											
	var oldA = document.getElementById('oldA');
	var newA = document.getElementById('newA');
	var difA = document.getElementById('difA');

	var oldB = document.getElementById('oldB');
	var newB = document.getElementById('newB');
	var difB = document.getElementById('difB');

	var oldC = document.getElementById('oldC');
	var newC = document.getElementById('newC');
	var difC = document.getElementById('difC');

	var oldD = document.getElementById('oldD');
	var newD = document.getElementById('newD');
	var difD = document.getElementById('difD');

	var oldWidth = document.getElementById('oldWidth');
	var newWidth = document.getElementById('newWidth');
	var oldRadius = document.getElementById('oldRadius');
	var newRadius = document.getElementById('newRadius');
	var newProfile = document.getElementById('newProfile');
	var oldProfile = document.getElementById('oldProfile');
	var newSpeed = document.getElementById('newSpeed');
	var oldSpeed = document.getElementById('oldSpeed');

	var difClearense = document.getElementById ('difClearense');
	var newSpeed = document.getElementById ('newSpeed');
	var difSpeed = document.getElementById ('difSpeed');

	calculate();											
											
											
											