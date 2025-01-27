Jmol.___JSVDate = "$Date: 2015-01-05 17:28:27 -0600 (Mon, 05 Jan 2015) $"
Jmol.___JSVSvnRev = "$LastChangedRevision: 1681 $"
Jmol.___JSVVersion = "14.2.7"
Clazz.declarePackage("JSV.common");
c$ = Clazz.declareType(JSV.common, "JSVersion");
Clazz.defineStatics(c$,
	"VERSION", null,
	"VERSION_SHORT", null);
{
	var tmpVersion = null;
	var tmpDate = null;
	var tmpSVN = null;
	{
		tmpVersion = Jmol.___JSVVersion;
		tmpDate = Jmol.___JSVDate;
		tmpSVN = Jmol.___JSVSvnRev;
	}
	if (tmpDate != null) tmpDate = tmpDate.substring(7, 23);
	tmpSVN = (tmpSVN == null ? "" : "/SVN" + tmpSVN.substring(22, 27));
	JSV.common.JSVersion.VERSION_SHORT = (tmpVersion != null ? tmpVersion : "(Unknown version)");
	JSV.common.JSVersion.VERSION = JSV.common.JSVersion.VERSION_SHORT + tmpSVN + "/" + (tmpDate != null ? tmpDate : "(Unknown date)");
}