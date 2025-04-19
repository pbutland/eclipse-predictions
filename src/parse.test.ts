import { convertToValidPropertyName } from './parse';
import { convertDateFormat } from './parse';

describe('convertToValidPropertyName', () => {
    it('should handle empty strings', () => {
        expect(convertToValidPropertyName("")).toBe("");
    });
    it('should convert special characters and spaces to camel case', () => {
        expect(convertToValidPropertyName("ΔFahrenheit")).toBe("deltaFahrenheit");
        expect(convertToValidPropertyName("!@#$%^&*()_+{}|:<>?=-[];',./`~  ")).toBe("");
        expect(convertToValidPropertyName("Temperature ΔFahrenheit")).toBe("temperatureDeltaFahrenheit");
        expect(convertToValidPropertyName("Scientific Δ symbol")).toBe("scientificDeltaSymbol");
    });
    it('should remove units', () => {
        expect(convertToValidPropertyName("Zen<br>Lat<br>&#176;")).toBe("zenLat");
        expect(convertToValidPropertyName("Total<br>Dur<br>m")).toBe("totalDur");
        expect(convertToValidPropertyName("ΔT Sigma<br>s")).toBe("deltaTSigma");
        expect(convertToValidPropertyName("Path Width km")).toBe("pathWidth");
    });
});

describe('convertDateFormat', () => {
    it('should convert date format from "YYYY-MMM-DD" to "YYYY-MM-DD"', () => {
        expect(convertDateFormat("2002-Jun-10")).toBe("2002-06-10");
        expect(convertDateFormat("2023 Jan 01")).toBe("2023-01-01");
        expect(convertDateFormat("-2002-Jun-10")).toBe("-2002-06-10");
        expect(convertDateFormat("-2023 Jan 01")).toBe("-2023-01-01");
    });
    it('should handle invalid date formats gracefully', () => {
        expect(convertDateFormat("Invalid-Date")).toBe("Invalid-Date");
    });
});
