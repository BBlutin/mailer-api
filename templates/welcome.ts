const WelcomeEmail = (
  appName: string,
  logoUrl: string,
  user: string,
  appUrl: string
) => {
  return `
  <!DOCTYPE html>
  <html lang="en" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <meta name="color-scheme" content="light dark">
    <title>Bienvenue sur ${appName} !</title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style>
  /* Dark mode settings */
      :root {
        color-scheme: light dark;
      }
  
  /* Reset */
      html, body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
      }
      .main {
        box-sizing: border-box;
      }
  
  /* Responsive adjustments */
      @media screen and (max-width: 480px) {
        .column {
          display: block !important;
          width: 100% !important;
          box-sizing: border-box;
          padding: 0 14px 14px 14px !important;
        }
        .column:last-child {
          padding-bottom: 0 !important;
        }
        .column.alt {
          padding-top: 14px !important;
          padding-bottom: 0 !important;
        }
        .column.alt:last-child {
          padding-bottom: 14px !important;
        }
        .column img.fill {
          width: 100% !important;
          height: auto !important;
        }
        .icons .column {
          width: 50% !important;
          float: left;
        }
        .icons .column:nth-child(3) {
          padding-bottom: 0 !important;
        }
        .icons .column.alt:nth-child(3) {
          padding-bottom: 14px !important;
        }
      }
  
  /* Dark mode adjustments */
      @media (prefers-color-scheme: dark) {
        body, .wrapper {
          background-color: #222 !important;
        }
        h1, h2, h3, p, ul li, code {
          color: #f1f1f1 !important;
        }
        .column.alt {
          background-color: #1b1b1b !important;
        }
        .btn a {
          background: #a6a6a6 !important;
          color: #404040 !important;
        }
      }
    </style>
  </head>
  <body style="background: #ffffff;">
    <div style="display: none;">&nbsp;</div>
    <div role="article" lang="en" dir="ltr" class="wrapper" style="background: #ffffff; font-size: 16px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  
      <!--[if true]>
      <table role="presentation" style="width: 600px;" align="center"><tr><td>
      <![endif]-->
      <div class="main" style="max-width: 600px; margin: 0 auto;">
  
  <!-- Header -->
  
        <div class="content" style="margin: 0; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 24px; color: #333333; text-align: left; font-weight: 300;">
  
          <div style="width: 100%; height: 14px">&nbsp;</div>
          <div>
            <!--[if true]>
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="all: unset; opacity: 0;">
              <tr>
            <![endif]-->
            <div style="display: table; width: 100%;">
              <!--[if true]><td width="33.3%"><![endif]-->
              <!--[if !true]><!-->
                <div class="column" style="display: table-cell; width: 33.3%;">
              <!--<![endif]-->
                  <img height="auto" src="${logoUrl}" width="200" alt="" style="display: block; width: 200px; height: auto;">
              <!--[if !true]><!-->
                </div>
              <!--<![endif]-->
              <!--[if true]>
                </td>
                <td width="66.6%">
              <![endif]-->
              <!--[if !true]><!-->
                <div class="column" style="display: table-cell; width: 66.6%; vertical-align: middle; text-align: center;">
              <!--<![endif]-->
                  <h1 style="margin: 0; font-family: Georgia, Times New Roman, serif; font-size: 18px; line-height: 24px; color: #333333; text-align: center; font-weight: normal;">Bienvenue sur ${appName} !</h1>
              <!--[if !true]><!-->
                </div>
              <!--<![endif]-->
              <!--[if true]></td><![endif]-->
            </div>
            <!--[if true]>
              </tr>
            </table>
            <![endif]-->
          </div>
  
  <!-- Content -->
  
          <div style="width: 100%; height: 28px">&nbsp;</div><div bgcolor="#eeeeee">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td class="column alt" style="background-color: #eeeeee; padding: 14px; text-align: center;">
                    <div>
                      <h2 style="margin: 0; margin-bottom: 10px; font-family: Georgia, Times New Roman, serif; font-size: 28px; line-height: 32px; color: #333333; font-weight: normal;">Nous sommes heureux de vous savoir parmis nous ${user} ????</h2>
                    </div>
                    <p style="margin: 0; margin-bottom: 10px; font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 18px; line-height: 24px; color: #333333; font-weight: 300;">Pour acc??der ?? l'application vous pouvez utiliser <a href="${appUrl}" style="text-decoration: underline; color: #1467ac;">ce lien</a>.</p>
                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" class="btn" style="display: inline-block; margin: 0px auto; border-collapse: separate; border-radius: 50px; line-height: 100%;">
                      <tbody style="display: inline-block;">
                        <tr>
                          <td style="display: inline-block; border: none; border-radius: 50px; cursor: auto; mso-padding-alt: 12px 25px; background: #333333;"><a href="https://blocksedit.com/#" style="margin: 0; display: inline-block; border-radius: 50px; padding: 12px 25px; background: #333333; color: #ffffff; font-family: Helvetica, Arial,sans-serif; font-size: 18px; font-weight: 400; line-height: 1; text-decoration: none; mso-padding-alt: 0px; text-align: center;" target="_blank">Call to Action</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
  
        </div>
  
  <!-- Footer -->
  
        <div style="margin: 30px 20px;">
          <p style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 20px; color:#333333; text-align: center;">
            <a href="https://blocksedit.com/#" target="_blank" style="text-decoration: underline; color: #1467ac;">Nav Link</a> | <a href="https://blocksedit.com/#" target="_blank" style="text-decoration: underline; color: #1467ac;">Nav Link</a> | <a href="https://blocksedit.com/#" style="text-decoration: underline; color: #1467ac;">Nav Link</a>
          </p>
          <p style="font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; color: #333333; text-align:center">
            Reason for email being sent.<br>Mailing address<br>
            <a href="https://blocksedit.com/#" target="_blank" style="color: #1467ac; text-decoration: underline;">Unsubscribe</a>
          </p>
        </div>
  
      </div>
      <!--[if true]>
      </td></tr></table>
      <![endif]-->
  
    </div>
  
  </body>
  </html>`;
};

const WelcomeSubject = (appName: string) => {
  return `Bienvenue sur  ${appName} ???`;
};

export { WelcomeEmail, WelcomeSubject };
