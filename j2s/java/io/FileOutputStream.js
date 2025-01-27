Clazz.load(["java.io.Closeable", "$.OutputStream"], "java.io.FileOutputStream", ["java.lang.IndexOutOfBoundsException", "$.NullPointerException"], function () {
	c$ = Clazz.decorateAsClass(function () {
		this.fd = null;
		this.innerFD = false;
		Clazz.instantialize(this, arguments);
	}, java.io, "FileOutputStream", java.io.OutputStream, java.io.Closeable);
	Clazz.makeConstructor(c$,
		function (file) {
			this.construct(file, false);
		}, "java.io.File");
	Clazz.makeConstructor(c$,
		function (file, append) {
			Clazz.superConstructor(this, java.io.FileOutputStream);
		}, "java.io.File,~B");
	Clazz.makeConstructor(c$,
		function (fd) {
			Clazz.superConstructor(this, java.io.FileOutputStream);
			if (fd == null) {
				throw new NullPointerException(("K006c"));
			}
		}, "java.io.FileDescriptor");
	Clazz.makeConstructor(c$,
		function (filename) {
			this.construct(filename, false);
		}, "~S");
	Clazz.makeConstructor(c$,
		function (filename, append) {
			this.construct(Clazz.castNullAs("java.io.File"), append);
		}, "~S,~B");
	Clazz.overrideMethod(c$, "close",
		function () {
			if (this.fd == null) {
				return;
			}
		});
	Clazz.overrideMethod(c$, "finalize",
		function () {
			this.close();
		});
	Clazz.defineMethod(c$, "getFD",
		function () {
			return this.fd;
		});
	Clazz.defineMethod(c$, "write",
		function (buffer) {
			this.write(buffer, 0, buffer.length);
		}, "~A");
	Clazz.defineMethod(c$, "write",
		function (buffer, offset, count) {
			if (buffer == null) {
				throw new NullPointerException();
			}
			if (count < 0 || offset < 0 || offset > buffer.length || count > buffer.length - offset) {
				throw new IndexOutOfBoundsException();
			}
			if (count == 0) {
				return;
			}
		}, "~A,~N,~N");
	Clazz.defineMethod(c$, "write",
		function (oneByte) {
		}, "~N");
});
