var ip=require('net');
var scan=require('readline-sync');
var address=scan.question("enter IP address to validate:\n");
if(ip.isIP(address))
{
	console.log("The given value is valid Ip address");
}
else
{
	console.log("The given value is not a valid IP address");
}

Execution:

PS C:\Users\user\desktop\node\week2\nodejs\ipaddress> node ipaddr
enter IP address to validate:
256.256.256.256
The given value is not a valid IP address
PS C:\Users\user\desktop\node\week2\nodejs\ipaddress> node ipaddr
enter IP address to validate:
123.43.65.255
The given value is valid Ip address
