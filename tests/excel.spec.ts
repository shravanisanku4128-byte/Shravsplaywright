import {test,expect} from '@playwright/test';
import SearchItems from '../myfolder/sample.json';
import * as ExcelJS from 'exceljs';
import path from 'path';
 
 
test('testingJsonFile', async ({ page })=> {
    const maleSearch = SearchItems.LookingFor[1].male;
    const femaleSearch = SearchItems.LookingFor[0].female;
    console.log(maleSearch);
    console.log(femaleSearch);
});
 
test('sausdemo', async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/');
    const workbook = new ExcelJS.Workbook;
    const filepath = path.resolve(__dirname, '../myfolder/Book1.xlsx');
    await workbook.xlsx.readFile(filepath);
    const sheet = workbook.getWorksheet(1);
    if (!sheet) {
  throw new Error('Sheet $ $ $ $. not found');
  }
 
    const row = sheet.getRow(2);
    const username=row.getCell(1).text;
    const password=row.getCell(2).text;
   
 
 
});
 