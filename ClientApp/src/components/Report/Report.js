import React, {useEffect} from 'react';
import * as pbi from 'powerbi-client';
import './Report.css';

const Report = (props) => {

  useEffect(() => {
    var models = pbi.models;
    var permissions = models.Permissions.All;
    var config = {
        type: 'report',
        tokenType: models.TokenType.Embed,
        accessToken: "H4sIAAAAAAAEAB2WxQ7sBhZE_-VtHcnYhkhZ2G4zM-zMzOxo_n1aWV6pVke6VeffP2by9FOS__n7j-V0vP3GJuYcnLbYZocrGde1STJmN_dgHppCSJjDcd52o9tlXt9TK1BRSw-r4J6-7udC_QOP7XE9iobt08GZEHwpO9s0OTFBVSAvgcwabU_YTKQqBWZgu3vgsiFuOajwZAFwxuN2Sl9bAlRqArYjXVyLlI5GvAtZnb1wk_wyB77CgpbvuzItHM-FFpazBYkUdfPhXgNLHrj9ZdtW0NqQQEpTSDlioScROfzUotpDAACrz4byTU9trfYvlxcLcNnjYLuDjrmyiilUMkXHGs0YeEuFA-1jIGRbwCcTnc7JJBrYpJRG2_NgVkJF04bOLtj7iHnpLpUuwB-ZiOj12IbmoDFHL4bTGq_PFc1LDxjxWD2vzdm9JTFS_f1uX7VFLdRmSQIpYt5mJl7p-RuEwYtgP-aHI6tCj-DOMVxp_VArtukXQqhwTtg90O8JCRCxZ4LQgTU7U1CqI-6oWQe5Q1yn0mBSVEcIwZ_RPXTq3SiwYifLKK5o_2kEwx5y5aX5OfmobJlDa0XPuy4ZD9it-XgmqWqHt3Y--oB81_XUzXpai8Tj4ScZJAFd2FQ2UzDsuVi_151TK-HkLQpGWdNfy7U5TE6C7Pq1QIMWAVV0T4is90qt1YSoWALTNythGbwdzqNTgGI1YIkYZ8tkq85Mm3nGRpi74T2A0rvxqB1rtYJyhTQAwN6rUn0k4HO7PUTYnGnm4M1SVi3vzsOZUwrQMszUW0eU-xHFSUF-yJ4AHQ_DLpzRpzTEQuGBVtnq2XzhDg4eJYLTS3_WZKj2BRNh028jEKom6dltq6X8zcb3OyAj9lpXslAX-97x73ak-2PrprJpWKlvKqjY8ydlZKMO-3ppRRl_tcIKfPRpj9ndcn-SvQ53X2KWtjeF2tEWISG8qKpUedwOE0qCI1KAt8iKsGkgbVp3w5tubnyd22ehDdhj3coswwQEUDSh7cE78unKUUbWi9Oo7q4RZjR6JSxe6qip8168RJw1jMt44wNmrx0UnZIdkCXaVV89CmlwOWaKDAuZusqFNO1KjXXRTCmej9QodZVspEtsQjOzd9wqWMEHSGaTyYF3Ev7262Z5PZBhKUCK20ZBNQ_jGXrq0yzu2WGsoIRQs8gyEs0iQLmjgGgOvldxGbkqfzWtvfsIHZEiCrPdBumM2kk7qPcBseFIlZXMwUyAG_ZPc-ljdcjJEG4BdF7fywZQcu2iTjcdhLS_52r2kO28lUvl1if0rw6Et1F8Zs5hD_BNxDuhxqMx1xqT0OGpyve-MPpVRrUGfy_isXl8kJRYnY9JaKLlY6MXlkiB3J3Jmw4cpqJpROpnMpaI6ORgRx6rbc6xtAS0QVxzzunXQA3ezGaW-GFydDfgtRMLGz45aUi450bA94_7fbzvaNMFYKAdC3QBA-q5H6fFwBsuh0JvAR7v6lRs_SAQfnW3jRhqyqHznTv2N8uYZmUmq4bsS-QKFkvoiUcKjNgmwQvrMnqbPq1hDRQWH4BX-MSFSIutXtNoAFE2Al67eTfvGe2BNJyWpmmqL64wYyXn86xENsJW8w-FLxbWWFf69oTDM3_ZCK8gnKDRX8NmU_PFuwF1KxTZdimCG0Wq9GTUZEk910Y-M_zVr2Ol45y0jjy36E3oSVpTApkow5VbPq2son5DuhlJCjQ2-fKr7P3ntd_aKS9WjGVqmpMSQhG9HD7MMjt0iFo8SRLERcJ-125NQwXmsNjfYXvkzgALO3SXzto6Oxs2Xe75i7Vlicwi8OO5ol0rXClQ6mwIZMziYKIXO9flgVrwagHl1bXf_Aq7RPo-vpZQeNFVouPYH3mmuNzTugZXWOKWRU5XRLCuUeipa-g5UmaT4L3f8e6SGtCMgcE1j0DmdF0sHRHxVRxIFRVyh2iCcvY3FfCaFjBnIW7D1jvRJu8-ePoi7vo3TsdyJJKQcAlwi2CYQ_agalR8_czNh4An_hBp_hxH51ftzRKredUIjXKK8TLDB-OBV5u_2pBnySdrSbSr9azg8qbMBHZiSb2vgmzvHfSmfTPILn2SFdCGTvUIbwsfdpuguu4mbj_zD8qXfMGKeicDsIhA3cSpP8LTUkswmhA4sv7cvnCb7KCVuz7Beo1XYh98gValYHh2RB77jIxeioilcUXP5Avs3hVYiEu53QInQeviywwaD2kv7JuKef3z568_7PrM-6QUz0898Damt12dJH_AT4-_G_AjqIwAtGTygkkQkJWL28rjwiiPGjpTVOJslJqDksmXJLRxOmE6tg-oPbSvN95fNEd5DW6jYqQhnm-EcSZPGMj05K7VpXMi-be0fSeYkDSagLoWa_MEnpXZ414K0fyRgvFk8tLl2tOUl3QF6F9n6MvSK7YGYWUGQhdBc-yiBtwGiVmxp1GJVCI8LetPX1hgdky2kOgLFp3MrrCOxvGhlVlpvdmry2Du26qKwawLdkqO8iGbxA4QjGqgpiWIFTTdw3u1EhFL1ODo4mLIT7m3ESjtxJaEb_xgBujgltDyijem0UqA38Lk49gA4iy46kBmun7HRrS__vkP8zPXxSr5P8pzO4eUOsCw3MjH9AISotk7_V_Kaaox2Y-1-MWyG1LGnz4VAJMf-DfItARM6ua5ppVKdj7Fu_iJ0sAvEIhmkzm9lLXFps_0-GcqxTiX6KS_yF5Sk7BuiSd8PvBQkhBdY9lPW0y-KeRVfFruZvzTdufj4FoqnHDkUrgMZDf5-waQb7_8l3GUKcpLCe1zutJYQXgsV44oigzzmnWpWKL3AVLSjT9x_Mogc91-pWhT1raD5vrxUlP3EqTy4FcwXU17xZidUuzo9S3LulcezTTlQFmcGhWbi3HSOMt9M_GC1fJ1SXsTtSxteDOsRoobtmA949lWGibTT3Z1EwLEPhThyvgRbkmhXvby6tac8Jux005B76YdCtPiQ_w5_HTyJKof5v_9H5A2f3JuCwAA",
        embedUrl: "https://app.powerbi.com/reportEmbed",
        id: "f6bfd646-b718-44dc-a378-b73e6b528204",
        permissions: permissions,
        settings: {
            filterPaneEnabled: true,
            navContentPaneEnabled: true,
        }
    }
    var report = window['powerbi'].embed(document.getElementById(props.id), config);
    report.on("loaded", () => {
        report.updateSettings({ bookmarksPaneEnabled: true })
    });
    return (() => report.off('loaded'));
  });

  return (
    <div className="report" id={props.id}></div>
  );
};

export default Report;