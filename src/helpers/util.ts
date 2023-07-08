import { Cruise } from "@/types";
import BigNumber from 'bignumber.js';


export const calculateTotalArea = (cruises:Cruise[]) => {// Returns the sum of the total areas of each cruise 
    let areaSum = 0;
    cruises.forEach((item) => {
      if(item.total_area !== null)
        areaSum += Number(item.total_area);
    });
    return BigNumber(areaSum);
  };

export function makeid(length:number) {// Used to help make unique keys without using index in map functions
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}