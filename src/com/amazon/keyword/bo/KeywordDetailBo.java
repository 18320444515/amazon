package com.amazon.keyword.bo;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Date;

import javax.annotation.Resource;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import com.amazon.common.entity.Keyword;
import com.amazon.common.entity.KeywordDetail;
import com.amazon.common.util.LoadDataUtil;
import com.amazon.keyword.dao.IKeywordDao;
import com.amazon.keyword.dao.IKeywordDetailDao;
import com.csvreader.CsvReader;

@Service("keywordDetailBo")
public class KeywordDetailBo implements IKeywordDetailBo{
	@Resource
	private IKeywordDao keywordDao;
	@Resource
	private IKeywordDetailDao keywordDetailDao;

	@Override
	public int txInsertBatchDetail() {
		String rootName = "F:\\itmsw_work\\amazon";
		File dataDir = new File(rootName + "\\data\\keyword");
		
		Workbook wb =null;
        Sheet sheet = null;
        Row row = null;
        
        Keyword keyword = new Keyword();
		Keyword existKeyword = new Keyword();
		KeywordDetail keywordDetail = new KeywordDetail();
		Integer keywordId = null;
        
        File[] files = dataDir.listFiles();
        for (File file : files) {
			if(file.isDirectory()) continue;
			if(!LoadDataUtil.canFileUse(file.getName())) continue;
			
			wb = LoadDataUtil.readExcel(file.getAbsolutePath());
	        if(wb != null){
	            //用来存放表中数据
	//            list = new ArrayList<Map<String,String>>();
	            //获取第一个sheet
	            sheet = wb.getSheetAt(0);
	            //获取最大行数
	            int rownum = sheet.getPhysicalNumberOfRows();
	            //获取第一行
	            row = sheet.getRow(0);
	            //获取最大列数
//	            int colnum = row.getPhysicalNumberOfCells();
	            for (int i = 1; i < rownum; i++) {
	//                Map<String,String> map = new LinkedHashMap<String,String>();
	                row = sheet.getRow(i);
	                if(row != null){
	                	keyword.setName((String)LoadDataUtil.getCellFormatValue(row.getCell(1)));
	                	keyword.setMatchType((String)LoadDataUtil.getCellFormatValue(row.getCell(2)));
//	                	System.out.println(keyword.getName() + "--" + keyword.getMatchType());
//	                	System.out.println(keywordDao);
	                	existKeyword = keywordDao.selectKeyword(keyword);
	                	if(existKeyword == null){
	                		keyword.setId(null);
	                		keywordDao.insertSelective(keyword);
	                		keywordId = keyword.getId();
	                	}else{
	                		keywordId = existKeyword.getId();
	                	}
	                	
	                	System.out.println(keywordId);
	                	keywordDetail.setKeywordId(keywordId);
	                	keywordDetail.setSbidLow(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(4))));
	                	keywordDetail.setSbidMedian(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(5))));
	                	keywordDetail.setSbidHigh(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(6))));
	                	keywordDetail.setKeywordBid(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(7))));
	                	keywordDetail.setImpression((int)Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(8))));
	                	keywordDetail.setSpend(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(11))));
	                	keywordDetail.setCpc(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(12))));
	                	keywordDetail.setOrders((int)Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(13))));
	                	keywordDetail.setSales(Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(13))));
	                	keywordDetail.setCreateTime(new Date().getTime());
//	                	keywordDetail.setMatchType((String)LoadDataUtil.getCellFormatValue(row.getCell(2)));
	                	
	                	keywordDetailDao.insertSelective(keywordDetail);
	                }
//	                System.out.println("-----------------");
	            }
	        }
	        
	        System.out.println(LoadDataUtil.changeFileName(file, "OK_" + file.getName()));
        }
        
		return 0;
	}

	@Override
	public int txInserBatchDetailCSV() {
		String rootName = "F:\\itmsw_work\\amazon";
		File dataDir = new File(rootName + "\\data\\keyword");
		
		CsvReader reader = null;
		ArrayList<String[]> csvList = null;
		String[] itemArr = null;

		Keyword keyword = new Keyword();
		Keyword existKeyword = new Keyword();
		KeywordDetail keywordDetail = new KeywordDetail();
		Integer keywordId = null;
		Date fileDate = null;
		
		File[] files = dataDir.listFiles();
        for (File file : files) {
			if(file.isDirectory()) continue;
			if(!LoadDataUtil.canFileUse(file.getName())) continue;
			
			fileDate = LoadDataUtil.getFileNameDate(file.getName());
			if(fileDate == null) continue;
			
			try {
	        	csvList = new ArrayList<String[]>(); 
	        	reader = new CsvReader(file.getAbsolutePath(), ',', Charset.forName("GBK"));
				while(reader.readRecord()){
//					System.out.println(reader.getValues());
				    csvList.add(reader.getValues()); //按行读取，并把每一行的数据添加到list集合
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        reader.close();
	        
	        if("error".equals(LoadDataUtil.changeFileName(file, "OK_" + file.getName()))) continue;
	        
	        
	        for(int row = 1;row < csvList.size();row++){
	        	itemArr = csvList.get(row);
	        	
//	        	System.out.println(itemArr);
	        	
	        	keyword = new Keyword();
	        	keyword.setName(itemArr[1]);
	        	keyword.setMatchType(itemArr[2]);
	        	existKeyword = keywordDao.selectKeyword(keyword);
	        	if(existKeyword == null){
	        		keyword.setId(null);
	        		keywordDao.insertSelective(keyword);
	        		keywordId = keyword.getId();
	        	}else{
	        		keywordId = existKeyword.getId();
	        	}
	        	
	        	keywordDetail.setKeywordId(keywordId);
//	        	System.out.println("--" + itemArr[4]);
	        	if("".equals(itemArr[4])) itemArr[4] = "0";
	        	keywordDetail.setSbidLow(Float.parseFloat(itemArr[4]));
	        	if("".equals(itemArr[5])) itemArr[5] = "0";
	        	keywordDetail.setSbidMedian(Float.parseFloat(itemArr[5]));
	        	if("".equals(itemArr[6])) itemArr[6] = "0";
	        	keywordDetail.setSbidHigh(Float.parseFloat(itemArr[6]));
	        	keywordDetail.setKeywordBid(Float.parseFloat(itemArr[7]));
	        	keywordDetail.setImpression(Integer.parseInt(itemArr[8]));
	        	keywordDetail.setSpend(Float.parseFloat(itemArr[11]));
	        	keywordDetail.setCpc(Float.parseFloat(itemArr[12]));
	        	keywordDetail.setOrders(Integer.parseInt(itemArr[13]));
	        	keywordDetail.setSales(Float.parseFloat(itemArr[14]));
	        	keywordDetail.setCreateTime(fileDate.getTime());
//	        	keywordDetail.setMatchType(itemArr[2]);
	        	if("".equals(itemArr[15])) itemArr[15] = "0";
	        	keywordDetail.setAcos(Float.parseFloat(itemArr[15]));
//	        	
	        	keywordDetailDao.insertSelective(keywordDetail);
	        	
	        }
        }
        
		return 0;
	}

	@Override
	public Object queryDetailList(KeywordDetail keywordDetail) {
		return keywordDetailDao.queryDetailList(keywordDetail);
	}
	
}
