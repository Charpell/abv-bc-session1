
// This OOP is modeled for real-time Phone Manufacturers to keep cost of phones and production output.

//create the Phone class/constructor

function Phone(name,color,memory,dimension,operatingSystem){

		//creating the object properties
	this.name = name;
	this.color = color;
	this.memory = memory;
	this.dimension = dimension;
	this.operatingSystem = operatingSystem;

		// This property will be constant for every created object
	this.cost = 5000;
}

		// A method that increase the cost of a phone
Phone.prototype.increaseCost = function(amount){
	if(typeof amount==="number"){		
		if(amount <= (this.cost/2)){	//this prevents increament of more than 50% of the phone's cost
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


		// This method gets the current Cost
Phone.prototype.getCost = function(){
	return this.cost;
}

		// This method allows the manufacturer change the operating System of the Phone  
Phone.prototype.setOperatingSystem = function(newOperatingSystem){
	this.operatingSystem = newOperatingSystem;
}

		// This method gets the current OperatingSystem of a phone
Phone.prototype.getOperatingSystem = function(){
	return this.operatingSystem;
}

	// This method upgrades the memory allocation of the phone
Phone.prototype.memoryUpgrade = function(newMemory){
	if(typeof memory ==="number"){
		this.memory = newMemory;
	}
	else{
		throw new Error("Only RAM size can be upgraded");
	}
}






	// Lets create ann Instance of Phone's Class. Creating a Techno brand (class for all techno smartphones) which inherits from the Phone class.
function Techno(name,color,memory,dimension,OperatingSystem){
	Phone.call(this,name,color,memory,dimension,OperatingSystem);	// this makes the Phone's properties available for Techno Production, without repeating ourselves
	this.Battery = 1;		 //Techno now has an additional property called Battery
	this.cost = 3000;		 //this overrides the Cost property of the super class 
}

 	// this assigns the Phone's prototype to Techno's prototype so that all the methods in Phone will be available for Techno to use
Techno.prototype = Object.create(Phone.prototype);

	// This method will determine the number of battery each techno brand phone will have
Techno.prototype.nosBattery = function(howMany){
	if(typeof howMany === "number"){
		this.Battery += howMany;
	}
	else{
		throw new Error("The argument must be a number");
	}
}	

// This method overrides the cost attribute in the superclass because i want to implement it differently
Techno.prototype.increaseCost = function(amount){
	if(typeof amount==="number"){
		if(amount<=(this.cost/5)){ //this prevents more than 20% increament
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



