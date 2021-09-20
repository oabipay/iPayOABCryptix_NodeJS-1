var java = require("java");
java.classpath.push("iPayOABCryptix.jar");

console.log(java.callStaticMethodSync("cryptix.TripleDesOab", "encrypt", "707**************", "amt=.100&action=1&responseURL=http://localhost:8080/merchantPlugin/shopping/bankhosted/HostedHttpResult.jsp&errorURL=http://localhost:8080/merchantPlugin/shopping/bankhosted/HostedHttpError.jsp&trackId=596184582&udf1=udf111111111111111111111111111111111111111111&udf2=udf2222222222222222222222222222222222222222222&udf3=udf3333333333333333333333333333333333333333333&udf4=udf444444444444444444444444444444444444444444444&udf5=udf55555555555555555555555555555555555555555555555&currencycode=512&langid=USA&id=ipay***********&password=Sho********&"));

