import { sum } from "./functions";
describe('sum', () => {
    it('should return sum of 2 numbers', () => {
        expect(sum(1, 5)).toEqual(6);
    })
})