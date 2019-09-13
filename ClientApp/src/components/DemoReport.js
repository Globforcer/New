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
            accessToken: "H4sIAAAAAAAEACWWxw60CA6E3-W_shI5rTQHcm4yDdzIOWdG--7bmrlbll31qey__1jJ009J_ue_f9qB8aQ5XlXfaRCIV05VR3OBgWayEJr4vjI-tfy4Je4jkXvmS7jPZvnr7oUopr7Ls-VtshKd92WC3enCDHQUevN9gqsOOoQmPOSHtCpXOJ_KZQbVNrpT-KAUCwWsVjk0xGYWzve_7FNXoWtMivSlAyHblwWFzCY9hIkVGf9u3Pl-Askj9xgkBDbHJL1UhOCILpauBwMKLL8FsY3OymLjuCaKSiV-3rzON9DpBbfHA_bSnK66c3u3pQyz2LRHpp0WYtfO6xYLFyNfPxwunO9oNE8kbl71MF_bHaug7hX9db2PyxFaTE0FsuOf7s0bvIricbtt5Aujb1PcQkeppyqNJME_jAlk3RwW-MP0irJCLkJwMfi1gr0ypGumjEnbevlSi25hYtJPUBMUgkIY8vBJSLoWQxIVRKfA7Adn4vbxYExw5YJOTpFYv2_MNMAGlgOSCwuk0nHThT7NZ5OSVx6bZjk992aKlyMhHHhcwpG-1CRsq_wjWqgISOir7nSoQgHXoHaPCPCST-KZK0Xec16ktaNQ6zYrZ_IINZveM6vho5iZcEakxHlP-MvuabL-xlI5CF5xicHE431-HQwkHx5IZmXpe3UDNM4dfFSWkNMdWm529pivMtLWZI6TM5WZa9Udj32IV74Vyox2RxfvuratZZZHU-qn--LhNTCQ7D61s-w4DkTB-DlBo20YWOsGaXKJEH_vxClwQZX3646lL2vVCWd-jIlbUz_BTJNSVUN-mTq3vM-y3r2CbajWVpq7LGp5pOvzI3TCPcBmr51dxE3YgO9v2m6vqUNUqVGwAmVaVFZceOG96exhXu3jNY3W0XMHWmG3ayKenJoIZwjHkgSnS9zZkYSergAukNNzwNzlj6qTev5HcnzIe5mvmCmfXZgaN_syxn5PSjhOeW6_e_Gk2UH6MyUttqK5jNgIHUMRiR_VLjqe4H5K-mnwJcK1fgfVTwYEjz8-nyCWbM-Y388GyiEwixmfn8AVq30EhpnvY13tlnj50zOsNnfE7m9CtVMRM6zmx0dVcHB44Wdni4LaZeTJ7uKQnTkCgOiz2FoluYKN1Oqvh_aVfkZt9Em6-o__hghMCnAm7hAE66yxYNg12-Cd9wI2GwT6kJEiuA4_nyDQibK9DWoftWLORNUVPuf9-rDN6LmddEV5xZpiKXPeKQYABkQXfVvnyhDX8AqWng27IlAiNk7-3ATsmLCr0wB637PjXl4nBkW1qL7-ifj4JB1WincRceUEfg9WvZ0b4B9uasYNmWiHICVOVOnXCri8PiLeFrcz0pnJV36YgG7t7zTI6hluigpogF7kkcLdzTvPzyGCgzbEEQIIhAdaWxtULxm4yCkeEkKGxLza_JHcDH5_DhShBe90ltF_lfx8b4xx_OXOBpRdp1mgabWascWZhZAkWcRg8F8ymFTiDPh02I8ENtK02JFbomfX3IAYs_4qmQAiiOxpXhlVOK7MIw48S1DUkp_CzZLm5WZqmyLBvUJBYoID5doyyW3SRipjrxtIDiGxS2FInXKkZ0UDcSUyqwcVV9GpEKnINbXaPz99Xd8u4tPDFY-fPFN8ZzpcDE6HnX_hr72c2q1bhY71o5PNDKLaazmwCGlAD3KGF6oFbzXOOSTTT4UBI5e-uSueci2tuN8Ba6mTcWOVT3lfm2sX44P5LhJs5bI54EMMUHlXRfedUNkk2hoUiVReYTR8d-W01la1cLkm9PIuy7bBSQ76bbStZTr2J7siJHq6B2YDxstKaDM7Ou5HvlpMrJqUnGv5SAmla7VGPmUl6C2oeNzKsqO67F5htYQbqNeTY0C4ULHFseN7jkHUfTqSTiOUcNxLZ5l9U6ULL8f3rc68lUMWFHPQikUakwnmrO2J-4ATFFHJ9cmR7VMuf-DDZYYU0Uh6mCUtcHP03UQq2Lk4sCCaNEQMfL9U6-xNH180eABibgQ4zd_tDVmLskXthzCOPMlHKg0wKj9HDlbN1sXlJkvolB9tj5wS-Mr6VwbiUDUHYe6_2nstBkklqs98d4p94B1RlMNqd2bqRR4EILgx90coTdDxWHy-xt1iO60Vyc2Bn6bXouqEy2hXOm9uENUREwf-keO7Vy2XOxwJXY7L0qSVeHwtaVR4abIEzBkqNEJWaTk5NI7CTHz2eTOxORuNAidTUNA4U9L99ec_f7j1mfdJK57f6_HZ3-4IdWpw_NOXi6uVo09TGSXThvph1KAzEMWNMgi2mxwKJBHU9d-NHDDNxigqjlQcVCZFEBMiOwlbUcONbmJEX-0IqdGOh9tXElomJj7QG6tO4w06jUC7qg-p1eCy14K9dXEM-xovDCX6-OwBmyfoqWmcKUB51QIwut8iVHenlYkMmJgp3GUBqcqxnwWlx95MQ5WobdZ6En0wVTZPgWlM1d8IEy7FCE856W0XhBCNTZrOBL6tX4xMxPDNP-lyMJXsNaW9OgNfC7i0ou3hytcuVP5Ri8okB2vEJpUn3V8nDyJnZ9Z1g8FcaSm7A3QmrpjONTm9jXr-Z1xbDqUymomMVn_9I_Mz18WqBD-VAwvelxcGMxk-PW_sLNEQhn-r3KYak_1Yi1-ZK8yD6aIpj5glO9irfoBHJDhN1ieE4RKC4o5WdbzeM95mHY5jYLbU5tUa85zGMZdbCOMGmccSmeJE27cVh0uOw8yNeC90uQwf6t6oYvBYOnkGqz26K5JYcNTBDNZJDUsZwEToAC6Lb1FHsW2l9C-BK1t_MOazPL4_qY5fJdLJ4xtGEAPXN5Rx1UK5rFl2S_kTtRlWKzafD3lFZkXyyctopQ-QBSO5TlburM5Y4uK4KSUZi1yPZX2JZ-Zap1gyyfgsmmAcNM9-5bF-DqUtPRVXEkwiVTUBMZo65Esi6xT8zYsnR70K98ZgLq9XK5AYKnht00FALmWA5D-fKnHol6L6K7t-Mv_v_5EyaXxuCwAA",
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
                <div id="embedContainer" style={{ width: '100%', height: 'calc(1140px * 0.59)' }}>

                </div>
            </React.Fragment>
        );
    }
}
