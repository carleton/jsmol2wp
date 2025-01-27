Clazz.declarePackage("J.shape");
Clazz.load(["J.shape.FontLineShape"], "J.shape.Bbcage", null, function () {
	c$ = Clazz.decorateAsClass(function () {
		this.isVisible = false;
		Clazz.instantialize(this, arguments);
	}, J.shape, "Bbcage", J.shape.FontLineShape);
	Clazz.overrideMethod(c$, "setProperty",
		function (propertyName, value, bs) {
			this.setPropFLS(propertyName, value);
		}, "~S,~O,JU.BS");
	Clazz.defineMethod(c$, "initShape",
		function () {
			Clazz.superCall(this, J.shape.Bbcage, "initShape", []);
			this.font3d = this.vwr.gdata.getFont3D(14);
			this.myType = "boundBox";
		});
	Clazz.overrideMethod(c$, "setModelVisibilityFlags",
		function (bs) {
			var bboxModels;
			this.isVisible = ((this.mad = this.vwr.getObjectMad(4)) != 0 && ((bboxModels = this.vwr.ms.bboxModels) == null || bs.intersects(bboxModels)));
		}, "JU.BS");
});
