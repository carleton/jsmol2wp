Clazz.declarePackage("J.quantum");
Clazz.load(null, "J.quantum.QS", ["java.lang.Character", "$.Float", "JU.SB"], function () {
	c$ = Clazz.declareType(J.quantum, "QS");
	Clazz.makeConstructor(c$,
		function () {
		});
	c$.isQuantumBasisSupported = Clazz.defineMethod(c$, "isQuantumBasisSupported",
		function (ch) {
			return ("SPLDF".indexOf(Character.toUpperCase(ch)) >= 0);
		}, "~S");
	c$.getNewDfCoefMap = Clazz.defineMethod(c$, "getNewDfCoefMap",
		function () {
			return [Clazz.newIntArray(1, 0), Clazz.newIntArray(3, 0), Clazz.newIntArray(4, 0), Clazz.newIntArray(5, 0), Clazz.newIntArray(6, 0), Clazz.newIntArray(7, 0), Clazz.newIntArray(10, 0), Clazz.newIntArray(9, 0), Clazz.newIntArray(15, 0), Clazz.newIntArray(11, 0), Clazz.newIntArray(21, 0), Clazz.newIntArray(13, 0), Clazz.newIntArray(28, 0)];
		});
	c$.getItem = Clazz.defineMethod(c$, "getItem",
		function (i) {
			return (i >= 0 && i < 13 ? i : -1);
		}, "~N");
	c$.getQuantumShellTagID = Clazz.defineMethod(c$, "getQuantumShellTagID",
		function (tag) {
			if (tag.equals("L")) return 2;
			return J.quantum.QS.getQuantumShell(tag);
		}, "~S");
	c$.getQuantumShell = Clazz.defineMethod(c$, "getQuantumShell",
		function (tag) {
			for (var i = 0; i < 13; i++) if (J.quantum.QS.tags[i].equals(tag) || J.quantum.QS.tags2[i].equals(tag)) return i;

			return -1;
		}, "~S");
	c$.getQuantumShellTagIDSpherical = Clazz.defineMethod(c$, "getQuantumShellTagIDSpherical",
		function (tag) {
			if (tag.equals("L")) return 2;
			var id = J.quantum.QS.getQuantumShell(tag);
			return (id < 0 ? id : J.quantum.QS.idSpherical[id]);
		}, "~S");
	c$.getQuantumShellTag = Clazz.defineMethod(c$, "getQuantumShellTag",
		function (id) {
			return (id >= 0 && id < 13 ? J.quantum.QS.tags[id] : "" + id);
		}, "~N");
	c$.getMOString = Clazz.defineMethod(c$, "getMOString",
		function (lc) {
			var sb = new JU.SB();
			if (lc.length == 2) return "" + Clazz.floatToInt(lc[0] < 0 ? -lc[1] : lc[1]);
			sb.appendC('[');
			for (var i = 0; i < lc.length; i += 2) {
				if (i > 0) sb.append(", ");
				sb.appendF(lc[i]).append(" ").appendI(Clazz.floatToInt(lc[i + 1]));
			}
			sb.appendC(']');
			return sb.toString();
		}, "~A");
	Clazz.defineMethod(c$, "setNboLabels",
		function (tokens, nLabels, orbitals, nOrbitals0, moType) {
			for (var i = 0; i < tokens.length; i += nLabels + 2) if (moType.indexOf(tokens[i]) >= 0) {
				for (var j = 0; j < nLabels; j++) {
					var mo = orbitals.get(j + nOrbitals0);
					var type = tokens[i + j + 2];
					mo.put("type", moType + " " + type);
					mo.put("occupancy", Float.$valueOf(type.indexOf("*") >= 0 || type.indexOf("(ry)") >= 0 ? 0 : 2));
				}
				return;
			}
		}, "~A,~N,JU.Lst,~N,~S");
	Clazz.defineStatics(c$,
		"S", 0,
		"P", 1,
		"SP", 2,
		"DS", 3,
		"DC", 4,
		"FS", 5,
		"FC", 6,
		"GS", 7,
		"GC", 8,
		"HS", 9,
		"HC", 10,
		"IS", 11,
		"IC", 12,
		"MAXID", 13,
		"idSpherical", [0, 1, 2, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11],
		"tags", ["S", "P", "SP", "5D", "D", "7F", "F", "9G", "G", "11H", "H", "13I", "I"],
		"tags2", ["S", "X", "SP", "5D", "XX", "7F", "XXX", "9G", "XXXX", "11H", "XXXXX", "13I", "XXXXXX"]);
});
