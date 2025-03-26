import crypto from 'crypto';

/**
 * Получает MD5 хеш строки
 */
export function getMd5Hash(inputStr: string, upperCase: boolean = false): string {
  const hash = crypto.createHash('md5').update(inputStr).digest('hex');
  return upperCase ? hash.toUpperCase() : hash;
}

/**
 * Генерирует ключ TuneBlade на основе email
 */
export function generateKey(email: string): string {
  const numArray1 = [1, 2, 5, 7, 9, 11, 12, 13, 15, 16, 17, 19, 21, 22, 24, 25, 26, 29, 30, 31];
  const numArray2 = [22, 23, 28, 32, 13, 33, 24, 30, 21, 29, 34, 17, 20, 27, 10, 4, 26, 11, 14, 8];
  
  const calculatedHashUpper = getMd5Hash(email + ":fazilkapunjabcivillinestuneblade", true);
  let generatedKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  
  for (let index = 0; index < numArray2.length; index++) {
    const num2 = numArray2[index];
    const num1 = numArray1[index];
    generatedKey = generatedKey.substring(0, num2) + calculatedHashUpper[num1] + generatedKey.substring(num2 + 1);
  }
  
  return generatedKey;
} 