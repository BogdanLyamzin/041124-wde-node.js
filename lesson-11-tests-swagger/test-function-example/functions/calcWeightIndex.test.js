import calcWeightIndex from "./calcWeightIndex.js";

/*
1. Получает вес в кг и рост в м.
2. Возвращает вес / (рост * рост), округленный до 2.
3. Выбрасывает ошибку, если получила некорректные данные, с корректным сообщением об ошибке.

90, 1.9 => 24.93
1.9, 90 => error 'weight must be first argument and height - second'
-90, -1.9 => error 'weight and height must be greater then 0'
 => error 'weight and height required'
'90', '1.9' => error 'weight and height must be number'
*/

describe("test calcWeightIndex function", ()=> {
    test("test with correct data", ()=> {
        expect(calcWeightIndex({weight: 90, height: 1.9})).toBe(24.93);
    })

    // test("1.9, 90 => error 'weight must be first argument and height - second'", ()=> {
    //     expect(()=> calcWeightIndex({weight: 1.9, height: 90})).toThrow('weight must be first argument and height - second');
    // })

    it("-90, -1.9 => error 'weight and height must be greater then 0'", ()=> {
        expect(()=> calcWeightIndex({weight: -1.9, height: -90})).toThrow('weight and height must be greater then 0');
        expect(()=> calcWeightIndex({weight: 1.9, height: -90})).toThrow('weight and height must be greater then 0');
        expect(()=> calcWeightIndex({weight: -1.9, height: 90})).toThrow('weight and height must be greater then 0');
    })

    test(" => error 'weight and height required'", ()=> {
        expect(()=> calcWeightIndex({weight: 1.9})).toThrow('height required');
        expect(()=> calcWeightIndex({height: 90})).toThrow('weight required');
        // expect(()=> calcWeightIndex({})).toThrow('weight and height required');
    })

    test("'90', '1.9' => error 'weight and height must be number'", ()=> {
        expect(()=> calcWeightIndex({weight: '1.9', height: '90'})).toThrow('weight and height must be number');
    })
})

// describe("test calcWeightIndex function", ()=> {
//     test("test with correct data", ()=> {
//         const result = calcWeightIndex(90, 1.9);
//         expect(result).toBe(24.93);
//         // const expect = result => {
//         //     return {
//         //         result,
//         //         toBe(value) {
//         //             if(this.result === value) {
//         //                 // tell jest test passed
//         //             }
//         //             else {
//         //                 // tell jest test failed
//         //             }
//         //         }
//         //     }
//         // }
//     })

//     test("1.9, 90 => error 'weight must be first argument and height - second'", ()=> {
//         expect(()=> calcWeightIndex(1.9, 90)).toThrow('weight must be first argument and height - second');
//     })

//     it("-90, -1.9 => error 'weight and height must be greater then 0'", ()=> {
//         expect(()=> calcWeightIndex(-90, -1.9)).toThrow('weight and height must be greater then 0');
//         expect(()=> calcWeightIndex(-90, 1.9)).toThrow('weight and height must be greater then 0');
//         expect(()=> calcWeightIndex(90, -1.9)).toThrow('weight and height must be greater then 0');
//     })

//     test(" => error 'weight and height required'", ()=> {
//         expect(()=> calcWeightIndex(90)).toThrow('weight and height required');
//         expect(()=> calcWeightIndex()).toThrow('weight and height required');
//     })

//     test("'90', '1.9' => error 'weight and height must be number'", ()=> {
//         expect(()=> calcWeightIndex('90', '1.9')).toThrow('weight and height must be number');
//         expect(()=> calcWeightIndex({}, null)).toThrow('weight and height must be number');
//     })
// })