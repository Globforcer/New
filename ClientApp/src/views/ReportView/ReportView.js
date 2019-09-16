import React, { Component } from 'react';
import * as pbi from 'powerbi-client';
import Report from 'components/Report/Report';

export class DemoReport extends Component {
    static displayName = DemoReport.name;
    /* componentDidMount() {
        //debugger;
        var models = pbi.models;
        var permissions = models.Permissions.All;
        debugger;
        var config = {
            type: 'report',
            tokenType: models.TokenType.Embed,
            accessToken: "H4sIAAAAAAAEAC2Wx86EbHaE7-XfYomcLM2CDA28ZGjYkXNssuV79-fR7GtVp0499T__2OkzzGnxz3__8wW_go5zNLgU2XFF0uyDyDWmmp5-uX6HeKwXhj3pi6ehGJ_tPjJkHacQOCzxjlNLcuQCXo58OUJ8uM8TApemG8IAM4RIhxm_UD05ppJwWwn6bUoF4ketNhAjRwTEG3aQH9zaHCKUqxSmq17rytWcvw4l2ye5MuDflQL2CJY3WT3FjTa2ST0oD6pgtYNP2tJOskk5ZWlEZYa_Fzd1a-m8LjPRBBGBVkUU5J7ZR29VGDEnnuxC8FtxB9qF1bpAJOCGY7kGMsp-0K39la5gqnR1scosv2NL28zo6SD2R9MT2lnxvI6SFpvH7DpqfqRoo691H6Ze3hBlvOlD0r-YxZBdzaGtJGTCMulUMToHvx345dKVX-U1D8SYWBFGMg0b687-FmVLZyaGIlb1nva3hsHNnUhF0Cg1HxBrCBv3dDoO14-bsLCGXi5TQpljnHXuhrtEJVNWkH5coaOTGoXmoWxohm6ks83X7zHBG7hMB1AUMbBvzpwQcIJl4HRWXu9-xOK625-NdDJBMX5eVahnKnVqSX51pe6bgRnPy9OxEBHvo1wQA2nP6UpPx2Orw1USRYw8Yu3zwCqxniutqNxgGbwqPPFcv5yqt5ieKBi84q9JW2lu5qr8TzlfgAffgQaOJEyONj2UXiyrEUgOgTQLbYcaSEG1O2r1AYURG99M2P1ViXO-6J41qOWO9yfDDYzHJJrwc0O8hJTDx3aCwz1-Z3rZn8fqn-Qi8xHiaq9WutxbYlnvSdBM_YC_BN-v7hIgN4P60z72H_lAVb3MRCdnil_as12qFicDf_LWq-lGt0rd789oVSvCrD6iIfO6lkLrrpwgn43ibF1m_0TMnCMX_01s3Bb3dmkR7LztQO6Ilyos3eNGIWgf6vsdZEWFMugwcZm2PrfLyATmYg9m21CVJknoSk-qt6IU6LGCdhVelhU9JA_uJa9Ovp7tu6uSr-uiVZLNOTwEWoafOl_Cx0Dz-tokZNmnkktYdI5daXsVcl16w72u6SWl4MnHyiwyzeKigTp896XdDRmdoJZXRn4JUFjkMTs4st6LzXBXI5hx8mLPsbm9y8gNfwqWg5GeVTHvFIyLoExWCee6necZGkZIfo-eAh5eOIMbfO3LKIoDpQmQBz0zp4_xOz34vaXPwMteSJjpzgXuRiyVDw0Vz8gU7bQo-tOkjaaHItB0MiMXSL1hqGD3jtD3WQAP6-FTlzrf5KriyONzA9uSoV5JfqjhrGfhKICTHx7j5LZ7Hb86UIJn3CdKXB2GO6JBUhMZiqtReJsoDKfti-QMK2T6dTjNKOlUSWozZQm3qR-8pGXAFjYxo16cur2pnE4-csEcg4SYcL6SdTE-fYoGG2DjIJbdsplY6ZjRnbfjfnrY6vORYFC2srmz-lBdGJWY7uY8IcbC6l7HwjSblL20jsWjz7Xz9Kd2Z-dZ3ZOVHC1mYlbh17T6a40w8r2mRDQ2EfL36Lh3anwSFy2EsqVPvYVLUBk8YlmFLIv3nkEerKr1Ozf0jP9SV3qXuo7yUyuOv-rKubgVWabgZc6gpiKxRDw7pbFWCJg9nfLs-6NmXlfFqvLcIK-cuCDOEj8O8jb7-Wd5WE-O_z0AQAY-oymYklI3VhyGd0SLqeFd6Dzw0Z4lWjLPNIgSIMWg-3NfnHbRgHpsi4-EBCkcguNNHqOiRJCSfe6oh94Y-R9F6p9VRFTCPPJVMKkd1FZiadG3hZ_8w516GB1oXXfQ4_cSnHKx5WYMIdrMNGlaZH2oaIvZRaebXdZIOWUeEwXEGkqQggRwxfpbybx9GdtMdWvkGBtsJUEAwR0ik02FBpwdnxIBtSV44tmNcYTdPOQdyiS7sG_ZMtUfNlpUQGUqE-z56wIbqlHo7wbvFZj5PLsU2iLdt1Bff1074LyxUpp477qMaz9XWLg4lBc3-epeAtUmBspRMw4QVB8TyiFW9-7Q9dmahaxA0fxA3ou3oO6mjr69JrKZjYXr4TFY65ZO0gCd3ZCQ0Tn0-8dnQzZk85HaiFVVvm1mSXYomDlklSYMd5Pg3j-sj0QcOCrJV2RlaB7z2Y_RfdJZkL46d7JRvg3TP2MvyniTXrUocs_bOFEaCaT_BKKnq1F-t7GZX2cFkOsFpA0prefLGFdFFW0-ltNDlH_961___Nc_wvYs-6yXz9_MEB_0y_XsyXlzlrp3xiAYzyNfhKD7EW8AOhoNo47cI9RHBdF0gPaOKnW1xzkvCKwrTKkeHX0rzylmPSHHSujtCzXoJ405LMbwv5XxM55avm6qUdozKqpv7Q1Jk243-znePcMiRR-VBVD1pvDkE6KXUCkh3vhHhU-uIRQK_R2I2tIryOAmFOXFCFhy91oamqw_Nhs4Tr90lSI3XbbPjdiUUHg0bR3TY--HdzROBE37g3tBF_XSSsLnLRNePG4eB_e__Vy-riPGuMfsnXM_t63bbT3zt5DjqvSXKWHiuoJcC4j0ia2CmwyYtC4KX4dR9O5hdWI5no7F3q128F8nPv7CJEf4H5ufpSk3LfxzmYLGOIr6ac77OoG9pA4zm-b-rfLaekr3Yyv_ZNlVYd3BQXjMEEawrXZzK_dsLBos6YouuvmWVzNVHaIpRel3p_dnxSobrDoC2KggaHnlGSTR93X7JUM7QrXKFCZ8jTDNq8Sz6mrzB7rPHfYnbF0djfmx5Ye1ccm_Fm2sM82M-_LArx1Gr_g1FqlQNJEz18jZA7RQrevbCrU-pFRMzCVTnACaBw_JcW9MUWIaZPnab-OppyN0EDI8v8npvZw0IxebGqS53xINtdj-XagLrEa022xWOXGvLnPYnR3GTYmtx9dNnf2oWKb5QKHEgRpO761YfVkph2diO-OUFQj0StQ_teqH437SvCJBvjpcI7UU8foM6IbvDiRgFK23AVP_v83_-3-4FWH3WgsAAA==",
            embedUrl: "https://app.powerbi.com/reportEmbed",
            id: "f6bfd646-b718-44dc-a378-b73e6b528204",
            permissions: permissions,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true,
            }
        }
        var report = window['powerbi'].embed(document.getElementById("embedContainer"), config);
        report.on("loaded", () => {
            report.updateSettings({ bookmarksPaneEnabled: true })
        });
        this.setState({ report: report })
        //report.off("loaded");
    }; */

    

    render() {
        return (
            <React.Fragment>
                <Report/>
            </React.Fragment>
        );
    }
}
