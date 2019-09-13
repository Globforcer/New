/// <reference path="../../config/polyfills.js" />
import React, { Component } from 'react';
import * as pbi from 'powerbi-client';

export class DemoReport extends Component {
    static displayName = DemoReport.name;
    componentDidMount() {
        //debugger;
        var models = pbi.models;
        var permissions = models.Permissions.All;
        debugger;
        var config = {
            type: 'report',
            tokenType: models.TokenType.Embed,
            accessToken: "H4sIAAAAAAAEACWWxcrFDIJE3-XfZiBuA72Iu3t2yY27WzPvPh_d-1oUh4JT__7Hzt5hzop__vcfeTEhgwtuhQuJtB6bbsqHuev08XSVkX9_LM08WWaQwLjpt-NCVQHVntvD3VEWVCwgAnJyFd3t72fhjXhO3CvgJgyx5nSccLW0eLRFbrm44gMEc1DtHwDsLYyzkwIGL0Cq0s7ljLnlgEZjYYpv8wHxPe42dEAwUJ0Ryqq-NSycBYAbi-mHuGSw_NzVArW9pIQ6rBEySfjtK5TAnD6OqUqskQgAGnatZ7bFqFH-KrkcVig_N6erY5Fm2p_76N2qHsjWcV3K9HYl4eothgS_W7WWYCwnyncGXXC3z1FzdTknGVSwtoEW46AJ4YB1Zgdb8Alnwoz79qXJXFBUrMRExjd_wMlsYJnZ5kjwsiCzEvkGmLfe6jWW-4XmASDW3IVNuWiTJYmCO038VLTIKqqLCWKXOe6lujQiGY_Iob_EGfZyqyul-Wu61_TpbwGIYNjebigUKnU_bNrBTYz8VxJzGa3ElUQTOqYqbKA87BP1rClEPvEIEI3vxgjODcpRcBK0Ehbq7L3lxm45hFCyb3FhJglAZ3KFO-R5hXb-XhJA32jZUnUCf5A0Wp2wkFzCy_Wx8NxqgFWu2o5zyzCXRV09Ul-Wwrrw4xk5dCINcV-KRswJNa2YRwlqhGDTVw7K4vUSsQc_RGukAC2o__VLU6qYfhg0dDE2gUlzVplrc_P-qn7krpjrRnMApHs87sVrTVyx5GWGO_t0JnYVP4nfkidji3uc-oycdhM6kXTsO4VVVdC_H1FLBCnL8jJDivQOwt4-ICgWueTf2REhX2pOfIEypnjLA3D5Zqrxt3Au6MXnCdg1atvVg1Qb-ubCcG0vAMG6qcf2db05VGIVwpSHtp7hvG9bYwKRoJjqGcPxdXj-mL1wYvX-eW4p8lJp0SDZpYHVcpQlqLBm_MaRQypFe7f6Zf1edS_-rpMFg_1CUsfovpqeOtncTCcdSS2vT3t2iuILD6NAin4b1x7oNxIIljFBmaP2WYgz9vOj6Px8Di7WPtjKLVrOsNmqdd_HQS_8cTqrbv-1W-xrOgQZrRLxbLb2EXtWjexEXBGBNEpJN0Mv797ZlVjPP5EJSzGB3WDVeBRzOK6GAFPvG4TAmcrJ1mnRQPolocK6s_lbOqa8RqV-8G2KLm5x6OL1zw6sKMDOEIaJCfqaoPYO7uO-Pl7BL0VwFLakp6I9JkqpESURkYVkBJqkIRWZRRsSH57e6hj_1lXHPCxDH906vHm04YAouSlgdT9KJfp2pBFiNhMfwGi63WdAkoCBlDCjdpHQit15tBgbFe5oCI_hRsHt8LlPH_3ZiIGc48OBOB5AT3Kaag7O10aIjsUKfl0LP5IMfgfg2XY88EPdJ5-v4_sV13fmCOWCJDkmfVlGicUPCAvk_iSZZgtxIjDK7ydtwh_uN4xGY435vENWk-xdDxrnKbdGsVjhRe4BNNjaxx4Aqlj-MkAwn2P6ea-PTkcu5_bzKi-hGqPA_bVcrwpjgI0Ti3vgvRONdKFKxasQbwddhqWm4gMJDnmXIXPMxsq60NeEJVvpF3PA1sREM-tDZ2mcwtAAfuzXC78KeImE-yTwIYrwtElXHATCFXeHr9UarohnD9mdpCVqrZwyGjeLhFFoRSe1FzDdqI-VBJPSSjbbUWcbvxJ3rBz82doJAZjC96omHiauKsF-jrVGyXl-aZ8WvTjA-SMmHoRCFKaAkWN-t8Q9qH_-_pyCgviHtkJH6wPLi_GIV0ACC5AoiWVUXT2-tmuEJU9-Z82capa1JJY1JE-PJCExDMEe0T417KMF9xRtPsP8Rr9dyRTg4bjbJ6GIEXguhDFIXa1CId10iT_GzO1zyIf2nGp5Eyat-thRoC9xf94-123f8DDmb2BkBIwvPxa_orxp90kZxeMwpBQvOUciTUcX9dgIndwjdg4Qlg3LRmdMcG8ZA4IOUA5SYvdJUrEgsNKqvzUuZnR8n6cCq9V_rgS6MujpIsbwgrjwIZZGWgQ2G-l4rluB7jtgl_NW8O1qzOGhm13A3lLI7eo4FNJBVKd-s3MsdBapyI01YjevjBnpsE3QebdtFploygBFaPBikZ5GfX4j4t75Xb4wsq3k4AFbDVSpVtnMytH7YDpwURL9wDyTGbpFZHMOMOaqrkx_Mwg9aI-iXBfK2fpf__rnf_7htnc5Zq18_26G0Qb0PLwGBfevWAxBhgb3Ol_wclwfNbRDhQR-_YuWG5EN9YsgZ-2BpuhyXi9S4rw2_DIb7-U55xHCHTKjMc0xPCt7KAuvtr9Z6lCUFYJMBlk-4GPf01qOOM_03j0wLe9L36SVykwWsqNAtqvTr-_SOpmRGRKPX55iN-wjJ0H69SfeGoU_dIeISTHqTr_5yons-88m8fKm4AFsBnrmxBMwPkQkETtNOb_YmyfOwFR9Dde-xD7U8nadZc8IDQqBSjIBAU3GzypJE6J5EzKiP7HNHA8li3OiMu_Lz7cXlLyE2C9PnLZwVEeoJUtl43B8Wy2lhqJYa5t_gmp0j7X0i0DQPue_mN8_c25K-Ed5rGwk58MerXVs9J2cBqxkuv-T8tp6yo5zK_9i8WYAGQMnjQat39t_bNe8JfjRKKrzL3J9_Wv9SYQIPR8U6x-rP7E9kFjW01pKzmSLT-JdqS_2pHLOv2R3GCG2zoOPDn8-nDV-DV2-6zToTiZHopnt_BAEct705I-kJwQs-6yHahbipFYEfcipv2tqoPcM4MYftl0RYTnVNWc5zfX7RbkSAKtPk-_qZVo35rAkdyC3_BmxHWVDvR7M8hkbQs0UFErhpd1TZc2dl6SjnDyLHMqR06GVbYdlUSvzYpMJWxphJswlKY5xCmMoJFE2E96WKrP9z1Idn1Oda9KOpjo6OP_Zp9s2fHRo_BJBA236kfFHl-tL8UlCVBbGbqqQvzn_Yf6__wfqlQ01WgsAAA==",
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d",
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
    };

    

    render() {
        return (
            <React.Fragment>
                <div id="embedContainer" style={{ width: '100%', height: 540 }}>

                </div>
            </React.Fragment>
        );
    }
}
