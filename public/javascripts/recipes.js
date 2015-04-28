

var File = function(file){
	this.id = this.createId(file.fileName);
	this.name = file.fileName;
	this.layers = [new Layer({name:"background", width:1*file.fileWidth, height:1*file.fileHeight})];
}

File.prototype.createId = function(name){
	return name;
}

var Layer = function(layer){
	this.id = this.createId(layer.name);
	this.name = layer.name
	this.width = 1*layer.width;
	this.height = 1*layer.height;
	this.visible = true;
	this.context = null;	
}

Layer.prototype.createId = function(name){
	return name
}

Layer.prototype.makeCtx = function(element){
	if(!this.context){
		this.context = element[0].getContext('2d');
	}
}