function convertHTML(str) {
    let given = str;
    if(given.includes("&"))
      given=given.replaceAll("&","&amp;");
  
    if(given.includes("<"))
      given=given.replaceAll("<","&lt;");
  
    if(given.includes(">"))
      given=given.replaceAll(">","&gt;");
  
    if(given.includes("\""))
      given=given.replaceAll("\"","&quot;");
  
    if(given.includes("'"))
      given=given.replaceAll("'","&apos;");
  
    return given;
  }
  
  convertHTML("<>")