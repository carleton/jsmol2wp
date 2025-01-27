Clazz.load(["java.lang.LinkageError"], "java.lang.ExceptionInInitializerError", null, function () {
	c$ = Clazz.decorateAsClass(function () {
		this.exception = null;
		Clazz.instantialize(this, arguments);
	}, java.lang, "ExceptionInInitializerError", LinkageError);
	Clazz.makeConstructor(c$,
		function () {
			Clazz.superConstructor(this, ExceptionInInitializerError);
			this.initCause(null);
		});
	Clazz.makeConstructor(c$,
		function (detailMessage) {
			Clazz.superConstructor(this, ExceptionInInitializerError, [detailMessage]);
			this.initCause(null);
		}, "~S");
	Clazz.makeConstructor(c$,
		function (exception) {
			Clazz.superConstructor(this, ExceptionInInitializerError);
			this.exception = exception;
			this.initCause(exception);
		}, "Throwable");
	Clazz.defineMethod(c$, "getException",
		function () {
			return this.exception;
		});
	Clazz.overrideMethod(c$, "getCause",
		function () {
			return this.exception;
		});
});
