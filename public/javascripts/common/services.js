var CommonServices = angular.module("CommonServices", []);

CommonServices.factory('ModalInstanseObject',  function(){
	return {
		makeModal: function(template, controller, size, resolve){
			this.templateUrl = template,
			this.controller = controller,
			this.size = size,
			this.resolve = resolve
		}
	}
});