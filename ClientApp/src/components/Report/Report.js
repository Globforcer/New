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
        accessToken: "H4sIAAAAAAAEACWWxQ7sWBJE_-VtPZKpTCP1wsxlxp2Zmd2af59q9T5TunnyRkT-_cdMnn5K8j___VMPt0IzS_BeNdPcIBjCcoLfS2VeFkM1M5Fv9eo6hsupCwHu9TAnBqwS5mKExRBugPJOFU5DJb8pM3N6qgorZmuKVIGp3YG_0PuEPbh7knvzoAjOhd0WMt0r3xMe5-bXtIVHOk67OUEPUW2YGBY00MIB0ka6PthSUXvvF5kW3unyKtVCjLmAJMkyqxnEbliFmfnYbesEQeFV3UbQpFbFa4eo-MzLsNE89JiJhkIFlus6u699ekTmB9AZpHV4vJHJCnKYC8BUDU1prbK8EgE7Av2ersp-tlNIGmAFhHAv7ytcqK3t7KU8uVliZxg-N36qHvxwiw8bXgdDpxFViFZLVNzQYFN00nep788kSD0-zSAx0zRfJCsJGF7w3qQqy_NaMvVVfEvwg68F4XpVUi-kYhwwfCXyoNwAABP5Et7zglYsrUfU-S7bDuHpAjFngj3UnDsZEkqS7uKbn6G3IvQNP9e2DW_pCsy5fChvZ8A2uD1dlO60ycIXWjE-cBrR_MPMKRulOnDGHsRJWEDPnba4IKTnjxOL6-10lDdmRsy6A_Obpy5o5W4zdWbw9CLIChj0Et62zIyGAw3gYKscP9VWl4gVaBq5GJ-vuKMkqrDT41Yc0GDGEjQbTCH0LcwBWb4DJR1lBTizqe6GgBRNdX-5JLgYZt606Gh5be4Kp4OUHAHLBqj6tHd_1JbZ2NcjnOF8h2YbdlreSmY_gr31ypcB72UHa8bVuKLj8BswQJeg3JAYUBmrV1MOr1d70GY6pwKpixPlC_XBRcs7pHw_LQj1XFMlgZ4YrJ-pkvupBLawaptvfktQ3KImj5uWpIuiY-EcXdCDbc56Y_9YRbpGUgXhUkrHmcZIEj_H3ox8RQ0swUkPfxJLZuw8WsWiSjvGUzPMVX0aMzONBMmvD_6Sd1x2vXaBVvSdySGQMcMBe5INLLPzv9dCs1BC62Gm3rPmUNq6gn5DYnOQ1kPdzf7LjLc8YfhHj0ehnrRr_loUxDYZLqkfJIqWyBmJ6jenQTIb3djqA0_4kdiCzFMVKWcRPgEXTWB9mvLjUqwXqlt8L1tlUhmNFsgamRHN0_7eKJyAxRVCpoRtUlX31EuI6zAZ1iDWyZbtQ3JO-R50vH8xQtdX2OfGbyHoKGysFspBYELl1v1SR8rA6DgYSDrpvph-7TJuwrP1LP2CEM_bsS3PzyzbZ3rdvXtzPfQ6uDJvEn3F4k9l-qeisdkUJV823NcCRPavzACir7tMq9RZ2eTYKcyu0PVlP6h9tVj0Ihe5AkjQt55mXExcWJ61VAxaXApaJ-zq1k9zcWc8pfdyo_nUqPSzK6T1lmGbqfkjtk9Q5NhiS-Qy9scLyOlnbt-BgDgPMifgpV7qmpooALMcvAFxv5vrA07xwQ8aEtSNGMkye7U4aXe4gkV2ikTrAfJhB-DFRfEwyZ6ngQuUFx_Y-XIP9m0-MgA8V5ih8tnWvAmGzE0LRAt_Cbzv_Wu5YQ5Y0WjBT2HiqdHWtgFW9VUs9B4loPpiKJDYR7lvFE7HLosixXpK6laNGJCNgILOVCvJmo8k3tGsoazj1NoS_lTCPfxS7aww6Q3bYXkkk6q7HUG24KU0tqiuXuUhI7BQx_nLlX5z0rgs2VyI1wBUtJ4b1RMbq_ztdGHRrC5hMkxk4vK73AOI3UqM3l6ec93b33VAXL4C7DMC8ejsLs4Nwmnzk6-VtKM4qDBSQXm6ihMXbpxvPrWC6XMyk3Y1pLAeDlN11iE4i4Iy-mhtFSUtqjalKiyg_lJD2JeOcf0pGh-uOSWtCgwtJN_rceZDbZoZ1zy0vilRBIgyVIXiImlH-bD3GX0w_ZnBxy50Ccw4OQI9AGwUGLGuJCds-fuRce1RCUkVVWMFoopTOXyEkjCKv3hxhu5DRosI8GH5wU1MfqddlV8tz4y-QQniwh_tFx5NPs2UFoOHyUi-yNIw0ClI1hFOB2wPB9oR_-i5isfipd4sEMXzgoXjujY76SW_fx9hKRxlecUyEtY9LaschqAjXmHLkbgcgMSLl9ayp1rHaHNUH-DLO4oEuDGbE_58omwE51ELu6TtFWzwS7Asy2L9-eTvM4Hkz72Jw6y-kreSWcbgAuF30K3FndiuYVIEHzmokOR90TvhkW79CrDsQQGP3JM1ZeEvVS3TM4BZUQS7MzGPMWOhA9kU8UGrnGQICGhG7v785w-7PvM-qcXzO0eCxWf6zGPEUwalkOJkmaZ9TertjqI30tPnqkiGNBXqT1p_xpIzVXnlcnkjpZGCALt2-_D-OTvjZr0mFSDZ0tJRhf06CDIOtbvikN_eRydk8ZZVeJOmv-F62WdsET4qG-zAk8dlvAGyxfmjRtSixxFkrxeACD4OyWTzQMQMzEpWKPQWRgv96yieUx6Q2GcBEukqQHsyIXu8torHlHpF-gK4Kq374RL8bH0Ddnsucl8w7wjoZ019t54LjPodKHCjpyatkVsDzIm4gTNO0N76isGq5h51mjxZKGWnpSxepLgX5e-3Xs-MZvCA0OONkSYehR3imDDgA7I0alhHXZxl4WkDXdF__fUP5meui1X2f5SRih2btCRM0lr3Ef0CtXEH_1Y5TTUm-7EWv7JJPFm1XYLDhHD8PlyhFa6pik4YlmL_xNJ5S8hU0OFRDmASueE7C3AaiKXe0c2iA6BIhjakWSvokljDGkByFAYHCThgNFmATAJjlV3-Tu9vlDS5DkZ4lg5IHfOy6D66moMm77SjW8tCGwh3UYoO7C0u0ORzbNPntfdtN4UpoVTcA8qwdh8I6bPJnMoqVrhVMVqOcwYDpET0d93Nmil1A1F0EaZ0aig4lmMDDe5W7fugF1YF_EZLrKaKn_e8YJTr80M4-8-y6jZv7UIQQ8fS7YDfGn3bDOfPdPlHRmGhZDnbQWbT-dp23Asc2StNLn_H4wgHigb7PMfFAkaO71bDU3rza_XD_L__AwRznYeCCwAA",
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