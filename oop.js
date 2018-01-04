
// This OOP is modeled for real-time Phone Manufacturers to keep cost of phones and production output.

function Phone(name,color,memory,dimension,operatingSystem){
	this.name = name;
	this.color = color;
	this.memory = memory;
	this.dimension = dimension;
	this.operatingSystem = operatingSystem;

	this.cost = 5000;
}

Phone.prototype.increaseCost = function(amount){
	if(typeof amount==="number"){		
		if(amount <= (this.cost/2)){	
			this.cost += amount;
		}
		else{
			throw new Error("Amount must be less than 50% of the current Cost");
		}
	}
	else{
		throw new Error("Amount to add must be a number");
	}
}


Phone.prototype.getCost = function(){
	return this.cost;
}
 
Phone.prototype.setOperatingSystem = function(newOperatingSystem){
	this.operatingSystem = newOperatingSystem;
}

Phone.prototype.getOperatingSystem = function(){
	return this.operatingSystem;
}


Phone.prototype.memoryUpgrade = function(newMemory){
	if(typeof memory ==="number"){
		this.memory = newMemory;
	}
	else{
		throw new Error("Only RAM size can be upgraded");
	}
}


function Techno(name,color,memory,dimension,OperatingSystem){
	Phone.call(this,name,color,memory,dimension,OperatingSystem);
	this.Battery = 1;		 
	this.cost = 3000;	
}


Techno.prototype = Object.create(Phone.prototype);


Techno.prototype.nosBattery = function(howMany){
	if(typeof howMany === "number"){
		this.Battery += howMany;
	}
	else{
		throw new Error("The argument must be a number");
	}
}	


Techno.prototype.increaseCost = function(amount){
	if(typeof amount==="number"){
		if(amount<=(this.cost/5)){ 
			this.cost += amount;
		}
		else{
			throw new Error("Amount must be less than 20% of the current Cost");
		}
	}
	else{
		throw new Error("Amount must be a number");
	}
}


