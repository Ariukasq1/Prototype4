(() => {
  function n(n, e) {
    (null == e || e > n.length) && (e = n.length);
    for (var i = 0, t = new Array(e); i < e; i++) t[i] = n[i];
    return t;
  }
  var e,
    i = window.fairmintSettings,
    t = function() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    },
    a = function() {
      return t() > 576;
    },
    r = function() {
      return t() > 992
        ? e.company_icon_logo_desktop
        : e.company_icon_logo_mobile;
    },
    o = function() {
      return e.color_button ? e.color_button : "rgb(244, 159, 15)";
    },
    d = function() {
      return e.investors ? e.investors.length : 0;
    },
    c = function(n, e) {
      var i = document.createElement("button");
      i.className = "fairmint-invest-button";
      var t = document.createElement("div");
      t.className = "fairmint-invest-button-wrapper";
      var a = document.createElement("span");
      a.textContent = "Invest";
      var o = document.createElement("img");
      (o.src = r()),
        (o.className = "fairmint-invest-button-img"),
        t.appendChild(a),
        t.appendChild(o),
        i.appendChild(t),
        n.appendChild(i),
        s(i, e),
        window.addEventListener("resize", function() {
          o.src = r();
        });
    },
    l = function(n) {
      if (!a()) return "\n      top: 0;\n      left: 0;\n      right: 0;\n    ";
      var e = n.getBoundingClientRect();
      return "\n    top: "
        .concat(e.y + e.height, "px;\n    left: ")
        .concat(e.x + e.width - 336, "px;\n  ");
    },
    f = function(t) {
      var r =
        '\n  <style>\n    * {\n      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n      user-select: none;\n      box-sizing: border-box;\n    }\n\n    body {\n      margin: 0;\n      color: #3F3F3F;\n    }\n\n    .fairmint-cafe-widget-card {\n      display: flex;\n      flex-direction: column;\n      transition: box-shadow .1s ease, transform .1s ease, -webkit-box-shadow .1s ease, -webkit-transform .1s ease;\n      background: white;\n      border-radius: #BORDER_RADIUS#px;\n      overflow: hidden;\n    }\n\n    .fairmint-cafe-widget-card-header {\n      position: relative;\n      font-size: 16px;\n      padding: 20px 24px;\n      background: linear-gradient(251.01deg, #COLOR1# 31.47%, #COLOR2# 99.55%);\n    }\n\n    .fairmint-cafe-widget-close-btn {\n      position: absolute;\n      top: 25px;\n      right: 25px;\n      background: none;\n      border: 0;\n      outline: 0;\n      cursor: pointer;\n      visibility: hidden;\n    }\n\n    .fairmint-cafe-widget-close-btn-visible {\n      visibility: visible;\n    }\n\n    .fairmint-cafe-widget-company-name {\n      height: 55px;\n      margin-bottom: 10px;\n    }\n\n    .fairmint-cafe-widget-company-description {\n      color: white;\n      font-size: 14px;\n      font-weight: normal;\n    }\n\n    .fairmint-cafe-widget-card-offering {\n      margin: 13px 24px 0 24px;\n      padding-bottom: 6.5px;\n      border-bottom: solid 1px #eeeeee;\n    }\n\n    .fairmint-cafe-widget-card-offering-feed {\n      display: flex;\n      align-items: center;\n      margin-bottom: 8px;\n      font-size: 16px;\n      font-weight: 400;\n    }\n\n    .fairmint-cafe-widget-card-offering-feed-label {\n      width: 40px;\n    }\n\n    .fairmint-cafe-widget-card-offering-feed-label img {\n      width: 100%;\n      border-radius: 50%;\n    }\n\n    .fairmint-cafe-widget-card-offering-feed-description {\n      padding: 7px 0 9px 14px;\n    }\n\n    .fairmint-cafe-widget-card-offering-feed-description span {\n      font-weight: 600;\n    }\n\n    .fairmint-cafe-widget-card-investors {\n      margin: 10px 24px 0 24px;\n      padding-bottom: 14px;\n      border-bottom: solid 1px #eeeeee;\n    }\n\n    .fairmint-cafe-widget-card-investors-label {\n      font-weight: normal;\n      font-size: 12px;\n      line-height: 16px;\n      margin-bottom: 16px;\n      ;\n    }\n\n    .fairmint-cafe-widget-card-investors-list {\n      display: flex;\n    }\n\n    .fairmint-cafe-widget-card-investor-avatar {\n      width: 36px;\n      height: 36px;\n      border-radius: 100%;\n      background: #FF875F;\n      color: white;\n      font-size: 12px;\n      line-height: 16px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-right: 12px;\n      overflow: hidden;\n    }\n\n    .fairmint-cafe-widget-card-investor-avatar img {\n      width: 100%;\n    }\n\n    .fairmint-cafe-widget-card-actions {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin: 10px 24px 0 24px;\n      padding-bottom: 10px;\n      border-bottom: solid 1px #eeeeee;\n    }\n\n    .fairmint-cafe-widget-card-actions a {\n      box-shadow: 0 0 0 0 rgba(34, 36, 38, .15) inset;\n      text-decoration: none;\n    }\n\n\n    .fairmint-cafe-widget-card-action-invest {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      height: 40px;\n      color: white;\n      background: #COLOR_BTN#;\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 20px;\n      padding: 8px 20px;\n      border-radius: 4px;\n    }\n\n    .fairmint-cafe-widget-card-action-login {\n      margin-top: 16px;\n      font-size: 12px;\n      line-height: 24px;\n      font-weight: bold;\n      color: #COLOR1#\n    }\n\n    .fairmint-cafe-widget-card-footer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 12.5px 24px 20px;\n    }\n\n    .fairmint-cafe-widget-card-footer span {\n      font-size: 12px;\n      font-weight: normal;\n      color: #5F5F5F;\n      line-height: 16px;\n      margin-right: 5px;\n    }\n\n    .fairmint-cafe-widget-card-invisible {\n      display: none;\n    }\n  </style>\n  <div class="fairmint-cafe-widget-card">\n    <div class="fairmint-cafe-widget-card-header">\n      <img class="fairmint-cafe-widget-company-name" src="#COMPANY_NAME_LOGO#">\n      <div class="fairmint-cafe-widget-company-description">\n        We are an open equity company <span role="img" aria-label="emoji">ðŸ˜ƒ</span>\n      </div>\n      <button class="fairmint-cafe-widget-close-btn #CLOSE_BTN_VISIBLE_CLASS#">\n        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41421 1.13193C2.63317 0.35088 1.36684 0.35088 0.585788 1.13193C-0.195261 1.91298 -0.195261 3.17931 0.585788 3.96036L7.17157 10.5461L0.585788 17.1319C-0.195262 17.913 -0.195262 19.1793 0.585786 19.9604C1.36684 20.7414 2.63316 20.7414 3.41421 19.9604L10 13.3746L16.5858 19.9604C17.3668 20.7414 18.6332 20.7414 19.4142 19.9604C20.1953 19.1793 20.1953 17.913 19.4142 17.1319L12.8284 10.5461L19.4142 3.96036C20.1953 3.17931 20.1953 1.91298 19.4142 1.13193C18.6332 0.35088 17.3668 0.35088 16.5858 1.13193L10 7.71772L3.41421 1.13193Z" fill="white"/>\n        </svg>      \n      </button>\n    </div>\n\n    <div class="fairmint-cafe-widget-card-offering">\n      <div class="fairmint-cafe-widget-card-offering-feed">\n        <div class="fairmint-cafe-widget-card-offering-feed-label">\n          <img src="#CAFE_LOGO#">\n        </div>\n\n        <div class="fairmint-cafe-widget-card-offering-feed-description">\n          $#CAFE_NAME#: <span>$#LATEST_PRICE#</span>\n        </div>\n      </div>\n\n      <div class="fairmint-cafe-widget-card-offering-feed #AMOUNT_INVESTED_VISIBLE#">\n        <div class="fairmint-cafe-widget-card-offering-feed-label">\n          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle opacity="0.7" cx="20" cy="20" r="20" fill="#BDFBE4" />\n            <path\n              d="M29.7273 25.8659H10.2727C10.1222 25.8659 10 25.7438 10 25.5932V14.4067C10 14.2562 10.1222 14.134 10.2727 14.134H29.7273C29.8778 14.134 30 14.2562 30 14.4067V25.5938C30 25.7443 29.8778 25.8659 29.7273 25.8659ZM10.5454 25.3205H29.4546V14.6794H10.5454V25.3205Z"\n              fill="#00B875" />\n            <path\n              d="M29.7274 16.9744C28.3115 16.9744 27.1597 15.8226 27.1597 14.4067C27.1597 14.2562 27.2818 14.134 27.4324 14.134C27.5829 14.134 27.7051 14.2562 27.7051 14.4067C27.7051 15.5221 28.6126 16.429 29.7274 16.429C29.8779 16.429 30.0001 16.5512 30.0001 16.7017C30.0001 16.8523 29.8779 16.9744 29.7274 16.9744Z"\n              fill="#00B875" />\n            <path\n              d="M27.4319 25.866C27.2813 25.866 27.1592 25.7439 27.1592 25.5933C27.1592 24.1775 28.311 23.0256 29.7269 23.0256C29.8774 23.0256 29.9996 23.1478 29.9996 23.2983C29.9996 23.4489 29.8774 23.571 29.7269 23.571C28.6116 23.571 27.7046 24.4786 27.7046 25.5933C27.7046 25.7444 27.5829 25.866 27.4319 25.866Z"\n              fill="#00B875" />\n            <path\n              d="M10.2727 16.9744C10.1222 16.9744 10 16.8523 10 16.7017C10 16.5512 10.1222 16.429 10.2727 16.429C11.388 16.429 12.295 15.5215 12.295 14.4067C12.295 14.2562 12.4172 14.134 12.5677 14.134C12.7182 14.134 12.8404 14.2562 12.8404 14.4067C12.8404 15.8226 11.6885 16.9744 10.2727 16.9744Z"\n              fill="#00B875" />\n            <path\n              d="M12.5677 25.866C12.4172 25.866 12.295 25.7439 12.295 25.5933C12.295 24.478 11.3875 23.571 10.2727 23.571C10.1222 23.571 10 23.4489 10 23.2983C10 23.1478 10.1222 23.0256 10.2727 23.0256C11.6885 23.0256 12.8404 24.1775 12.8404 25.5933C12.8404 25.7444 12.7188 25.866 12.5677 25.866Z"\n              fill="#00B875" />\n            <path\n              d="M20.1147 22.8596C19.368 22.8596 18.4338 22.3944 18.0378 22.0803C17.92 21.987 17.8999 21.8152 17.9937 21.6974C18.0875 21.5796 18.2587 21.5594 18.3765 21.6532C18.7174 21.9232 19.5322 22.3142 20.1147 22.3142C20.6813 22.3142 21.5196 22.0116 21.5196 21.3609C21.5196 20.7801 20.9486 20.551 20.2025 20.3121L19.9816 20.2401C19.3915 20.0416 18.1644 19.6277 18.1644 18.6339C18.1644 17.6735 18.9116 17.0283 20.0231 17.0283C21.1433 17.0283 21.8458 17.6037 21.8752 17.6282C21.9908 17.7248 22.0066 17.8966 21.9096 18.0122C21.8136 18.1273 21.6423 18.1436 21.5262 18.0477C21.5152 18.0389 20.9333 17.5737 20.0225 17.5737C19.2126 17.5737 18.7092 17.98 18.7092 18.6339C18.7092 19.1646 19.44 19.4826 20.155 19.7236L20.3677 19.7929C21.0429 20.0089 22.0639 20.3356 22.0639 21.3609C22.065 22.395 20.9246 22.8596 20.1147 22.8596Z"\n              fill="#00B875" />\n            <path\n              d="M20.0232 23.6717C19.8727 23.6717 19.7505 23.5496 19.7505 23.3991V16.6269C19.7505 16.4764 19.8727 16.3542 20.0232 16.3542C20.1737 16.3542 20.2959 16.4764 20.2959 16.6269V23.3991C20.2959 23.5496 20.1737 23.6717 20.0232 23.6717Z"\n              fill="#00B875" />\n          </svg>\n        </div>\n\n        <div class="fairmint-cafe-widget-card-offering-feed-description">\n          Total raised: <span>$#AMOUNT_INVESTED#</span>\n        </div>\n      </div>\n\n      <div class="fairmint-cafe-widget-card-offering-feed #COMPANY_VALUATION_VISIBLE#">\n        <div class="fairmint-cafe-widget-card-offering-feed-label">\n          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="20" cy="20" r="20" fill="#C4C4C4" />\n            <circle cx="20" cy="20" r="20" fill="#DEE8FF" />\n            <path\n              d="M19.625 20V20.375H20H29C29.3565 20.375 29.6074 20.6574 29.5769 20.9609C29.42 22.5251 28.8817 24.0322 28.0029 25.3474C26.9453 26.9302 25.4421 28.1638 23.6833 28.8923C21.9246 29.6208 19.9893 29.8114 18.1223 29.4401C16.2552 29.0687 14.5402 28.152 13.1941 26.8059C11.848 25.4598 10.9313 23.7448 10.5599 21.8777C10.1886 20.0107 10.3792 18.0754 11.1077 16.3167C11.8362 14.5579 13.0698 13.0547 14.6526 11.9971C15.9678 11.1183 17.4749 10.58 19.0391 10.4231C19.3426 10.3926 19.625 10.6435 19.625 11V20Z"\n              stroke="#5D88FD" stroke-width="0.75" />\n            <path\n              d="M29.5704 17.7949C29.6045 18.0921 29.3583 18.375 29 18.375H21.625V11C21.625 10.6417 21.9079 10.3955 22.2051 10.4296C22.9769 10.5182 23.7343 10.714 24.455 11.0125C25.4711 11.4334 26.3943 12.0503 27.172 12.828C27.9497 13.6057 28.5666 14.5289 28.9875 15.545C29.286 16.2657 29.4818 17.0231 29.5704 17.7949Z"\n              stroke="#5D88FD" stroke-width="0.75" />\n          </svg>\n        </div>\n\n        <div class="fairmint-cafe-widget-card-offering-feed-description">\n          Valuation: <span>$#COMPANY_VALUATION#</span>\n        </div>\n      </div>\n\n      <div class="fairmint-cafe-widget-card-offering-feed #PERFORMANCE_VISIBLE#">\n        <div class="fairmint-cafe-widget-card-offering-feed-label">\n          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle opacity="0.6" cx="20" cy="20" r="20" fill="#B8F9FF" />\n            <g clip-path="url(#clip0)">\n              <path\n                d="M24.5652 13.1783C24.4767 13.1783 24.3876 13.1395 24.3276 13.0637L22.4707 10.7286L20.1355 12.5855C20.0058 12.6892 19.8143 12.6692 19.7095 12.537C19.6052 12.4061 19.627 12.2158 19.7579 12.1116L22.3301 10.0655C22.461 9.9625 22.6519 9.98189 22.7561 10.114L24.8022 12.6861C24.9064 12.817 24.8846 13.0073 24.7537 13.1116C24.6985 13.1564 24.6319 13.1783 24.5652 13.1783Z"\n                fill="#00B0C7" />\n              <path\n                d="M12.7259 20.3996C12.5586 20.3996 12.4229 20.2639 12.4229 20.0966C12.4229 19.9293 12.5586 19.7936 12.7259 19.7936C17.9592 19.7936 22.2162 15.5366 22.2162 10.3033C22.2162 10.136 22.3519 10.0002 22.5192 10.0002C22.6865 10.0002 22.8222 10.136 22.8222 10.3033C22.8222 15.8705 18.2932 20.3996 12.7259 20.3996Z"\n                fill="#00B0C7" />\n              <path\n                d="M12.7259 30.0001C12.5586 30.0001 12.4229 29.8643 12.4229 29.697V25.0352C12.4229 24.8679 12.5586 24.7322 12.7259 24.7322C12.8932 24.7322 13.0289 24.8679 13.0289 25.0352V29.697C13.0289 29.8643 12.8932 30.0001 12.7259 30.0001Z"\n                fill="#00B0C7" />\n              <path\n                d="M17.5755 30.0001C17.4082 30.0001 17.2725 29.8643 17.2725 29.6971V22.094C17.2725 21.9268 17.4082 21.791 17.5755 21.791C17.7428 21.791 17.8785 21.9268 17.8785 22.094V29.6971C17.8785 29.8643 17.7428 30.0001 17.5755 30.0001Z"\n                fill="#00B0C7" />\n              <path\n                d="M22.4246 29.9999C22.2573 29.9999 22.1216 29.8642 22.1216 29.6969V19.9805C22.1216 19.8132 22.2573 19.6775 22.4246 19.6775C22.5919 19.6775 22.7276 19.8132 22.7276 19.9805V29.6969C22.7276 29.8642 22.5919 29.9999 22.4246 29.9999Z"\n                fill="#00B0C7" />\n              <path\n                d="M27.2737 30C27.1065 30 26.9707 29.8642 26.9707 29.697V16.8709C26.9707 16.7036 27.1065 16.5679 27.2737 16.5679C27.441 16.5679 27.5768 16.7036 27.5768 16.8709V29.697C27.5768 29.8642 27.441 30 27.2737 30Z"\n                fill="#00B0C7" />\n            </g>\n            <defs>\n              <clipPath id="clip0">\n                <rect width="20" height="20" fill="white" transform="translate(10 10)" />\n              </clipPath>\n            </defs>\n          </svg>\n        </div>\n\n        <div class="fairmint-cafe-widget-card-offering-feed-description">\n          Performance: <span>#PERFORMANCE#%</span>\n        </div>\n      </div>\n    </div>\n\n    #INVESTORS#\n\n    <div class="fairmint-cafe-widget-card-actions">\n      <a class="fairmint-cafe-widget-card-action-invest" href="#SIGNUP_URL#" target="_blank">Invest Now</a>\n      <a class="fairmint-cafe-widget-card-action-login" href="#SIGNIN_URL#" target="_blank">Log in</a>\n    </div>\n\n    <div class="fairmint-cafe-widget-card-footer">\n      <span>Powered by </span>\n      <a href="https://fairmint.co" aria-label="fairmint.co" target="_blank">\n        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M15.9717 9.58794L17.8531 8.48364V13.8859H15.9717V9.58794Z" fill="#3F3F3F" />\n          <path d="M40.0723 9.58794L41.9534 8.48364V13.8859H40.0723V9.58794Z" fill="#3F3F3F" />\n          <path d="M2.61914 9.5967V13.9044H4.50002V8.49268L2.61914 9.5967Z" fill="#3F3F3F" />\n          <path\n            d="M55.5922 11.2707V8.49268L53.7104 9.5967V11.4279C53.7104 13.1993 54.1812 14.0921 56.1719 14.0921C56.6108 14.0921 57.2687 14.0286 57.6605 13.842V12.258C57.4251 12.4302 56.9704 12.494 56.6415 12.494C55.8117 12.494 55.5922 12.0227 55.5922 11.2707Z"\n            fill="#3F3F3F" />\n          <path\n            d="M12.1638 12.8711H12.1156C11.5844 13.715 10.7055 14.0921 9.70267 14.0921C8.30726 14.0921 6.95898 13.3233 6.95898 11.8355C6.95898 9.3899 9.81218 9.21773 11.6933 9.21773H12.1636V9.01394C12.1636 8.08931 11.4419 7.60329 10.4385 7.60329C9.65498 7.60329 8.93496 7.91686 8.43202 8.38736L7.44445 7.39978C8.27537 6.55333 9.4512 6.19263 10.6414 6.19263C13.8556 6.19263 13.8556 8.51295 13.8556 9.57926V13.9044H12.1633L12.1638 12.8711ZM12.0541 10.533H11.6628C10.6276 10.533 8.84098 10.6126 8.84098 11.6939C8.84098 12.3831 9.54547 12.6812 10.1574 12.6812C11.4427 12.6812 12.0543 12.0069 12.0543 10.9572L12.0541 10.533Z"\n            fill="#3F3F3F" />\n          <path\n            d="M19.9524 6.38067H21.833V7.57119H21.8649C22.2727 6.71032 23.1034 6.19214 24.0899 6.19214C24.3261 6.19214 24.5459 6.23955 24.7641 6.30165V8.12043C24.4508 8.04197 24.1528 7.97903 23.8545 7.97903C22.0831 7.97903 21.8327 9.46788 21.8327 9.87516V13.9039H19.9521L19.9524 6.38067Z"\n            fill="#3F3F3F" />\n          <path\n            d="M26.2512 6.38067H28.0376V7.55539H28.0692C28.398 6.85061 29.118 6.19214 30.3729 6.19214C31.5329 6.19214 32.3325 6.64628 32.724 7.58783C33.2724 6.63131 34.0714 6.19214 35.2009 6.19214C37.2066 6.19214 37.9116 7.61832 37.9116 9.42185V13.9039H36.031V9.64033C36.031 8.70016 35.7485 7.88449 34.6365 7.88449C33.4615 7.88449 33.0217 8.85681 33.0217 9.8283V13.9042H31.14V9.42213C31.14 8.49583 30.7646 7.88477 29.8564 7.88477C28.6173 7.88477 28.1305 8.79471 28.1305 9.79698V13.9042H26.251L26.2512 6.38067Z"\n            fill="#3F3F3F" />\n          <path\n            d="M44.0391 6.38067H45.8265V7.58783H45.8578C46.2016 6.83453 46.9089 6.19214 48.1624 6.19214C50.1838 6.19214 50.9049 7.61832 50.9049 9.15486V13.9039H49.0243V10.0939C49.0243 9.26437 48.9617 7.88421 47.6442 7.88421C46.4076 7.88421 45.9208 8.79415 45.9208 9.79642V13.9036H44.0391V6.38067Z"\n            fill="#3F3F3F" />\n          <path\n            d="M5.42499 1.8667C3.08914 1.8667 2.61865 3.22995 2.61865 5.31461V6.38924H4.50007V5.01684C4.50007 4.18647 4.6559 3.46506 5.70696 3.46506C5.97368 3.46506 6.22431 3.51275 6.4902 3.57568L6.61468 1.97594C6.22403 1.89747 5.83116 1.8667 5.42499 1.8667Z"\n            fill="#3F3F3F" />\n          <path d="M55.5921 4.20166H53.7104V6.38086H55.5921V4.20166Z" fill="#3F3F3F" />\n          <path d="M6.24465 6.38916H1.06641V7.98946H6.24465V6.38916Z" fill="#00D1C1" />\n          <path d="M57.7229 6.3811H52.1582V7.98168H57.7229V6.3811Z" fill="#00D1C1" />\n          <path d="M17.8526 6.3811H15.9692V7.98168H17.8526V6.3811Z" fill="#00D1C1" />\n          <path d="M41.9547 6.3811H40.0713V7.98168H41.9547V6.3811Z" fill="#00D1C1" />\n        </svg>\n      </a>\n    </div>\n  </div>\n  <script>\n    document.getElementsByClassName(\'fairmint-cafe-widget-close-btn\')[0].addEventListener(\'click\', (e) => {\n      e.preventDefault();\n      const frameContainer = window.parent.document.getElementsByClassName(\'fairmint-widget-frame\')[#CONTAINER_INDEX#];\n      frameContainer.classList.remove(\'fairmint-widget-frame-visible\');\n    });\n  </script>\n';
      (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(
        "#CLOSE_BTN_VISIBLE_CLASS#",
        a() ? "" : "fairmint-cafe-widget-close-btn-visible"
      )).replace("#CONTAINER_INDEX#", t)).replace(
        "#BORDER_RADIUS#",
        a() ? 4 : 0
      )).replace(
        /#COLOR1#/g,
        e.color1 ? e.color1 : "rgb(86, 41, 182)"
      )).replace(
        "#COLOR2#",
        e.color2 ? e.color2 : "rgb(117, 73, 211)"
      )).replace("#COMPANY_NAME_LOGO#", e.company_name_logo)).replace(
        "#CAFE_LOGO#",
        e.cafe_logo
      )).replace("#CAFE_NAME#", e.cafe_name)).replace(
        "#LATEST_PRICE#",
        (e.latest_price || 0).toFixed(2)
      )).replace("#SIGNUP_URL#", e.signup_url)).replace(
        "#SIGNIN_URL#",
        e.signin_url
      )).replace("#COLOR_BTN#", o())),
        (r = i.amountInvested
          ? (r = r.replace(
              "#AMOUNT_INVESTED#",
              Math.round(e.amount_invested).toLocaleString()
            )).replace("#AMOUNT_INVESTED_VISIBLE#", "")
          : r.replace(
              "#AMOUNT_INVESTED_VISIBLE#",
              "fairmint-cafe-widget-card-invisible"
            )),
        (r = i.companyValuation
          ? (r = r.replace(
              "#COMPANY_VALUATION#",
              Math.round(e.company_valuation).toLocaleString()
            )).replace("#COMPANY_VALUATION_VISIBLE#", "")
          : r.replace(
              "#COMPANY_VALUATION_VISIBLE#",
              "fairmint-cafe-widget-card-invisible"
            )),
        (r = i.performance
          ? (r = r.replace(
              "#PERFORMANCE#",
              (e.performance || 0).toFixed(1)
            )).replace("#PERFORMANCE_VISIBLE#", "")
          : r.replace(
              "#PERFORMANCE_VISIBLE#",
              "fairmint-cafe-widget-card-invisible"
            ));
      var c = "";
      if (d() >= 5) {
        (c +=
          '<div class="fairmint-cafe-widget-card-investors">\n        <div class="fairmint-cafe-widget-card-investors-label">\n          Join our '),
          (c += e.owners),
          (c +=
            ' investors:\n        </div>\n        <div class="fairmint-cafe-widget-card-investors-list">');
        var l,
          f = (function(e, i) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
              if (
                Array.isArray(e) ||
                (t = (function(e, i) {
                  if (e) {
                    if ("string" == typeof e) return n(e, i);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === t &&
                        e.constructor &&
                        (t = e.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(e)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? n(e, i)
                        : void 0
                    );
                  }
                })(e)) ||
                (i && e && "number" == typeof e.length)
              ) {
                t && (e = t);
                var a = 0,
                  r = function() {};
                return {
                  s: r,
                  n: function() {
                    return a >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[a++] };
                  },
                  e: function(n) {
                    throw n;
                  },
                  f: r,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              d = !0,
              c = !1;
            return {
              s: function() {
                t = e[Symbol.iterator]();
              },
              n: function() {
                var n = t.next();
                return (d = n.done), n;
              },
              e: function(n) {
                (c = !0), (o = n);
              },
              f: function() {
                try {
                  d || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              },
            };
          })(e.investors.slice(0, 5));
        try {
          for (f.s(); !(l = f.n()).done; ) {
            var s = l.value;
            (c += '<div class="fairmint-cafe-widget-card-investor-avatar">'),
              (c += '<img alt="" src="'.concat(s.picture, '" />')),
              (c += "</div>");
          }
        } catch (n) {
          f.e(n);
        } finally {
          f.f();
        }
        c +=
          '\n      <div class="fairmint-cafe-widget-card-investor-avatar">\n        YOU\n      </div>\n      </div>\n    </div>';
      }
      return r.replace("#INVESTORS#", c);
    },
    s = function(n, e) {
      var i = document.createElement("div");
      i.className = "fairmint-widget-container";
      var t = document.createElement("div");
      (t.className = "fairmint-widget-frame"), (t.style.cssText = l(n));
      var r = document.createElement("iframe");
      (r.name = "fairmint-widget-frame"),
        (r.allowFullscreen = !0),
        (r.title = "CAFE Offering Widget"),
        t.appendChild(r),
        i.appendChild(t),
        document.getElementsByTagName("body")[0].appendChild(i),
        r.contentWindow.document.write(f(e));
      var o = function(n) {
          n.preventDefault(),
            n.stopPropagation(),
            t.classList.add("fairmint-widget-frame-visible");
        },
        d = function(n) {
          n.preventDefault(),
            n.stopPropagation(),
            t.classList.remove("fairmint-widget-frame-visible");
        },
        c = function(n) {
          n.preventDefault(),
            n.stopPropagation(),
            t.classList.toggle("fairmint-widget-frame-visible");
        },
        s = function(n) {
          n.preventDefault(), n.stopPropagation();
        },
        p = function() {
          a()
            ? ((n.onmouseover = o),
              (n.onmouseout = d),
              (t.onmouseover = o),
              (t.onmouseout = d),
              (n.onclick = s))
            : ((n.onmouseover = s),
              (n.onmouseout = s),
              (t.onmouseover = s),
              (t.onmouseout = s),
              (n.onclick = c));
        };
      p(),
        window.addEventListener("resize", function() {
          (t.style.cssText = l(n)),
            r.contentWindow &&
              ((r.contentWindow.document.body.innerHTML = ""),
              r.contentWindow.document.write(f(e))),
            p();
        });
    };
  !(function() {
    if (i && i.org) {
      var n = document.getElementsByClassName("fairmint-invest-widget");
      if (n) {
        var t =
          "production" === i.stage
            ? "invest"
            : "staging" === i.stage
            ? "preview"
            : "dev";
        fetch(
          "https://api."
            .concat(t, ".fairmint.co/service1/offering/status?orgId=")
            .concat(i.org)
        )
          .then(function(n) {
            return n.json();
          })
          .then(function(t) {
            var a, r;
            (e = t),
              ((r = document.createElement(
                "style"
              )).innerHTML = "\n    .fairmint-invest-widget {\n      display: inline-flex;\n    }\n\n    .fairmint-widget-container div, .fairmint-widget-container iframe, .fairmint-widget-container span {\n      border: none;\n    }\n\n    .fairmint-widget-frame {\n      z-index: 99999999;\n      position: fixed;\n      min-width: 336px;\n      min-height: "
                .concat(
                  (d() >= 5 ? 459 : 366) +
                    40 *
                      ((a = 0),
                      i.amountInvested && a++,
                      i.companyValuation && a++,
                      i.performance && a++,
                      a),
                  "px;\n      padding-top: 4px;\n      visibility: hidden;\n      box-shadow: 0px 0px 3px rgba(5, 5, 5, 0.04), 28px 28px 88px rgba(0, 0, 0, 0.08);\n    }\n\n    .fairmint-widget-frame-visible {\n      visibility: visible;\n    }\n\n    .fairmint-widget-frame iframe {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n    }\n\n    .fairmint-invest-button {\n      display: inline-flex;\n      align-items: center;\n      cursor: pointer;\n      background: "
                )
                .concat(
                  o(),
                  ";\n      box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;\n      color: white;\n      text-shadow: none;\n      outline: 0;\n      border: none;\n      vertical-align: baseline;\n      font-style: normal;\n      text-decoration: none;\n      border-radius: 4px;\n      font-size: 16px;\n      font-weight: 600;\n      line-height: 20px;\n      letter-spacing: normal;\n      position: relative;\n      background-position: center;\n      transition: background 0.8s;\n      width: "
                )
                .concat(i.width ? i.width : 132, "px;\n      height: ")
                .concat(
                  i.height ? i.height : 48,
                  "px;\n    }\n\n    .fairmint-invest-button-wrapper {\n      display: inline-flex;\n      margin: auto;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .fairmint-invest-button-img {\n      margin-left: 8px;\n      width: 28px;\n    }\n\n    @media screen and (max-width: 992px) {\n      .fairmint-invest-button {\n        width: auto;\n        height: auto;\n        padding: 0;\n        background: transparent;\n      }\n\n      .fairmint-invest-button-wrapper {\n      }\n\n      .fairmint-invest-button-wrapper span {\n        display: none;\n      }\n\n      .fairmint-invest-button-wrapper img.fairmint-invest-button-img {\n        margin: 0;\n        width: "
                )
                .concat(
                  i.mobileWidth ? i.mobileWidth : 36,
                  "px;\n        height: "
                )
                .concat(
                  i.mobileHeight ? i.mobileHeight : 36,
                  "px;\n      }\n    }\n  "
                )),
              document.getElementsByTagName("head")[0].appendChild(r);
            for (var l = 0; l < n.length; l++)
              n[l].childNodes.length || c(n[l], l);
          })
          .catch(function(n) {
            console.error(n),
              console.error(
                "Failed to initialize CAFE offering widget! Please contact fairmint support team."
              );
          });
      } else
        console.error("Couldn't find 'fairmint-invest-widget' DOM element!");
    } else
      console.error(
        "Failed to initialize CAFE offering widget! Please contact fairmint support team."
      );
  })();
})();
