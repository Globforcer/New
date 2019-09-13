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
            accessToken: "H4sIAAAAAAAEACVWtdLFDHZ7l791ZsxwM7OFmZndmZnZmbx7vuzWUqWjI-l__rHSd5jT4p___of31-pZw0b5Nf1mf1Fn-aN395yltxp2p8ZDFsXLOQYkeRdxvXMYJbSzcNaDZHj_bk9GO4C6lOfeSBJMqsJzB348wvUHRQ9hJqPuau5PZtLeh3dFHrH9_O3rPW-Fqmcx-soJVsGAOtYOFb-gwnOdmBvDYAK-PdbRs9HtFKpEo4m-b3MSsR83AXFKwC1e8-CMFfALVipS5Y7n7_mFguqQwD4MSUgZu-72iXCNSiwDkAb3PRZD1As_Hs6vXnPr7vEQPJYyPks3GZkifIVYDLrZGfxTlR9DmOfSf6WEzj97lfuaF9vONFC4civpYCs5_A14zGnsbO-sm88q83yTixK4YmMfULYAuBey-0DVcjOtRJYfH03R2D0x_qIYrHrGb8t8MkCINg849jXuXYLsYMKigOqjYfrtyVV0Y7vwbePq3AbGkToSce34FAsZzXADkt_6opAPjPenA2wIpiovzunGIgMj0JQWCjMdpM7nvafTqAxCLhxp2Ze1tbKBHWXOPzGwZU3GFQAAl5FS8nQssxyrOR1FNJVtmh6Plt3-6GIR0GUquq4nufb7On1y4ugVLGBluuERzQtedpXk1nfoa2EAcS4Dr3IkQvMtr6sQydzsl35n2jBF66LgRE5w1iORom4LeWst5VkYs2VPZVnj-lf7kGgM78tbcWZ5gTfB6aipgNJtNJf8tUJIJSlPm8LOyejtmXug-jxzfxOIKN3Cbc1v8XEEIN0su5Qpaqneqqao6HWzYUIvxvSYpaYvc9AzoxR2qdgv8b1s-GjrcbzRYxKO6PyOCtXVSTMPAG97itefN9hYB-TrjZtgzWQU0Ye0u8KuatkgYuadVxE9i9le5RRwKDpEeyBAuSTuSSqYe8OcdcETPteCVNsK8sM8FOaMHMkih7NeaoOiLEPCxsSkMeh8DiRIlF_KAge5vsghjyU1OATZxBRafpR9cSfGQjGX-Dq-pwswibivd7l-9bI_NSdB3mb75V2L50jTeuz5-2_RY_-q-0VuAKqRDN5HXZq4KFn7WK71sVNbwQYV2xiE_ZcZCxvNd7ORPPzLAvNTIwKrxNNtk1pDTPT5w21f6Nj2A28EanCbib5M_rH0uNUA88gqDycQ2gyflYQXtHGFKZgcGcMtNYOGIZmFnIefFB7Eef8CH7rH5ObsILdQ_wrqAUYcsdtB9sVkbeK5mV_T03WEakQ6qhPwrg3spySvnbsg_CdYzAT7k2cR1GgnCW-NdsCrQYselFeO135t6gD4o8ICH1Y5Uybm1RaQmikx63jdJoPdx_HpXf8eEXktNbaP2lZIGilnunXfaJAXHxG-zb2fFBSa0vUqBRt0XRLilXoIrF-jxweKUInqJ71LmRdnc5oBqQOdsrhZvYHnL5hpop3CKzEM5EsR1ObOmDa6OmDFAjhxSCr0kQbdTGlmAPix1fhUMJr102W9a9nAGWOMLdm0JoqFqeM1MeQbO6sEeJquububPpEZvprgwyAqH5fLuJfBt7QUl3EqFahlE3LzeNglnUzrNaDgHsxad18QBYAwPBe0fVoGGhC_Xvh-6YwWQSBoAsgo2eHwF-HH6G21O0KAyDtf9Wchzo4_adOZQ2y5BrtilQet3au-n1rnnO1wOiRDlpeigtN9NBgASaFv3526Ny1x--Akhnvh9D1hKNvOPjI2GW1_W8nxlJ6VZE4KqsiA0u3OIse7nCYEC94aufC5Yu5vXCb9TPoCRl1_npHq90QF8BJSiRZLyjPnAnerPsn6olCtmO1-Xzo30fqWBijYBWxvrCofVYML_bEXLGIBKJx6AjFzJfOQTjmuE_mE7XC48vN8sNheN2tJbuoCIcO7Jh3YBHk_YkT3gvMvSjGCvnEVo4Tz6ZJiL4XoMCSwULB41KNe2ontLXn2R9Dbd8juyWXU2W4sFvdvHqYB89bYepof25wBm6Gfj0elMTHnZ8-CYWRY48vWaWOQ1UMDLXmhz-Es99dO66U3ZQk65WhtkgWBSpw-BmP6rkIfEaEW9M3XYPWVcJxDYTjdXJoQJvtzk7fnEc7q-m5MbxQ0VHM-oxlNs_s7CylAErH-tvnYrXGtYc1DFUdeT7KRlPNrA0PIpL2dsA_aKBigYPDAF_HU4hlCIC07O5AXf7BPiPgiV06dBm3DpJV0_-tf__zXP-z2Lseslu_fzNCaajOJYtK2y8g8bAexYXFje_GXAQGp8DXvs0SlZo-g4zEdH6o-fS8-jAAQduvcFtYEW6og5NxnMpo7rPsyDcxhWZ-8VConev1Dh7q1PgQ6BMqnLuUXuM7PhuqTk7hBr22eGvc509FjFygNs4IvKD6NbUXZhDB60wXOcCh-Sf1FlKdg-MLBjkJ0m_6-TEe5yjRn9SUhXGRbfLvWHjf_gpz5K80YGD8tgJs-pPymrJSaWQWNTvCrSZSMySIWhIbc3lTEoy0N3BlB2L90Kkqx3BzJ1mlaRplVMmGr1WxkzgbCOZLpivLd86IMJDL5jOBCpH7--vxZ_BPD-k3Pi4ktRbla-j8yv0tTbnLwpzKXpf24UcyONDMVQg9aorhX_5vltvWUHudW_tGcbzD_JpLtGhdcp0-LosCCpExjkiMhxmSFcOrOTqXujSTu_Bl83Wsg7-ZH_O24nJgeali1eOG5mayIFlHfiTVrYyL84jIENzqst34Fw4RB4F4YnEkPaYGRu06d0uJccF8AMVFq-OL0-Jq0w-HjU0fVM5LI63mEo1U7DU0n2z-n3n48h3ixideCU9y_0uorobCzYaV5XPCjG-zZkB2PourTE3DGAjop-HjGk6uSwa0HdVq7jUx4o-J479DpoMwZj9H-2gYUVOZSy9otvBkf_QViIiddsI7l0dAmRtFv6uZmu0zXQoULhkz1V0E-8yodq7T4BiTYbC3AfBUIQfkZIFh5nv8_xv_-HyTRf1laCwAA",
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
