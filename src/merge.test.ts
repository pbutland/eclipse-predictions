import { mergeTables } from "./merge";

describe("mergeTables", () => {
    it("should merge tables correctly", () => {
        const inputHtml = `
            <table>
                <thead>
                    <tr class="theading">
                        <td colspan="16">Catalog of Lunar Eclipses:    2901 to   3000  (2901 CE to     3000 CE)</td>
                    </tr>
                    <tr>
                        <td style="width: 90px;">Calendar Date</td>
                        <td style="width: 30px;">TD of Greatest Eclipse</td>
                    </tr>
                </thead>
                <tbody style="text-align:center;" >
                    <tr class="even">
                    <td><a href="../LEprime/2901-3000/LE2901Feb24Tprime.html">2901 Feb 24</a></td><td>  13:07:51</td><td>   3498</td><td>    780</td><td>  11145</td><td> 157</td><td>T+</td><td>pp</td><td>  0.0413</td><td> 2.8189</td><td> 1.7462</td><td>365.1</td><td>229.7</td><td>103.3</td><td> 9N</td><td>179W</td></tr>
                    <tr class="odd">
                    <td><a href="../LEprime/2901-3000/LE2901Aug21Tprime.html">2901 Aug 21</a></td><td>  06:51:26</td><td>   3502</td><td>    780</td><td>  11151</td><td> 162</td><td>T+</td><td>pp</td><td>  0.1762</td><td> 2.5319</td><td> 1.5372</td><td>337.4</td><td>217.9</td><td> 94.8</td><td>12S</td><td> 87W</td></tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr class="theading">
                        <td colspan="16">Catalog of Lunar Eclipses:    2901 to   3000  (2901 CE to     3000 CE)</td>
                    </tr>
                    <tr>
                        <td style="width: 90px;">Calendar Date</td>
                        <td style="width: 30px;">TD of Greatest Eclipse</td>
                    </tr>
                </thead>
                <tbody style="text-align:center;" >
                    <tr class="odd">
                    <td><a href="../LEprime/2901-3000/LE2911Feb04Pprime.html">2911 Feb 04</a></td><td>  18:15:53</td><td>   3572</td><td>    794</td><td>  11268</td><td> 148</td><td>P </td><td>-a</td><td> -0.7470</td><td> 1.4887</td><td> 0.4859</td><td>292.6</td><td>146.0</td><td>  -  </td><td>15N</td><td>104E</td></tr>
                    <tr class="even">
                    <td><a href="../LEprime/2901-3000/LE2911Aug01Pprime.html">2911 Aug 01</a></td><td>  10:59:06</td><td>   3576</td><td>    795</td><td>  11274</td><td> 153</td><td>P </td><td>-t</td><td>  0.4705</td><td> 2.0237</td><td> 0.9661</td><td>352.1</td><td>206.1</td><td>  -  </td><td>17S</td><td>148W</td></tr>
                </tbody>
            </table>
        `;

        const expectedOutput = `
            <table>
                <tr>
                    <td style="width: 90px;">Calendar Date</td>
                    <td style="width: 30px;">TD of Greatest Eclipse</td>
                </tr>
                <tr>
                <td><a href="../LEprime/2901-3000/LE2901Feb24Tprime.html">2901 Feb 24</a></td><td>  13:07:51</td><td>   3498</td><td>    780</td><td>  11145</td><td> 157</td><td>T+</td><td>pp</td><td>  0.0413</td><td> 2.8189</td><td> 1.7462</td><td>365.1</td><td>229.7</td><td>103.3</td><td> 9N</td><td>179W</td></tr>
                <tr>
                <td><a href="../LEprime/2901-3000/LE2901Aug21Tprime.html">2901 Aug 21</a></td><td>  06:51:26</td><td>   3502</td><td>    780</td><td>  11151</td><td> 162</td><td>T+</td><td>pp</td><td>  0.1762</td><td> 2.5319</td><td> 1.5372</td><td>337.4</td><td>217.9</td><td> 94.8</td><td>12S</td><td> 87W</td></tr>
                <tr>
                <td><a href="../LEprime/2901-3000/LE2911Feb04Pprime.html">2911 Feb 04</a></td><td>  18:15:53</td><td>   3572</td><td>    794</td><td>  11268</td><td> 148</td><td>P </td><td>-a</td><td> -0.7470</td><td> 1.4887</td><td> 0.4859</td><td>292.6</td><td>146.0</td><td>  -  </td><td>15N</td><td>104E</td></tr>
                <tr>
                <td><a href="../LEprime/2901-3000/LE2911Aug01Pprime.html">2911 Aug 01</a></td><td>  10:59:06</td><td>   3576</td><td>    795</td><td>  11274</td><td> 153</td><td>P </td><td>-t</td><td>  0.4705</td><td> 2.0237</td><td> 0.9661</td><td>352.1</td><td>206.1</td><td>  -  </td><td>17S</td><td>148W</td></tr>
            </table>
        `.replace(/>\s+</g, '><').trim();

        const result = mergeTables(inputHtml);
        expect(result.trim()).toBe(expectedOutput);
    });
});