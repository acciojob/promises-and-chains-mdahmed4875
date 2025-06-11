let form=document.getElementById("form");
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());
	if(name.value==""||age.value==null){
		alert("Please enter valid details.");
		return;
	}
	const validation=new promise((res,rej)=>{
	setTimeout(()=>{
		if(age>18){
			res(name);
		}
		else{
			rej(name);
		}
	},4000)
	validation.then((uname)=>{
		alert(`Welcome, ${uname}. You can vote.`);
	}).catch(()=>{
		alert(`Oh sorry ${uname}. You aren't old enough.`);
	})
})
})