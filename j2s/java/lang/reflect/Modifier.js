Clazz.load(null, "java.lang.reflect.Modifier", ["java.lang.reflect.Method"], function () {
	c$ = Clazz.declareType(java.lang.reflect, "Modifier");
	Clazz.makeConstructor(c$,
		function () {
		});
	c$.isAbstract = Clazz.defineMethod(c$, "isAbstract",
		function (modifiers) {
			return ((modifiers & 1024) != 0);
		}, "~N");
	c$.isFinal = Clazz.defineMethod(c$, "isFinal",
		function (modifiers) {
			return ((modifiers & 16) != 0);
		}, "~N");
	c$.isInterface = Clazz.defineMethod(c$, "isInterface",
		function (modifiers) {
			return ((modifiers & 512) != 0);
		}, "~N");
	c$.isNative = Clazz.defineMethod(c$, "isNative",
		function (modifiers) {
			return ((modifiers & 256) != 0);
		}, "~N");
	c$.isPrivate = Clazz.defineMethod(c$, "isPrivate",
		function (modifiers) {
			return ((modifiers & 2) != 0);
		}, "~N");
	c$.isProtected = Clazz.defineMethod(c$, "isProtected",
		function (modifiers) {
			return ((modifiers & 4) != 0);
		}, "~N");
	c$.isPublic = Clazz.defineMethod(c$, "isPublic",
		function (modifiers) {
			return ((modifiers & 1) != 0);
		}, "~N");
	c$.isStatic = Clazz.defineMethod(c$, "isStatic",
		function (modifiers) {
			return ((modifiers & 8) != 0);
		}, "~N");
	c$.isStrict = Clazz.defineMethod(c$, "isStrict",
		function (modifiers) {
			return ((modifiers & 2048) != 0);
		}, "~N");
	c$.isSynchronized = Clazz.defineMethod(c$, "isSynchronized",
		function (modifiers) {
			return ((modifiers & 32) != 0);
		}, "~N");
	c$.isTransient = Clazz.defineMethod(c$, "isTransient",
		function (modifiers) {
			return ((modifiers & 128) != 0);
		}, "~N");
	c$.isVolatile = Clazz.defineMethod(c$, "isVolatile",
		function (modifiers) {
			return ((modifiers & 64) != 0);
		}, "~N");
	c$.toString = Clazz.defineMethod(c$, "toString",
		function (modifiers) {
			var sb = new Array(0);
			if (java.lang.reflect.Modifier.isPublic(modifiers)) sb[sb.length] = "public";
			if (java.lang.reflect.Modifier.isProtected(modifiers)) sb[sb.length] = "protected";
			if (java.lang.reflect.Modifier.isPrivate(modifiers)) sb[sb.length] = "private";
			if (java.lang.reflect.Modifier.isAbstract(modifiers)) sb[sb.length] = "abstract";
			if (java.lang.reflect.Modifier.isStatic(modifiers)) sb[sb.length] = "static";
			if (java.lang.reflect.Modifier.isFinal(modifiers)) sb[sb.length] = "final";
			if (java.lang.reflect.Modifier.isTransient(modifiers)) sb[sb.length] = "transient";
			if (java.lang.reflect.Modifier.isVolatile(modifiers)) sb[sb.length] = "volatile";
			if (java.lang.reflect.Modifier.isSynchronized(modifiers)) sb[sb.length] = "synchronized";
			if (java.lang.reflect.Modifier.isNative(modifiers)) sb[sb.length] = "native";
			if (java.lang.reflect.Modifier.isStrict(modifiers)) sb[sb.length] = "strictfp";
			if (java.lang.reflect.Modifier.isInterface(modifiers)) sb[sb.length] = "interface";
			if (sb.length > 0) {
				return sb.join(" ");
			}
			return "";
		}, "~N");
	Clazz.defineStatics(c$,
		"PUBLIC", 0x1,
		"PRIVATE", 0x2,
		"PROTECTED", 0x4,
		"STATIC", 0x8,
		"FINAL", 0x10,
		"SYNCHRONIZED", 0x20,
		"VOLATILE", 0x40,
		"TRANSIENT", 0x80,
		"NATIVE", 0x100,
		"INTERFACE", 0x200,
		"ABSTRACT", 0x400,
		"STRICT", 0x800,
		"BRIDGE", 0x40,
		"VARARGS", 0x80,
		"SYNTHETIC", 0x1000,
		"ANNOTATION", 0x2000,
		"ENUM", 0x4000);
});
