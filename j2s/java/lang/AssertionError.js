Clazz.load(["java.lang.Error"], "java.lang.AssertionError", ["java.lang.Double", "$.Float", "$.Long"], function () {
	c$ = Clazz.declareType(java.lang, "AssertionError", Error);
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			Clazz.superConstructor(this, AssertionError, [String.valueOf(detailMessage), (Clazz.instanceOf(detailMessage, Throwable) ? detailMessage : null)]);
		}, "~O");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(String.valueOf(detailMessage));
		}, "~B");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(String.valueOf(detailMessage));
		}, "~N");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(Integer.toString(detailMessage));
		}, "~N");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(Long.toString(detailMessage));
		}, "~N");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(Float.toString(detailMessage));
		}, "~N");
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			this.construct(Double.toString(detailMessage));
		}, "~N");
});
