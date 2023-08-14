Clazz.declarePackage("JV");
Clazz.load(["java.util.Hashtable", "JU.P3", "J.c.CBK"], "JV.GlobalSettings", ["java.lang.Boolean", "$.Float", "JU.DF", "$.PT", "$.SB", "J.c.STR", "JS.SV", "JU.Escape", "$.Logger", "JV.JC", "$.StateManager", "$.Viewer"], function () {
	c$ = Clazz.decorateAsClass(function () {
		this.vwr = null;
		this.htNonbooleanParameterValues = null;
		this.htBooleanParameterFlags = null;
		this.htPropertyFlagsRemoved = null;
		this.htUserVariables = null;
		this.databases = null;
		this.zDepth = 0;
		this.zShadePower = 3;
		this.zSlab = 50;
		this.slabByMolecule = false;
		this.slabByAtom = false;
		this.allowEmbeddedScripts = true;
		this.appendNew = true;
		this.appletProxy = "";
		this.applySymmetryToBonds = false;
		this.atomTypes = "";
		this.autoBond = true;
		this.axesOrientationRasmol = false;
		this.bondRadiusMilliAngstroms = 150;
		this.bondTolerance = 0.45;
		this.defaultDirectory = "";
		this.defaultStructureDSSP = true;
		this.ptDefaultLattice = null;
		this.defaultLoadScript = "";
		this.defaultLoadFilter = "";
		this.defaultDropScript = "zap; load SYNC \"%FILE\";if (%ALLOWCARTOONS && _loadScript == '' && defaultLoadScript == '' && _filetype == 'Pdb') {if ({(protein or nucleic)&*/1.1} && {*/1.1}[1].groupindex != {*/1.1}[0].groupindex){select protein or nucleic;cartoons only;}if ({visible}){color structure}else{wireframe -0.1};if (!{visible}){spacefill 23%};select *}";
		this.forceAutoBond = false;
		this.fractionalRelative = true;
		this.inlineNewlineChar = '|';
		this.loadFormat = null;
		this.loadLigandFormat = null;
		this.nmrUrlFormat = null;
		this.nmrPredictFormat = null;
		this.smilesUrlFormat = null;
		this.nihResolverFormat = null;
		this.pubChemFormat = null;
		this.edsUrlFormat = "http://eds.bmc.uu.se/eds/dfs/%LC13/%LCFILE/%LCFILE.omap";
		this.edsUrlFormatDiff = "http://eds.bmc.uu.se/eds/dfs/%LC13/%LCFILE/%LCFILE_diff.omap";
		this.edsUrlCutoff = "http://eds.bmc.uu.se/eds/dfs/%LC13/%LCFILE/%LCFILE.sfdat";
		this.minBondDistance = 0.4;
		this.minPixelSelRadius = 6;
		this.pdbAddHydrogens = false;
		this.pdbGetHeader = false;
		this.pdbSequential = false;
		this.percentVdwAtom = 23;
		this.smallMoleculeMaxAtoms = 40000;
		this.smartAromatic = true;
		this.zeroBasedXyzRasmol = false;
		this.legacyAutoBonding = false;
		this.legacyHAddition = false;
		this.legacyJavaFloat = false;
		this.allowRotateSelected = false;
		this.allowMoveAtoms = false;
		this.solventOn = false;
		this.defaultAngleLabel = "%VALUE %UNITS";
		this.defaultDistanceLabel = "%VALUE %UNITS";
		this.defaultTorsionLabel = "%VALUE %UNITS";
		this.justifyMeasurements = false;
		this.measureAllModels = false;
		this.minimizationSteps = 100;
		this.minimizationRefresh = true;
		this.minimizationSilent = false;
		this.minimizationCriterion = 0.001;
		this.antialiasDisplay = false;
		this.antialiasImages = true;
		this.imageState = true;
		this.antialiasTranslucent = true;
		this.displayCellParameters = true;
		this.dotsSelectedOnly = false;
		this.dotSurface = true;
		this.dotDensity = 3;
		this.dotScale = 1;
		this.meshScale = 1;
		this.greyscaleRendering = false;
		this.isosurfaceKey = false;
		this.isosurfacePropertySmoothing = true;
		this.isosurfacePropertySmoothingPower = 7;
		this.platformSpeed = 10;
		this.repaintWaitMs = 1000;
		this.showHiddenSelectionHalos = false;
		this.showKeyStrokes = true;
		this.showMeasurements = true;
		this.showTiming = false;
		this.zoomLarge = true;
		this.zoomHeight = false;
		this.backgroundImageFileName = null;
		this.partialDots = false;
		this.bondModeOr = false;
		this.hbondsBackbone = false;
		this.hbondsAngleMinimum = 90;
		this.hbondsDistanceMaximum = 3.25;
		this.hbondsRasmol = true;
		this.hbondsSolid = false;
		this.modeMultipleBond = 2;
		this.showHydrogens = true;
		this.showMultipleBonds = true;
		this.ssbondsBackbone = false;
		this.multipleBondSpacing = -1;
		this.multipleBondRadiusFactor = 0;
		this.cartoonBaseEdges = false;
		this.cartoonRockets = false;
		this.backboneSteps = false;
		this.cartoonFancy = false;
		this.cartoonLadders = false;
		this.cartoonRibose = false;
		this.chainCaseSensitive = false;
		this.hermiteLevel = 0;
		this.highResolutionFlag = false;
		this.rangeSelected = false;
		this.rasmolHydrogenSetting = true;
		this.rasmolHeteroSetting = true;
		this.ribbonAspectRatio = 16;
		this.ribbonBorder = false;
		this.rocketBarrels = false;
		this.sheetSmoothing = 1;
		this.traceAlpha = true;
		this.translucent = true;
		this.twistedSheets = false;
		this.allowGestures = false;
		this.allowModelkit = true;
		this.allowMultiTouch = true;
		this.allowKeyStrokes = false;
		this.animationFps = 10;
		this.atomPicking = true;
		this.autoFps = false;
		this.axesMode = 603979810;
		this.axesScale = 2;
		this.starWidth = 0.05;
		this.bondPicking = false;
		this.dataSeparator = "~~~";
		this.debugScript = false;
		this.defaultDrawArrowScale = 0.5;
		this.defaultLabelXYZ = "%a";
		this.defaultLabelPDB = "%m%r";
		this.defaultTranslucent = 0.5;
		this.delayMaximumMs = 0;
		this.dipoleScale = 1;
		this.drawFontSize = 14;
		this.disablePopupMenu = false;
		this.dragSelected = false;
		this.drawHover = false;
		this.drawPicking = false;
		this.dsspCalcHydrogen = true;
		this.energyUnits = "kJ";
		this.exportScale = 1;
		this.helpPath = "http://chemapps.stolaf.edu/jmol/docs/index.htm";
		this.fontScaling = false;
		this.fontCaching = true;
		this.forceField = "MMFF";
		this.helixStep = 1;
		this.hideNameInPopup = false;
		this.hoverDelayMs = 500;
		this.loadAtomDataTolerance = 0.01;
		this.logCommands = false;
		this.logGestures = false;
		this.measureDistanceUnits = "nanometers";
		this.measurementLabels = true;
		this.messageStyleChime = false;
		this.monitorEnergy = false;
		this.modulationScale = 1;
		this.multiProcessor = true;
		this.particleRadius = 20;
		this.pickingSpinRate = 10;
		this.pickLabel = "";
		this.pointGroupDistanceTolerance = 0.2;
		this.pointGroupLinearTolerance = 8.0;
		this.preserveState = true;
		this.propertyColorScheme = "roygb";
		this.quaternionFrame = "p";
		this.saveProteinStructureState = true;
		this.showModVecs = false;
		this.showUnitCellDetails = true;
		this.solventProbeRadius = 1.2;
		this.scriptDelay = 0;
		this.selectAllModels = true;
		this.statusReporting = true;
		this.strandCountForStrands = 5;
		this.strandCountForMeshRibbon = 7;
		this.strutSpacing = 6;
		this.strutLengthMaximum = 7.0;
		this.strutDefaultRadius = 0.3;
		this.strutsMultiple = false;
		this.useMinimizationThread = true;
		this.useNumberLocalization = true;
		this.useScriptQueue = true;
		this.waitForMoveTo = true;
		this.vectorScale = 1;
		this.vectorSymmetry = false;
		this.vectorsCentered = false;
		this.vibrationPeriod = 1;
		this.vibrationScale = 1;
		this.wireframeRotation = false;
		this.hideNavigationPoint = false;
		this.navigationMode = false;
		this.navigationPeriodic = false;
		this.navigationSpeed = 5;
		this.showNavigationPointAlways = false;
		this.stereoState = null;
		this.modelKitMode = false;
		this.objColors = null;
		this.objStateOn = null;
		this.objMad = null;
		this.ellipsoidAxes = false;
		this.ellipsoidDots = false;
		this.ellipsoidArcs = false;
		this.ellipsoidArrows = false;
		this.ellipsoidFill = false;
		this.ellipsoidBall = true;
		this.ellipsoidDotCount = 200;
		this.ellipsoidAxisDiameter = 0.02;
		this.testFlag1 = false;
		this.testFlag2 = false;
		this.testFlag3 = false;
		this.testFlag4 = false;
		this.structureList = null;
		this.haveSetStructureList = false;
		this.userDatabases = null;
		this.bondingVersion = 0;
		Clazz.instantialize(this, arguments);
	}, JV, "GlobalSettings");
	Clazz.prepareFields(c$, function () {
		this.htUserVariables = new java.util.Hashtable();
		this.ptDefaultLattice = new JU.P3();
		this.objColors = Clazz.newIntArray(8, 0);
		this.objStateOn = Clazz.newBooleanArray(8, false);
		this.objMad = Clazz.newIntArray(8, 0);
		this.structureList = new java.util.Hashtable();
		{
			this.structureList.put(J.c.STR.TURN, [30, 90, -15, 95]);
			this.structureList.put(J.c.STR.SHEET, [-180, -10, 70, 180, -180, -45, -180, -130, 140, 180, 90, 180]);
			this.structureList.put(J.c.STR.HELIX, [-160, 0, -100, 45]);
		}
	});
	Clazz.makeConstructor(c$,
		function (vwr, g, clearUserVariables) {
			this.vwr = vwr;
			this.htNonbooleanParameterValues = new java.util.Hashtable();
			this.htBooleanParameterFlags = new java.util.Hashtable();
			this.htPropertyFlagsRemoved = new java.util.Hashtable();
			if (g != null) {
				if (!clearUserVariables) this.htUserVariables = g.htUserVariables;
				this.debugScript = g.debugScript;
				this.disablePopupMenu = g.disablePopupMenu;
				this.messageStyleChime = g.messageStyleChime;
				this.defaultDirectory = g.defaultDirectory;
				this.allowGestures = g.allowGestures;
				this.allowModelkit = g.allowModelkit;
				this.allowMultiTouch = g.allowMultiTouch;
				this.allowKeyStrokes = g.allowKeyStrokes;
				this.legacyAutoBonding = g.legacyAutoBonding;
				this.legacyHAddition = g.legacyHAddition;
				this.legacyJavaFloat = g.legacyJavaFloat;
				this.bondingVersion = g.bondingVersion;
				this.platformSpeed = g.platformSpeed;
				this.useScriptQueue = g.useScriptQueue;
				this.databases = g.databases;
				this.showTiming = g.showTiming;
				this.wireframeRotation = g.wireframeRotation;
				this.testFlag1 = g.testFlag1;
				this.testFlag2 = g.testFlag2;
				this.testFlag3 = g.testFlag3;
				this.testFlag4 = g.testFlag4;
			}
			if (this.databases == null) {
				this.databases = new java.util.Hashtable();
				this.getDataBaseList(JV.JC.databases);
				this.getDataBaseList(this.userDatabases);
			}
			this.loadFormat = this.databases.get("pdb");
			this.loadLigandFormat = this.databases.get("ligand");
			this.nmrUrlFormat = this.databases.get("nmr");
			this.nmrPredictFormat = this.databases.get("nmrdb");
			this.smilesUrlFormat = this.databases.get("nci") + "/file?format=sdf&get3d=True";
			this.nihResolverFormat = this.databases.get("nci");
			this.pubChemFormat = this.databases.get("pubchem");
			for (var item, $item = 0, $$item = J.c.CBK.values(); $item < $$item.length && ((item = $$item[$item]) || true); $item++) this.resetValue(item.name() + "Callback", g);

			this.setI("historyLevel", 0);
			this.setF("cameraDepth", 3.0);
			this.setI("depth", 0);
			this.setF("gestureSwipeFactor", 1.0);
			this.setB("hideNotSelected", false);
			this.setO("hoverLabel", "");
			this.setB("isKiosk", vwr.isKiosk());
			this.setO("logFile", vwr.getLogFileName());
			this.setI("logLevel", JU.Logger.getLogLevel());
			this.setF("mouseWheelFactor", 1.15);
			this.setF("mouseDragFactor", 1.0);
			this.setI("navFps", 10);
			this.setI("navigationDepth", 0);
			this.setI("navigationSlab", 0);
			this.setI("navX", 0);
			this.setI("navY", 0);
			this.setI("navZ", 0);
			this.setO("pathForAllFiles", "");
			this.setB("perspectiveDepth", true);
			this.setI("perspectiveModel", 11);
			this.setO("picking", "identify");
			this.setO("pickingStyle", "toggle");
			this.setB("refreshing", true);
			this.setI("rotationRadius", 0);
			this.setI("scaleAngstromsPerInch", 0);
			this.setI("scriptReportingLevel", 0);
			this.setB("selectionHalos", false);
			this.setB("showaxes", false);
			this.setB("showboundbox", false);
			this.setB("showfrank", false);
			this.setB("showUnitcell", false);
			this.setI("slab", 100);
			this.setB("slabEnabled", false);
			this.setF("slabrange", 0);
			this.setI("spinX", 0);
			this.setI("spinY", 30);
			this.setI("spinZ", 0);
			this.setI("spinFps", 30);
			this.setF("visualRange", 5.0);
			this.setI("stereoDegrees", -5);
			this.setI("stateversion", 0);
			this.setB("syncScript", vwr.sm.syncingScripts);
			this.setB("syncMouse", vwr.sm.syncingMouse);
			this.setB("syncStereo", vwr.sm.stereoSync);
			this.setB("windowCentered", true);
			this.setB("zoomEnabled", true);
			this.setI("_version", JV.JC.versionInt);
			this.setB("axesWindow", true);
			this.setB("axesMolecular", false);
			this.setB("axesPosition", false);
			this.setB("axesUnitcell", false);
			this.setI("backgroundModel", 0);
			this.setB("colorRasmol", false);
			this.setO("currentLocalPath", "");
			this.setO("defaultLattice", "{0 0 0}");
			this.setO("defaultColorScheme", "Jmol");
			this.setO("defaultDirectoryLocal", "");
			this.setO("defaults", "Jmol");
			this.setO("defaultVDW", "Jmol");
			this.setO("exportDrivers", "Idtf;Maya;Povray;Vrml;X3d;Tachyon;Obj");
			this.setI("propertyAtomNumberColumnCount", 0);
			this.setI("propertyAtomNumberField", 0);
			this.setI("propertyDataColumnCount", 0);
			this.setI("propertyDataField", 0);
			this.setB("undo", true);
			this.setB("allowEmbeddedScripts", this.allowEmbeddedScripts);
			this.setB("allowGestures", this.allowGestures);
			this.setB("allowKeyStrokes", this.allowKeyStrokes);
			this.setB("allowModelkit", this.allowModelkit);
			this.setB("allowMultiTouch", this.allowMultiTouch);
			this.setB("allowRotateSelected", this.allowRotateSelected);
			this.setB("allowMoveAtoms", this.allowMoveAtoms);
			this.setI("animationFps", this.animationFps);
			this.setB("antialiasImages", this.antialiasImages);
			this.setB("antialiasDisplay", this.antialiasDisplay);
			this.setB("antialiasTranslucent", this.antialiasTranslucent);
			this.setB("appendNew", this.appendNew);
			this.setO("appletProxy", this.appletProxy);
			this.setB("applySymmetryToBonds", this.applySymmetryToBonds);
			this.setB("atomPicking", this.atomPicking);
			this.setO("atomTypes", this.atomTypes);
			this.setB("autoBond", this.autoBond);
			this.setB("autoFps", this.autoFps);
			this.setI("axesMode", this.axesMode == 603979808 ? 2 : this.axesMode == 603979804 ? 1 : 0);
			this.setF("axesScale", this.axesScale);
			this.setB("axesOrientationRasmol", this.axesOrientationRasmol);
			this.setB("backboneSteps", this.backboneSteps);
			this.setB("bondModeOr", this.bondModeOr);
			this.setB("bondPicking", this.bondPicking);
			this.setI("bondRadiusMilliAngstroms", this.bondRadiusMilliAngstroms);
			this.setF("bondTolerance", this.bondTolerance);
			this.setB("cartoonBaseEdges", this.cartoonBaseEdges);
			this.setB("cartoonFancy", this.cartoonFancy);
			this.setB("cartoonLadders", this.cartoonLadders);
			this.setB("cartoonLadders", this.cartoonRibose);
			this.setB("cartoonRockets", this.cartoonRockets);
			this.setB("chainCaseSensitive", this.chainCaseSensitive);
			this.setI("bondingVersion", this.bondingVersion);
			this.setO("dataSeparator", this.dataSeparator);
			this.setB("debugScript", this.debugScript);
			this.setO("defaultAngleLabel", this.defaultAngleLabel);
			this.setF("defaultDrawArrowScale", this.defaultDrawArrowScale);
			this.setO("defaultDirectory", this.defaultDirectory);
			this.setO("defaultDistanceLabel", this.defaultDistanceLabel);
			this.setO("defaultDropScript", this.defaultDropScript);
			this.setO("defaultLabelPDB", this.defaultLabelPDB);
			this.setO("defaultLabelXYZ", this.defaultLabelXYZ);
			this.setO("defaultLoadFilter", this.defaultLoadFilter);
			this.setO("defaultLoadScript", this.defaultLoadScript);
			this.setB("defaultStructureDSSP", this.defaultStructureDSSP);
			this.setO("defaultTorsionLabel", this.defaultTorsionLabel);
			this.setF("defaultTranslucent", this.defaultTranslucent);
			this.setI("delayMaximumMs", this.delayMaximumMs);
			this.setF("dipoleScale", this.dipoleScale);
			this.setB("disablePopupMenu", this.disablePopupMenu);
			this.setB("displayCellParameters", this.displayCellParameters);
			this.setI("dotDensity", this.dotDensity);
			this.setI("dotScale", this.dotScale);
			this.setB("dotsSelectedOnly", this.dotsSelectedOnly);
			this.setB("dotSurface", this.dotSurface);
			this.setB("dragSelected", this.dragSelected);
			this.setB("drawHover", this.drawHover);
			this.setF("drawFontSize", this.drawFontSize);
			this.setB("drawPicking", this.drawPicking);
			this.setB("dsspCalculateHydrogenAlways", this.dsspCalcHydrogen);
			this.setO("edsUrlFormat", this.edsUrlFormat);
			this.setO("edsUrlFormatDiff", this.edsUrlFormatDiff);
			this.setO("edsUrlCutoff", this.edsUrlCutoff);
			this.setB("ellipsoidArcs", this.ellipsoidArcs);
			this.setB("ellipsoidArrows", this.ellipsoidArrows);
			this.setB("ellipsoidAxes", this.ellipsoidAxes);
			this.setF("ellipsoidAxisDiameter", this.ellipsoidAxisDiameter);
			this.setB("ellipsoidBall", this.ellipsoidBall);
			this.setI("ellipsoidDotCount", this.ellipsoidDotCount);
			this.setB("ellipsoidDots", this.ellipsoidDots);
			this.setB("ellipsoidFill", this.ellipsoidFill);
			this.setO("energyUnits", this.energyUnits);
			this.setF("exportScale", this.exportScale);
			this.setB("fontScaling", this.fontScaling);
			this.setB("fontCaching", this.fontCaching);
			this.setB("forceAutoBond", this.forceAutoBond);
			this.setO("forceField", this.forceField);
			this.setB("fractionalRelative", this.fractionalRelative);
			this.setF("particleRadius", this.particleRadius);
			this.setB("greyscaleRendering", this.greyscaleRendering);
			this.setF("hbondsAngleMinimum", this.hbondsAngleMinimum);
			this.setF("hbondsDistanceMaximum", this.hbondsDistanceMaximum);
			this.setB("hbondsBackbone", this.hbondsBackbone);
			this.setB("hbondsRasmol", this.hbondsRasmol);
			this.setB("hbondsSolid", this.hbondsSolid);
			this.setI("helixStep", this.helixStep);
			this.setO("helpPath", this.helpPath);
			this.setI("hermiteLevel", this.hermiteLevel);
			this.setB("hideNameInPopup", this.hideNameInPopup);
			this.setB("hideNavigationPoint", this.hideNavigationPoint);
			this.setB("highResolution", this.highResolutionFlag);
			this.setF("hoverDelay", this.hoverDelayMs / 1000);
			this.setB("imageState", this.imageState);
			this.setB("isosurfaceKey", this.isosurfaceKey);
			this.setB("isosurfacePropertySmoothing", this.isosurfacePropertySmoothing);
			this.setI("isosurfacePropertySmoothingPower", this.isosurfacePropertySmoothingPower);
			this.setB("justifyMeasurements", this.justifyMeasurements);
			this.setB("legacyAutoBonding", this.legacyAutoBonding);
			this.setB("legacyHAddition", this.legacyHAddition);
			this.setB("legacyJavaFloat", this.legacyJavaFloat);
			this.setF("loadAtomDataTolerance", this.loadAtomDataTolerance);
			this.setO("loadFormat", this.loadFormat);
			this.setO("loadLigandFormat", this.loadLigandFormat);
			this.setB("logCommands", this.logCommands);
			this.setB("logGestures", this.logGestures);
			this.setB("measureAllModels", this.measureAllModels);
			this.setB("measurementLabels", this.measurementLabels);
			this.setO("measurementUnits", this.measureDistanceUnits);
			this.setI("meshScale", this.meshScale);
			this.setB("messageStyleChime", this.messageStyleChime);
			this.setF("minBondDistance", this.minBondDistance);
			this.setI("minPixelSelRadius", this.minPixelSelRadius);
			this.setI("minimizationSteps", this.minimizationSteps);
			this.setB("minimizationRefresh", this.minimizationRefresh);
			this.setB("minimizationSilent", this.minimizationSilent);
			this.setF("minimizationCriterion", this.minimizationCriterion);
			this.setB("modelKitMode", this.modelKitMode);
			this.setF("modulationScale", this.modulationScale);
			this.setB("monitorEnergy", this.monitorEnergy);
			this.setF("multipleBondRadiusFactor", this.multipleBondRadiusFactor);
			this.setF("multipleBondSpacing", this.multipleBondSpacing);
			this.setB("multiProcessor", this.multiProcessor && (JV.Viewer.nProcessors > 1));
			this.setB("navigationMode", this.navigationMode);
			this.setB("navigationPeriodic", this.navigationPeriodic);
			this.setF("navigationSpeed", this.navigationSpeed);
			this.setO("nmrPredictFormat", this.nmrPredictFormat);
			this.setO("nmrUrlFormat", this.nmrUrlFormat);
			this.setB("partialDots", this.partialDots);
			this.setB("pdbAddHydrogens", this.pdbAddHydrogens);
			this.setB("pdbGetHeader", this.pdbGetHeader);
			this.setB("pdbSequential", this.pdbSequential);
			this.setI("percentVdwAtom", this.percentVdwAtom);
			this.setI("pickingSpinRate", this.pickingSpinRate);
			this.setO("pickLabel", this.pickLabel);
			this.setI("platformSpeed", this.platformSpeed);
			this.setF("pointGroupLinearTolerance", this.pointGroupLinearTolerance);
			this.setF("pointGroupDistanceTolerance", this.pointGroupDistanceTolerance);
			this.setB("preserveState", this.preserveState);
			this.setO("propertyColorScheme", this.propertyColorScheme);
			this.setO("quaternionFrame", this.quaternionFrame);
			this.setB("rangeSelected", this.rangeSelected);
			this.setI("repaintWaitMs", this.repaintWaitMs);
			this.setI("ribbonAspectRatio", this.ribbonAspectRatio);
			this.setB("ribbonBorder", this.ribbonBorder);
			this.setB("rocketBarrels", this.rocketBarrels);
			this.setB("saveProteinStructureState", this.saveProteinStructureState);
			this.setB("scriptqueue", this.useScriptQueue);
			this.setB("selectAllModels", this.selectAllModels);
			this.setB("selectHetero", this.rasmolHeteroSetting);
			this.setB("selectHydrogen", this.rasmolHydrogenSetting);
			this.setF("sheetSmoothing", this.sheetSmoothing);
			this.setB("showHiddenSelectionHalos", this.showHiddenSelectionHalos);
			this.setB("showHydrogens", this.showHydrogens);
			this.setB("showKeyStrokes", this.showKeyStrokes);
			this.setB("showMeasurements", this.showMeasurements);
			this.setB("showModulationVectors", this.showModVecs);
			this.setB("showMultipleBonds", this.showMultipleBonds);
			this.setB("showNavigationPointAlways", this.showNavigationPointAlways);
			this.setI("showScript", this.scriptDelay);
			this.setB("showtiming", this.showTiming);
			this.setB("slabByMolecule", this.slabByMolecule);
			this.setB("slabByAtom", this.slabByAtom);
			this.setB("smartAromatic", this.smartAromatic);
			this.setI("smallMoleculeMaxAtoms", this.smallMoleculeMaxAtoms);
			this.setO("smilesUrlFormat", this.smilesUrlFormat);
			this.setO("nihResolverFormat", this.nihResolverFormat);
			this.setO("pubChemFormat", this.pubChemFormat);
			this.setB("showUnitCellDetails", this.showUnitCellDetails);
			this.setB("solventProbe", this.solventOn);
			this.setF("solventProbeRadius", this.solventProbeRadius);
			this.setB("ssbondsBackbone", this.ssbondsBackbone);
			this.setF("starWidth", this.starWidth);
			this.setB("statusReporting", this.statusReporting);
			this.setI("strandCount", this.strandCountForStrands);
			this.setI("strandCountForStrands", this.strandCountForStrands);
			this.setI("strandCountForMeshRibbon", this.strandCountForMeshRibbon);
			this.setF("strutDefaultRadius", this.strutDefaultRadius);
			this.setF("strutLengthMaximum", this.strutLengthMaximum);
			this.setI("strutSpacing", this.strutSpacing);
			this.setB("strutsMultiple", this.strutsMultiple);
			this.setB("testFlag1", this.testFlag1);
			this.setB("testFlag2", this.testFlag2);
			this.setB("testFlag3", this.testFlag3);
			this.setB("testFlag4", this.testFlag4);
			this.setB("traceAlpha", this.traceAlpha);
			this.setB("translucent", this.translucent);
			this.setB("twistedSheets", this.twistedSheets);
			this.setB("useMinimizationThread", this.useMinimizationThread);
			this.setB("useNumberLocalization", this.useNumberLocalization);
			this.setB("vectorsCentered", this.vectorsCentered);
			this.setF("vectorScale", this.vectorScale);
			this.setB("vectorSymmetry", this.vectorSymmetry);
			this.setF("vibrationPeriod", this.vibrationPeriod);
			this.setF("vibrationScale", this.vibrationScale);
			this.setB("waitForMoveTo", this.waitForMoveTo);
			this.setB("wireframeRotation", this.wireframeRotation);
			this.setI("zDepth", this.zDepth);
			this.setB("zeroBasedXyzRasmol", this.zeroBasedXyzRasmol);
			this.setB("zoomHeight", this.zoomHeight);
			this.setB("zoomLarge", this.zoomLarge);
			this.setI("zShadePower", this.zShadePower);
			this.setI("zSlab", this.zSlab);
		}, "JV.Viewer,JV.GlobalSettings,~B");
	Clazz.defineMethod(c$, "clear",
		function () {
			var e = this.htUserVariables.keySet().iterator();
			while (e.hasNext()) {
				var key = e.next();
				if (key.charAt(0) == '@' || key.startsWith("site_")) e.remove();
			}
			this.vwr.setPicked(-1);
			this.setI("_atomhovered", -1);
			this.setO("_pickinfo", "");
			this.setB("selectionhalos", false);
			this.setB("hidenotselected", false);
			this.setB("measurementlabels", this.measurementLabels = true);
			this.setB("drawHover", this.drawHover = false);
			this.vwr.stm.saveScene("DELETE", null);
		});
	Clazz.defineMethod(c$, "setUnits",
		function (units) {
			var mu = this.measureDistanceUnits;
			var eu = this.energyUnits;
			if (units.equalsIgnoreCase("angstroms")) this.measureDistanceUnits = "angstroms";
			else if (units.equalsIgnoreCase("nanometers") || units.equalsIgnoreCase("nm")) this.measureDistanceUnits = "nanometers";
			else if (units.equalsIgnoreCase("picometers") || units.equalsIgnoreCase("pm")) this.measureDistanceUnits = "picometers";
			else if (units.equalsIgnoreCase("bohr") || units.equalsIgnoreCase("au")) this.measureDistanceUnits = "au";
			else if (units.equalsIgnoreCase("vanderwaals") || units.equalsIgnoreCase("vdw")) this.measureDistanceUnits = "vdw";
			else if (units.toLowerCase().endsWith("hz") || units.toLowerCase().endsWith("khz")) this.measureDistanceUnits = units.toLowerCase();
			else if (units.equalsIgnoreCase("kj")) this.energyUnits = "kJ";
			else if (units.equalsIgnoreCase("kcal")) this.energyUnits = "kcal";
			if (!mu.equalsIgnoreCase(this.measureDistanceUnits)) this.setO("measurementUnits", this.measureDistanceUnits);
			else if (!eu.equalsIgnoreCase(this.energyUnits)) this.setO("energyUnits", this.energyUnits);
		}, "~S");
	Clazz.defineMethod(c$, "isJmolVariable",
		function (key) {
			return key.charAt(0) == '_' || this.htNonbooleanParameterValues.containsKey(key = key.toLowerCase()) || this.htBooleanParameterFlags.containsKey(key) || JV.GlobalSettings.unreportedProperties.indexOf(";" + key + ";") >= 0;
		}, "~S");
	Clazz.defineMethod(c$, "resetValue",
		function (name, g) {
			this.setO(name, g == null ? "" : g.getParameter(name, true));
		}, "~S,JV.GlobalSettings");
	Clazz.defineMethod(c$, "setB",
		function (name, value) {
			name = name.toLowerCase();
			if (this.htNonbooleanParameterValues.containsKey(name)) return;
			this.htBooleanParameterFlags.put(name, value ? Boolean.TRUE : Boolean.FALSE);
		}, "~S,~B");
	Clazz.defineMethod(c$, "setI",
		function (name, value) {
			if (value != 2147483647) this.setO(name, Integer.$valueOf(value));
		}, "~S,~N");
	Clazz.defineMethod(c$, "setF",
		function (name, value) {
			if (!Float.isNaN(value)) this.setO(name, Float.$valueOf(value));
		}, "~S,~N");
	Clazz.defineMethod(c$, "setO",
		function (name, value) {
			name = name.toLowerCase();
			if (value == null || this.htBooleanParameterFlags.containsKey(name)) return;
			this.htNonbooleanParameterValues.put(name, value);
		}, "~S,~O");
	Clazz.defineMethod(c$, "removeParam",
		function (key) {
			key = key.toLowerCase();
			if (this.htBooleanParameterFlags.containsKey(key)) {
				this.htBooleanParameterFlags.remove(key);
				if (!this.htPropertyFlagsRemoved.containsKey(key)) this.htPropertyFlagsRemoved.put(key, Boolean.FALSE);
				return;
			}
			if (this.htNonbooleanParameterValues.containsKey(key)) this.htNonbooleanParameterValues.remove(key);
		}, "~S");
	Clazz.defineMethod(c$, "setUserVariable",
		function (key, $var) {
			if ($var != null) {
				key = key.toLowerCase();
				this.htUserVariables.put(key, $var.setName(key));
			}
			return $var;
		}, "~S,JS.SV");
	Clazz.defineMethod(c$, "unsetUserVariable",
		function (key) {
			if (key.equals("all") || key.equals("variables")) {
				this.htUserVariables.clear();
				JU.Logger.info("all user-defined variables deleted");
			} else if (this.htUserVariables.containsKey(key)) {
				JU.Logger.info("variable " + key + " deleted");
				this.htUserVariables.remove(key);
			}
		}, "~S");
	Clazz.defineMethod(c$, "removeUserVariable",
		function (key) {
			this.htUserVariables.remove(key);
		}, "~S");
	Clazz.defineMethod(c$, "getUserVariable",
		function (name) {
			if (name == null) return null;
			name = name.toLowerCase();
			return this.htUserVariables.get(name);
		}, "~S");
	Clazz.defineMethod(c$, "getParameterEscaped",
		function (name, nMax) {
			name = name.toLowerCase();
			if (this.htNonbooleanParameterValues.containsKey(name)) {
				var v = this.htNonbooleanParameterValues.get(name);
				return JV.StateManager.varClip(name, JU.Escape.e(v), nMax);
			}
			if (this.htBooleanParameterFlags.containsKey(name)) return this.htBooleanParameterFlags.get(name).toString();
			if (this.htUserVariables.containsKey(name)) return this.htUserVariables.get(name).escape();
			if (this.htPropertyFlagsRemoved.containsKey(name)) return "false";
			return "<not defined>";
		}, "~S,~N");
	Clazz.defineMethod(c$, "getParameter",
		function (name, nullAsString) {
			var v = this.getParam(name, false);
			return (v == null && nullAsString ? "" : v);
		}, "~S,~B");
	Clazz.defineMethod(c$, "getOrSetNewVariable",
		function (name, doSet) {
			if (name == null || name.length == 0) name = "x";
			var v = this.getParam(name, true);
			return (v == null && doSet && name.charAt(0) != '_' ? this.setUserVariable(name, JS.SV.newV(4, "")) : JS.SV.getVariable(v));
		}, "~S,~B");
	Clazz.defineMethod(c$, "getParam",
		function (name, asVariable) {
			name = name.toLowerCase();
			if (name.equals("_memory")) {
				var bTotal = 0;
				var bFree = 0;
				{
				}
				var value = JU.DF.formatDecimal(bTotal - bFree, 1) + "/" + JU.DF.formatDecimal(bTotal, 1);
				this.htNonbooleanParameterValues.put("_memory", value);
			}
			if (this.htNonbooleanParameterValues.containsKey(name)) return this.htNonbooleanParameterValues.get(name);
			if (this.htBooleanParameterFlags.containsKey(name)) return this.htBooleanParameterFlags.get(name);
			if (this.htPropertyFlagsRemoved.containsKey(name)) return Boolean.FALSE;
			if (this.htUserVariables.containsKey(name)) {
				var v = this.htUserVariables.get(name);
				return (asVariable ? v : JS.SV.oValue(v));
			}
			return null;
		}, "~S,~B");
	Clazz.defineMethod(c$, "getVariableList",
		function () {
			return JV.StateManager.getVariableList(this.htUserVariables, 0, true, false);
		});
	Clazz.defineMethod(c$, "setStructureList",
		function (list, type) {
			this.haveSetStructureList = true;
			this.structureList.put(type, list);
		}, "~A,J.c.STR");
	Clazz.defineMethod(c$, "getStructureList",
		function () {
			return this.structureList;
		});
	Clazz.defineMethod(c$, "resolveDataBase",
		function (database, id) {
			var format = this.databases.get(database.toLowerCase());
			if (format == null) return null;
			if (id.indexOf("/") < 0) {
				if (database.equals("pubchem")) id = "name/" + id;
				else if (database.equals("nci")) id += "/file?format=sdf&get3d=True";
			}
			while (format.indexOf("%c") >= 0) {
				try {
					for (var i = 1; i < 10; i++) {
						format = JU.PT.rep(format, "%c" + i, id.substring(i - 1, i));
					}
				} catch (e) {
					if (Clazz.exceptionOf(e, Exception)) {
					} else {
						throw e;
					}
				}
			}
			return (format.indexOf("%FILE") < 0 ? format + id : JU.PT.formatStringS(format, "FILE", id));
		}, "~S,~S");
	c$.doReportProperty = Clazz.defineMethod(c$, "doReportProperty",
		function (name) {
			return (name.charAt(0) != '_' && JV.GlobalSettings.unreportedProperties.indexOf(";" + name + ";") < 0);
		}, "~S");
	Clazz.defineMethod(c$, "getDataBaseList",
		function (list) {
			if (list == null) return;
			for (var i = 0; i < list.length; i += 2) this.databases.put(list[i].toLowerCase(), list[i + 1]);

		}, "~A");
	Clazz.defineMethod(c$, "getAllVariables",
		function () {
			var map = new java.util.Hashtable();
			map.putAll(this.htBooleanParameterFlags);
			map.putAll(this.htNonbooleanParameterValues);
			map.putAll(this.htUserVariables);
			return map;
		});
	Clazz.defineMethod(c$, "getLoadState",
		function (htParams) {
			var str = new JU.SB();
			this.app(str, "set allowEmbeddedScripts false");
			if (this.allowEmbeddedScripts) this.setB("allowEmbeddedScripts", true);
			this.app(str, "set appendNew " + this.appendNew);
			this.app(str, "set appletProxy " + JU.PT.esc(this.appletProxy));
			this.app(str, "set applySymmetryToBonds " + this.applySymmetryToBonds);
			if (this.atomTypes.length > 0) this.app(str, "set atomTypes " + JU.PT.esc(this.atomTypes));
			this.app(str, "set autoBond " + this.autoBond);
			if (this.axesOrientationRasmol) this.app(str, "set axesOrientationRasmol true");
			this.app(str, "set bondRadiusMilliAngstroms " + this.bondRadiusMilliAngstroms);
			this.app(str, "set bondTolerance " + this.bondTolerance);
			this.app(str, "set defaultLattice " + JU.Escape.eP(this.ptDefaultLattice));
			this.app(str, "set defaultLoadFilter " + JU.PT.esc(this.defaultLoadFilter));
			this.app(str, "set defaultLoadScript \"\"");
			if (this.defaultLoadScript.length > 0) this.setO("defaultLoadScript", this.defaultLoadScript);
			this.app(str, "set defaultStructureDssp " + this.defaultStructureDSSP);
			var sMode = this.vwr.getDefaultVdwNameOrData(-2147483648, null, null);
			this.app(str, "set defaultVDW " + sMode);
			if (sMode.equals("User")) this.app(str, this.vwr.getDefaultVdwNameOrData(2147483647, null, null));
			this.app(str, "set forceAutoBond " + this.forceAutoBond);
			this.app(str, "#set defaultDirectory " + JU.PT.esc(this.defaultDirectory));
			this.app(str, "#set loadFormat " + JU.PT.esc(this.loadFormat));
			this.app(str, "#set loadLigandFormat " + JU.PT.esc(this.loadLigandFormat));
			this.app(str, "#set smilesUrlFormat " + JU.PT.esc(this.smilesUrlFormat));
			this.app(str, "#set nihResolverFormat " + JU.PT.esc(this.nihResolverFormat));
			this.app(str, "#set pubChemFormat " + JU.PT.esc(this.pubChemFormat));
			this.app(str, "#set edsUrlFormat " + JU.PT.esc(this.edsUrlFormat));
			this.app(str, "#set edsUrlFormatDiff " + JU.PT.esc(this.edsUrlFormatDiff));
			this.app(str, "#set edsUrlCutoff " + JU.PT.esc(this.edsUrlCutoff));
			this.app(str, "set bondingVersion " + this.bondingVersion);
			this.app(str, "set legacyAutoBonding " + this.legacyAutoBonding);
			this.app(str, "set legacyHAddition " + this.legacyHAddition);
			this.app(str, "set legacyJavaFloat " + this.legacyJavaFloat);
			this.app(str, "set minBondDistance " + this.minBondDistance);
			this.app(str, "set minimizationCriterion  " + this.minimizationCriterion);
			this.app(str, "set minimizationSteps  " + this.minimizationSteps);
			this.app(str, "set pdbAddHydrogens " + (htParams != null && htParams.get("pdbNoHydrogens") !== Boolean.TRUE ? this.pdbAddHydrogens : false));
			this.app(str, "set pdbGetHeader " + this.pdbGetHeader);
			this.app(str, "set pdbSequential " + this.pdbSequential);
			this.app(str, "set percentVdwAtom " + this.percentVdwAtom);
			this.app(str, "set smallMoleculeMaxAtoms " + this.smallMoleculeMaxAtoms);
			this.app(str, "set smartAromatic " + this.smartAromatic);
			if (this.zeroBasedXyzRasmol) this.app(str, "set zeroBasedXyzRasmol true");
			return str.toString();
		}, "java.util.Map");
	Clazz.defineMethod(c$, "app",
		function (s, cmd) {
			if (cmd.length == 0) return;
			s.append("  ").append(cmd).append(";\n");
		}, "JU.SB,~S");
	c$.unreportedProperties = c$.prototype.unreportedProperties = (";ambientpercent;animationfps;antialiasdisplay;antialiasimages;antialiastranslucent;appendnew;axescolor;axesposition;axesmolecular;axesorientationrasmol;axesunitcell;axeswindow;axis1color;axis2color;axis3color;backgroundcolor;backgroundmodel;bondsymmetryatoms;boundboxcolor;cameradepth;bondingversion;debug;debugscript;defaultlatttice;defaults;defaultdropscript;diffusepercent;;exportdrivers;exportscale;_filecaching;_filecache;fontcaching;fontscaling;forcefield;language;legacyautobonding;legacyhaddition;legacyjavafloat;loglevel;logfile;loggestures;logcommands;measurestylechime;loadformat;loadligandformat;smilesurlformat;pubchemformat;nihresolverformat;edsurlformat;edsurlcutoff;multiprocessor;navigationmode;;pathforallfiles;perspectivedepth;phongexponent;perspectivemodel;platformspeed;preservestate;refreshing;repaintwaitms;rotationradius;showaxes;showaxis1;showaxis2;showaxis3;showboundbox;showfrank;showtiming;showunitcell;slabenabled;slab;slabrange;depth;zshade;zshadepower;specular;specularexponent;specularpercent;celshading;celshadingpower;specularpower;stateversion;statusreporting;stereo;stereostate;vibrationperiod;unitcellcolor;visualrange;windowcentered;zerobasedxyzrasmol;zoomenabled;mousedragfactor;mousewheelfactor;scriptqueue;scriptreportinglevel;syncscript;syncmouse;syncstereo;;defaultdirectory;currentlocalpath;defaultdirectorylocal;ambient;bonds;colorrasmol;diffuse;fractionalrelative;frank;hetero;hidenotselected;hoverlabel;hydrogen;languagetranslation;measurementunits;navigationdepth;navigationslab;picking;pickingstyle;propertycolorschemeoverload;radius;rgbblue;rgbgreen;rgbred;scaleangstromsperinch;selectionhalos;showscript;showselections;solvent;strandcount;spinx;spiny;spinz;spinfps;navx;navy;navz;navfps;" + J.c.CBK.getNameList() + ";undo;atompicking;drawpicking;bondpicking;pickspinrate;picklabel" + ";modelkitmode;allowgestures;allowkeystrokes;allowmultitouch;allowmodelkit" + ";dodrop;hovered" + ";").toLowerCase();
});
