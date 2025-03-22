<?php

$gtformid = $_POST["gtlaserformid"];

if($gtformid==1)
{
	$name 		= $_POST["YourName"];
	$email 		= $_POST["YourEmail"];
	$City 		= $_POST["City"];
	$Date 		= $_POST["phoneno"];
	$Query 	  = $_POST["Query"];
	
	/* Message Code */
	
	$body = '<table width="634" border="0" align="left" cellpadding="0" cellspacing="0">
 
  <tr>
    <td align="left" valign="middle">
    <table width="400" border="0" align="center" cellpadding="0" cellspacing="0" style="margin: 0 0";>
      <tr>
        <td height="22" colspan="2" align="left" valign="middle"></td>
        </tr>
		<tr>
        <td width="227" height="30" align="left" valign="middle"><span style="color: #FFFFFF"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; color:#333333"> Name:</font></span></td>
        <td width="406" height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.stripslashes($name).'</font></td>
      </tr>
      <tr>
        <td height="1" colspan="2" align="left" valign="middle" bgcolor="#e5e5e5"></td>
        </tr>      
	  <tr>
        <td width="227" height="30" align="left" valign="middle"><span style="color: #FFFFFF"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; color:#333333"> City:</font></span></td>
        <td width="406" height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$City.'</font></td>
      </tr>
      <tr>
        <td height="1" colspan="2" align="left" valign="middle" bgcolor="#e5e5e5"></td>
        </tr>
      <tr>
	  <tr>
        <td width="227" height="30" align="left" valign="middle"><span style="color: #FFFFFF"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; color:#333333"> Email Address:</font></span></td>
        <td width="406" height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$email.'</font></td>
      </tr>
      <tr>
        <td height="1" colspan="2" align="left" valign="middle" bgcolor="#e5e5e5"></td>
        </tr>	
		<tr>
        <td width="227" height="30" align="left" valign="middle"><span style="color: #FFFFFF"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; color:#333333"> Date:</font></span></td>
        <td width="406" height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000;">'.$Date.'</font></td>
      </tr>
      <tr>
        <td height="1" colspan="2" align="left" valign="middle" bgcolor="#e5e5e5"></td>
        </tr>	
      <tr>
        <td height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:bold; color:#333333;"> Query:</font></td>
        <td height="30" align="left" valign="middle"><font style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#000000; ">'.stripslashes($Query).'</font></td>
      </tr>
	   <tr>
        <td height="1" colspan="2" align="left" valign="middle" bgcolor="#e5e5e5"></td>
        </tr>
        		  
 
    </table></td>
  </tr>
</table>';
	
	date_default_timezone_set('Asia/Calcutta');
	$gtcurrenttime = date('Y-m-d H:i:s');
		
	$sub = "Enquiry from Derma Luxeaesthetics";		
	
	$headers  = 'From: '. $name . '<admin@dermaluxeaesthetics.in>' . "\n";
    $headers .= 'Derma Luxeaesthetics' ."\n";	
	$headers .= 'Reply-To: '.$email.'' . "\r\n";    
    $headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' ."\n";
    
    

  
	mail('enquiry@dermaluxeaesthetics.in',$sub,$body,$headers);

    
	
	echo "<script>document.location.href='https://www.dermaluxeaesthetics.in/thank-you.php'</script>";
		
}





?>
