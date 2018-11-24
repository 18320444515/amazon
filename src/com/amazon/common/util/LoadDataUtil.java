package com.amazon.common.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.csvreader.CsvReader;

public class LoadDataUtil {
	
	public static String importCSVFile(String filePath){
		ArrayList<String[]> csvList = new ArrayList<String[]>(); 
		CsvReader reader = null;
		
        try {
        	reader = new CsvReader(filePath, ',', Charset.forName("GBK"));
//        	reader.readHeaders();
			while(reader.readRecord()){
			    csvList.add(reader.getValues()); //���ж�ȡ������ÿһ�е�������ӵ�list����
			}
		} catch (IOException e) {
			
			e.printStackTrace();
		}
        reader.close();
        
        String[] itemArr = null;
        for(int row = 0;row < 3;row++){
        	itemArr = csvList.get(row);
        	for(int col = 0;col < itemArr.length;col++){
        		System.out.print(itemArr[col] + ",");
        	}
        	System.out.println("-----------------");
        }
        return null;
	}
	
	public static String importExcelFile(String filePath){
		Workbook wb =null;
        Sheet sheet = null;
        Row row = null;
//        String cellData = null;
        wb = readExcel(filePath);
        
        if(wb != null){
            //������ű�������
//            list = new ArrayList<Map<String,String>>();
            //��ȡ��һ��sheet
            sheet = wb.getSheetAt(0);
            //��ȡ�������
            int rownum = sheet.getPhysicalNumberOfRows();
            //��ȡ��һ��
            row = sheet.getRow(0);
            //��ȡ�������
            int colnum = row.getPhysicalNumberOfCells();
            for (int i = 1; i < 5; i++) {
//                Map<String,String> map = new LinkedHashMap<String,String>();
                row = sheet.getRow(i);
                if(row != null){
                	System.out.print(row.getCell(1) + ",");
                	System.out.print(row.getCell(2) + ",");
                }
                System.out.println("-----------------");
            }
        }
        
		return null;
	}
	
	//��ȡexcel
    public static Workbook readExcel(String filePath){
        Workbook wb = null;
        if(filePath==null){
            return null;
        }
        String extString = filePath.substring(filePath.lastIndexOf("."));
        InputStream is = null;
        try {
            is = new FileInputStream(filePath);
            if(".xls".equals(extString)){
                return wb = new HSSFWorkbook(is);
            }else if(".xlsx".equals(extString)){
                return wb = new XSSFWorkbook(is);
            }
            
        } catch (FileNotFoundException e) {
        	System.out.println("open file error");
//            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return wb;
    }
    
    public static Object getCellFormatValue(Cell cell){
        Object cellValue = null;
        if(cell!=null){
            //�ж�cell����
            switch(cell.getCellType()){
            case Cell.CELL_TYPE_NUMERIC:{
                cellValue = String.valueOf(cell.getNumericCellValue());
                break;
            }
            case Cell.CELL_TYPE_FORMULA:{
                //�ж�cell�Ƿ�Ϊ���ڸ�ʽ
                if(DateUtil.isCellDateFormatted(cell)){
                    //ת��Ϊ���ڸ�ʽYYYY-mm-dd
                    cellValue = cell.getDateCellValue();
                }else{
                    //����
                    cellValue = String.valueOf(cell.getNumericCellValue());
                }
                break;
            }
            case Cell.CELL_TYPE_STRING:{
                cellValue = cell.getRichStringCellValue().getString();
                break;
            }
            default:
                cellValue = "";
            }
        }else{
            cellValue = "";
        }
        return cellValue;
    }
    
    public static Date getFormatDate(String strDate){
//    	System.out.println(strDate);
    	String[] timeArr = strDate.split(" ");
    	String dateStr = timeArr[0];
    	String timeStr = timeArr[1];
//    	System.out.println(dateStr);
    	
    	
    	timeArr = timeStr.split(":");
//    	System.out.println(Arrays.toString(timeArr));
    	String formatStr = null;
    	
//    	System.out.println(dateStr);
    	if(dateStr.indexOf("-") > -1){
    		formatStr = "yyyy-MM-dd";
    	}else if(dateStr.indexOf("/") > -1){
    		formatStr = "yyyy/MM/dd";
    	}
    	if(timeArr.length == 2){
    		formatStr += " HH:mm";
    	}else if(timeArr.length == 3){
    		formatStr += " HH:mm:ss";
    	}
    	
    	SimpleDateFormat simpleDateFormat = new SimpleDateFormat(formatStr);
    	Date date = null;
    	try {
    		date = simpleDateFormat.parse(strDate);
		} catch (ParseException e) {
			
			e.printStackTrace();
		}
		return date;
    }
    
    public static String changeFileName(File oldFile, String newFileName){
    	if(!oldFile.exists()) return "error";
    	String rootPath = oldFile.getParent();
    	File newFile = new File(rootPath + File.separator + newFileName);
    	System.out.println("�޸ĺ��ļ������ǣ�"+newFile.getName());
    	if (oldFile.renameTo(newFile)) return "ok";
    	return "error";
    }
    
    public static boolean canFileUse(File file){
    	if(file.isDirectory()) return false;
    	if(file.getName().indexOf("OK_") == 0) return false;
		return true;
    }
    
    public static Date getFileNameDate(String fileName){
    	String extString = fileName.substring(0, fileName.lastIndexOf("."));
//    	System.out.println(extString);
    	String[] nameSplitArr = extString.split("_");
    	System.out.println(nameSplitArr.length);
    	System.out.println(Arrays.toString(nameSplitArr));
    	
    	int length = nameSplitArr.length;
    	if(length > 3){
    		String year = nameSplitArr[length - 1].split("-")[1];
        	String month = nameSplitArr[length - 3];
        	String date = nameSplitArr[length - 2].split("-")[1];
        	
        	String strDate = year + "/" + month + "/" + date + " 00:00";
        	System.out.println(strDate);
        	return getFormatDate(strDate);
    	}
    	
    	return null;
    }
	
	public static void main(String[] args) {
		System.out.println(getFormatDate("2018/11/1 9:28"));
		
		
		String rootName = System.getProperty("user.dir");
//		System.out.println(rootName);
		
		String fileName = rootName + "\\data\\keyword\\" + "ADGROUP_KEYWORDS_11_  -11_  -2018.csv";
//		File file = new File(fileName);
		
//		importCSVFile(fileName);
//		File dataDir = new File(rootName + "\\" + "data\\keyword");
//		File[] files = dataDir.listFiles();
//		for (File file : files) {
//			System.out.println(getFileNameDate(file.getName()));
////			if(canFileUse(file.getName())) System.out.println(file.getName());
//		}
//		changeFileName(file, "OK_" + file.getName());
//		importCSVFile(fileName);
		
//		importExcelFile(rootName + "\\data\\keyword\\" + "keyword.xlsx");
//		System.out.println("+++++");
//		importCSVFile(rootName + "\\data\\rank\\" + "rank.csv");
//		System.out.println("+++++");
//		importExcelFile(rootName + "\\data\\volume\\" + "volume.xls");
		
////		System.out.println(rootName + "\\" + "data");
//		File dataDir = new File(rootName + "\\" + "data");
//		
//		File[] files = dataDir.listFiles();
//		InputStream in;
//		File doneFile = null;
//		for (File file : files) {
//			if(file.isDirectory()) continue;
//			System.out.println(file.getAbsolutePath());
//			System.out.println(dataDir.getAbsolutePath() + "\\" + file.getName());
//			
//			importCSVFile(file);
			
//			doneFile = new File(dataDir.getAbsolutePath() + "\\+" + file.getName());
//			if (file.renameTo(doneFile)){
//				System.out.println("�޸ĳɹ�!");
//			}else{
//				System.out.println("�޸�ʧ��");
//			}
//		}
		
		
		
		
	}
}
