const makeChange = (c) => {
  // your name here
  let quarter=0,dime=0,nickel=0,penny=0;
  while(c>0){
	  if(c>=25){
		  c-=25;
		  quarter++;
	  }
	  else if(c>=10){
		  c-=10;
		  dime++;
	  }else if(c>=5){
		  c-=5;
		  nickel++;
	  }else{
		  c-=1;
		  penny++; 
	  }
  }
  const ans={"q":quarter,"d":dime,"n":nickel,"p":penny};
  return ans;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
