Clazz.load(["java.lang.RuntimeException"], "java.lang.UnsupportedOperationException", null, function () {
	c$ = Clazz.declareType(java.lang, "UnsupportedOperationException", RuntimeException);
	Clazz.makeConstructor(c$,
		function () {
			Clazz.superConstructor(this, UnsupportedOperationException, []);
		});
	Clazz.makeConstructor(c$,
		function (cause) {
			Clazz.superConstructor(this, UnsupportedOperationException, [(cause == null ? null : cause.toString()), cause]);
		}, "Throwable");
});
