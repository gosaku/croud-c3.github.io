<!-- 学生用と企業用を切り替える(Javascript)-->
function init(){
  $('#false-parameter').hide();
  $('#student').hide();
  $('#company').hide();
  $('#signup').show();
  $('#mypage').hide();
  $('#event_list').show();
  $('#manual').show();
  $('#rate_plan').show();
  $('#cooperation_companies').show();
  $('#senior_voices').show();
  $('#job_hunting_infomation').show();
}

function judge(){
  var userId = document.getElementById("user_id").value;
  var password = document.getElementById("password").value;

  if(userId == 'gakusei' && password == '1234'){
    $('#false-parameter').hide();
    $('#user_id').hide();
    $('#password').hide();
    $('#signin').hide();
    $('#signup').hide();
    $('#student').show();
    $('#mypage').show();
    $('#rate_plan').hide();
  } else if (userId == 'kigyo' && password == '1234') {
    $('#false-parameter').hide();
    $('#user_id').hide();
    $('#password').hide();
    $('#signin').hide();
    $('#signup').hide();
    $('#company').show();
    $('#mypage').show();
    $('#senior_voices').hide();
    $('#job_hunting_infomation').hide();
  } else{
    $('#false-parameter').show();
  }
  //console.log(userId);
  //console.log(password);
}
