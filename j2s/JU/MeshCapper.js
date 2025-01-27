Clazz.declarePackage("JU");
Clazz.load(["JU.T3"], "JU.MeshCapper", ["java.util.Arrays", "$.Hashtable", "JU.Lst", "$.M4", "$.P3", "$.Quat", "$.V3", "JU.Logger"], function () {
	c$ = Clazz.decorateAsClass(function () {
		this.slicer = null;
		this.dumping = false;
		this.testing = false;
		this.capMap = null;
		this.vertices = null;
		this.lstRegions = null;
		this.nTriangles = 0;
		this.nRegions = 0;
		if (!Clazz.isClassDefined("JU.MeshCapper.CapVertex")) {
			JU.MeshCapper.$MeshCapper$CapVertex$();
		}
		Clazz.instantialize(this, arguments);
	}, JU, "MeshCapper");
	Clazz.makeConstructor(c$,
		function () {
		});
	Clazz.defineMethod(c$, "set",
		function (slicer) {
			this.slicer = slicer;
			this.dumping = JU.Logger.debugging;
			return this;
		}, "JU.MeshSlicer");
	Clazz.defineMethod(c$, "clear",
		function () {
			this.capMap = new java.util.Hashtable();
			this.vertices = new JU.Lst();
		});
	Clazz.defineMethod(c$, "addEdge",
		function (ipt1, ipt2, thisSet) {
			var v1 = this.addPoint(thisSet, ipt1);
			var v2 = this.addPoint(thisSet, ipt2);
			v1.link(v2);
		}, "~N,~N,~N");
	Clazz.defineMethod(c$, "addPoint",
		function (thisSet, i) {
			var ii = Integer.$valueOf(i);
			var v = this.capMap.get(ii);
			if (v == null) {
				var pt = this.slicer.m.vs[i];
				i = this.slicer.addIntersectionVertex(pt, 0, -1, thisSet, null, -1, -1);
				v = Clazz.innerTypeInstance(JU.MeshCapper.CapVertex, this, null, pt, i);
				this.vertices.addLast(v);
				this.capMap.put(ii, v);
			}
			if (this.dumping) JU.Logger.info(i + "\t" + this.slicer.m.vs[i]);
			return v;
		}, "~N,~N");
	Clazz.defineMethod(c$, "getInputPoint",
		function (v) {
			return (this.testing ? JU.P3.newP(v) : this.slicer.m.vs[v.ipt]);
		}, "JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "outputTriangle",
		function (ipt1, ipt2, ipt3) {
			this.slicer.addTriangle(ipt1, ipt2, ipt3);
		}, "~N,~N,~N");
	Clazz.defineMethod(c$, "test",
		function (vs) {
			return vs;
		}, "~A");
	Clazz.defineMethod(c$, "createCap",
		function (norm) {
			this.capMap = null;
			var vs = new Array(this.vertices.size());
			if (vs.length < 3) return;
			var vab = JU.V3.newVsub(this.vertices.get(0), this.vertices.get(1));
			var vac = JU.V3.newV(norm);
			vac.cross(vac, vab);
			var q = JU.Quat.getQuaternionFrameV(vab, vac, null, false);
			var m3 = q.getMatrix();
			var m4 = JU.M4.newMV(m3, this.vertices.get(0));
			var m4inv = JU.M4.newM4(m4).invert();
			this.vertices.toArray(vs);
			for (var i = vs.length; --i >= 0;) m4inv.rotTrans2(vs[i], vs[i]);

			this.vertices = null;
			vs = this.test(vs);
			JU.Logger.info("MeshCapper using " + vs.length + " vertices");
			var v0 = vs[0].sort(vs);
			if (v0 == null) {
				JU.Logger.error("two identical points -- aborting");
				return;
			}
			this.lstRegions = new JU.Lst();
			var v = v0;
			do {
				v = this.process(v);
			} while (v !== v0);
			this.clear();
			JU.Logger.info("MeshCapper created " + this.nTriangles + " triangles " + this.nRegions + " regions");
		}, "JU.V3");
	Clazz.defineMethod(c$, "process",
		function (v) {
			var q = v.qnext;
			v.qnext = null;
			if (this.dumping) JU.Logger.info(v.toString());
			if (v.prev === v.next) return q;
			var isDescending = (v.prev.region != null);
			var isAscending = (v.next.region != null);
			if (this.dumping) JU.Logger.info("#" + (isAscending ? v.next.id : "    ") + "    " + (isDescending ? v.prev.id : "") + "\n#" + (isAscending ? "   \\" : "    ") + (isDescending ? "    /\n" : "\n") + "#    " + v.id);
			if (!isDescending && !isAscending) {
				var last = this.getLastPoint(v);
				if (last == null) {
					this.newRegion(v);
					return q;
				}
				var p = this.processSplit(v, last);
				p.qnext = q;
				q = p;
				isAscending = true;
			}
			if (isDescending) {
				this.processMonotonic(v, true);
			}
			if (isAscending) {
				this.processMonotonic(v, false);
			}
			if (isDescending && isAscending) {
				if (v.prev.prev === v.next) {
					this.lstRegions.removeObj(v.region);
					this.addTriangle(v.prev, v, v.next, "end");
					v.prev.clear();
					v.next.clear();
				} else {
					v.region = null;
				}
			}
			return q;
		}, "JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "processMonotonic",
		function (v, isDescending) {
			var vEdge = (isDescending ? v.prev : v.next);
			v.region = vEdge.region;
			var last = v.region[2];
			if (last === v) {
				this.lstRegions.removeObj(v.region);
				return;
			}
			var v2;
			var v1;
			if (last === vEdge) {
				v1 = last;
				v2 = (isDescending ? v1.prev : v1.next);
				while (v2 !== v && v2.qnext == null && isDescending == (v.x > v.interpolateX(v2, v1))) {
					if (isDescending) {
						this.addTriangle(v2, v1, v, "same desc " + v.ipt);
						v1 = v2;
						v2 = v2.prev;
					} else {
						this.addTriangle(v, v1, v2, "same asc " + v.ipt);
						v1 = v2;
						v2 = v2.next;
					}
				}
			} else {
				v2 = vEdge;
				do {
					v1 = v2;
					if (isDescending) {
						v2 = v1.prev;
						this.addTriangle(v2, v1, v, "opp desc " + v.id);
					} else {
						v2 = v1.next;
						this.addTriangle(v, v1, v2, "opp asc " + v.id);
					}
				} while (v2 !== last && v2 !== v && v2.qnext == null);
				if (last.region == null) {
					this.lstRegions.removeObj(v.region);
					v.region = last.region = (isDescending ? last.prev : last.next).region;
				}
			}
			v.region[2] = v.region[isDescending ? 0 : 1] = v;
		}, "JU.MeshCapper.CapVertex,~B");
	Clazz.defineMethod(c$, "processSplit",
		function (v, last) {
			var pv = last.cloneV();
			if (this.dumping) pv.id += "a";
			var p = v.cloneV();
			if (this.dumping) p.id += "a";
			if (last.region == null) {
				last.region = last.next.region;
				pv.region = last.prev.region;
			} else {
				this.newRegion(last);
				var cv = last;
				while (cv.next.region != null) {
					cv.next.region = cv.region;
					cv = cv.next;
					cv.region[0] = cv;
				}
			}
			var r = pv.region;
			if (r[2] === last) r[2] = pv;
			r[0] = pv;
			if (r[1] === last) r[1] = pv;
			v.link(last);
			pv.prev.link(pv);
			pv.link(p);
			p.link(p.next);
			return p;
		}, "JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "newRegion",
		function (v) {
			this.nRegions++;
			this.lstRegions.addLast(v.region = [v, v, v]);
		}, "JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "getLastPoint",
		function (v) {
			var closest = null;
			var ymin = 3.4028235E38;
			for (var i = this.lstRegions.size(); --i >= 0;) {
				var r = this.lstRegions.get(i);
				var d = r[0];
				if (d === r[1]) continue;
				var isEdge = (d.region != null);
				var isOK = ((isEdge ? v.interpolateX(d, d.next) : d.x) < v.x);
				if (isEdge && closest != null && closest.x != d.x && isOK == (closest.x < d.x)) {
					closest = null;
					ymin = 3.4028235E38;
				}
				if (!isOK) continue;
				var a = r[1];
				isEdge = (a.region != null);
				isOK = ((isEdge ? v.interpolateX(a, a.prev) : a.x) >= v.x);
				if (isEdge && closest != null && closest.x != a.x && isOK == (closest.x > a.x)) {
					closest = null;
					ymin = 3.4028235E38;
				}
				if (!isOK) continue;
				if (r[2].y < ymin) {
					ymin = r[2].y;
					closest = r[2];
				}
			}
			return closest;
		}, "JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "checkWinding",
		function (v0, v1, v2) {
			return (v1.x - v0.x) * (v2.y - v0.y) > (v1.y - v0.y) * (v2.x - v0.x);
		}, "JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex");
	Clazz.defineMethod(c$, "addTriangle",
		function (v0, v1, v2, note) {
			++this.nTriangles;
			if (this.checkWinding(v0, v1, v2)) {
				if (this.dumping) this.drawTriangle(this.nTriangles, v0, v1, v2, "red");
				this.outputTriangle(v0.ipt, v1.ipt, v2.ipt);
			} else if (this.dumping) {
				JU.Logger.info("#!!!BAD WINDING " + note);
			}
			v1.link(null);
		}, "JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex,~S");
	Clazz.defineMethod(c$, "drawTriangle",
		function (index, v0, v1, v2, color) {
			var p0 = this.getInputPoint(v0);
			var p1 = this.getInputPoint(v1);
			var p2 = this.getInputPoint(v2);
			JU.Logger.info("draw " + color + index + "/* " + v0.id + " " + v1.id + " " + v2.id + " */" + p0 + p1 + p2 + " color " + color);
		}, "~N,JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex,~S");
	c$.$MeshCapper$CapVertex$ = function () {
		Clazz.pu$h(self.c$);
		c$ = Clazz.decorateAsClass(function () {
			Clazz.prepareCallback(this, arguments);
			this.ipt = 0;
			this.id = "";
			this.qnext = null;
			this.prev = null;
			this.next = null;
			this.region = null;
			this.ok = 1;
			Clazz.instantialize(this, arguments);
		}, JU.MeshCapper, "CapVertex", JU.T3, [Cloneable, java.util.Comparator]);
		Clazz.makeConstructor(c$,
			function (a, b) {
				Clazz.superConstructor(this, JU.MeshCapper.CapVertex, []);
				this.ipt = b;
				this.id = "" + b;
				this.setT(a);
			}, "JU.T3,~N");
		Clazz.defineMethod(c$, "cloneV",
			function () {
				try {
					return this.clone();
				} catch (e) {
					if (Clazz.exceptionOf(e, Exception)) {
						return null;
					} else {
						throw e;
					}
				}
			});
		Clazz.defineMethod(c$, "sort",
			function (a) {
				java.util.Arrays.sort(a, this);
				if (this.ok == 0) return null;
				for (var b = a.length - 1; --b >= 0;) a[b].qnext = a[b + 1];

				a[a.length - 1].qnext = a[0];
				return a[0];
			}, "~A");
		Clazz.overrideMethod(c$, "compare",
			function (a, b) {
				return (a.y < b.y ? 1 : a.y > b.y || a.x < b.x ? -1 : a.x > b.x ? 1 : (this.ok = 0));
			}, "JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex");
		Clazz.defineMethod(c$, "interpolateX",
			function (a, b) {
				var c = b.y - a.y;
				var d = b.x - a.x;
				return (c != 0 ? a.x + (this.y - a.y) * d / c : d > 0 ? 3.4028235E38 : -3.4028235E38);
			}, "JU.MeshCapper.CapVertex,JU.MeshCapper.CapVertex");
		Clazz.defineMethod(c$, "link",
			function (a) {
				if (a == null) {
					this.prev.next = this.next;
					this.next.prev = this.prev;
					this.clear();
				} else {
					this.next = a;
					a.prev = this;
				}
			}, "JU.MeshCapper.CapVertex");
		Clazz.defineMethod(c$, "clear",
			function () {
				this.qnext = this.next = this.prev = null;
				this.region = null;
			});
		Clazz.defineMethod(c$, "dumpRegion",
			function () {
				var a = "\n#REGION d=" + this.region[0].id + " a=" + this.region[1].id + " last=" + this.region[2].id + "\n# ";
				var b = this.region[1];
				while (true) {
					a += b.id + " ";
					if (b === this.region[0]) break;
					b = b.next;
				}
				return a + "\n";
			});
		Clazz.overrideMethod(c$, "toString",
			function () {
				return "draw p" + this.id + " {" + this.x + " " + this.y + " " + this.z + "} # " + (this.prev == null ? null : (this.prev.id + " " + this.next.id) + (this.region == null ? null : this.dumpRegion()));
			});
		c$ = Clazz.p0p();
	};
	Clazz.defineStatics(c$,
		"DESCENDER", 0,
		"ASCENDER", 1,
		"LAST", 2);
});
