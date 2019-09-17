/* JavaScript */
/*Bai_6_1*/
function RegisterMember()
{
    var check=true;
    name=document.getElementById("name");
    gender=document.getElementById("gender");
    date=document.getElementById("date");
    job=document.getElementById("job");
    mail=document.getElementById("mail");
    phone=document.getElementById("phone");
    name_login=document.getElementById("name_login");
    password=document.getElementById("password");
    password_again=document.getElementById("password_again");

    alert_name=document.getElementById("alert_name").innerHTML="";
    alert_gender=document.getElementById("alert_gender").innerHTML="";
    alert_date=document.getElementById("alert_date").innerHTML="";
    alert_job=document.getElementById("alert_job").innerHTML="";
    alert_mail=document.getElementById("alert_mail").innerHTML="";
    alert_phone=document.getElementById("alert_phone").innerHTML="";
    alert_name_login=document.getElementById("alert_name_login").innerHTML="";
    alert_password=document.getElementById("alert_password").innerHTML="";
    alert_password_again=document.getElementById("alert_password_again").innerHTML="";

    if(name.value=="")
    {
        document.getElementById("alert_name").innerHTML="*";
        check=false;
    }
    if(gender.value=="0")
    {
        document.getElementById("alert_gender").innerHTML="*";
        check=false;
    }
    if(date.value=="")
    {
        document.getElementById("alert_date").innerHTML="*";
        check=false;
    }
    if(job.value=="0")
    {
        document.getElementById("alert_job").innerHTML="*";
        check=false;
    }
    if(mail.value=="")
    {
        document.getElementById("alert_mail").innerHTML="*";
        check=false;
    }
    if(phone.value=="")
    {
        document.getElementById("alert_phone").innerHTML="*";
        check=false;
    }
    if(name_login.value=="")
    {
        document.getElementById("alert_name_login").innerHTML="*";
        check=false;
    }
    if(password.value=="")
    {
        document.getElementById("alert_password").innerHTML="*";
        check=false;
    }
    if(password_again.value=="")
    {
        document.getElementById("alert_password_again").innerHTML="*";
        check=false;
    }
    if(password_again.value != password.value)
    {
        document.getElementById("alert_password_again").innerHTML="*";
        check=false;
    }
    if(check==true)
    {
        document.getElementById("ketqua").innerHTML="Đã xác nhận thông tin của bạn";
    }else
    {
        document.getElementById("ketqua").innerHTML="Vui lòng nhập đầy đủ thông tin";
    }
    return check;
}

/*Bai_6_2*/
function changeImage(key){
    var dk=document.getElementById("imglarge");
    dk.src="./public/images/galaxy s8/" + document.getElementById(key).name;

    //document.getElementById("imglarge").src="./public/images/galaxy s8/"+ document.getElementById(key).name;
}

function changeColor(key){
    //đổi src hình nhỏ
    document.getElementById("imgsmall1").src="./public/images/galaxy s8/"+key+"_1.jpg";
    document.getElementById("imgsmall2").src="./public/images/galaxy s8/"+key+"_2.jpg";
    document.getElementById("imgsmall3").src="./public/images/galaxy s8/"+key+"_3.jpg";
    document.getElementById("imgsmall4").src="./public/images/galaxy s8/"+key+"_4.jpg";
    document.getElementById("imgsmall5").src="./public/images/galaxy s8/"+key+"_5.jpg";

    //đổi src hình lớn
    document.getElementById("imglarge").src="./public/images/galaxy s8/"+key+"_1.jpg";

    //đổi name hình nhỏ
    document.getElementById("imgsmall1").name=key+"_1.jpg";
    document.getElementById("imgsmall2").name=key+"_2.jpg";
    document.getElementById("imgsmall3").name=key+"_3.jpg";
    document.getElementById("imgsmall4").name=key+"_4.jpg";
    document.getElementById("imgsmall5").name=key+"_5.jpg";
}