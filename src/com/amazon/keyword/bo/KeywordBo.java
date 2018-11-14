package com.amazon.keyword.bo;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import com.amazon.common.entity.Keyword;
import com.amazon.common.entity.KeywordDetail;
import com.amazon.common.entity.KeywordRank;
import com.amazon.common.util.LoadDataUtil;
import com.amazon.keyword.dao.IKeywordDao;
import com.amazon.keyword.dao.IKeywordDetailDao;
import com.amazon.keyword.dao.IKeywordRankDao;

@Service("keywordBo")
public class KeywordBo implements IKeywordBo{
	@Resource
	private IKeywordDao keywordDao;
	@Resource
	private IKeywordDetailDao keywordDetailDao;
	@Resource
	private IKeywordRankDao keywordRankDao;

	@Override
	public int txUpdateVolume() {
		String rootName = "F:\\itmsw_work\\amazon";
		File dataDir = new File(rootName + "\\data\\volume");
		
		Workbook wb =null;
        Sheet sheet = null;
        Row row = null;
        
        Keyword keyword = new Keyword();
        Keyword existKeyword = new Keyword();
        
        File[] files = dataDir.listFiles();
        for (File file : files) {
			if(file.isDirectory()) continue;
			if(!LoadDataUtil.canFileUse(file.getName())) continue;
			
			wb = LoadDataUtil.readExcel(file.getAbsolutePath());
			if("error".equals(LoadDataUtil.changeFileName(file, "OK_" + file.getName()))) continue;
	        if(wb != null){
	            //获取第一个sheet
	            sheet = wb.getSheetAt(0);
	            //获取最大行数
	            int rownum = sheet.getPhysicalNumberOfRows();
	            //获取第一行
	            row = sheet.getRow(0);
	            for (int i = 1; i < rownum; i++) {
	                row = sheet.getRow(i);
	                if(row != null){
	                	keyword = new Keyword();
	    	        	keyword.setName((String)LoadDataUtil.getCellFormatValue(row.getCell(0)));
	    	        	existKeyword = keywordDao.selectKeyword(keyword);
	    	        	
	    	        	if(existKeyword == null) continue;
	    	        	
    	        		existKeyword.setVolume((int)Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(1))));
	    	        	keywordDao.updateByPrimaryKeySelective(existKeyword);
	                }
	            }
	        }
	        
        }
		
		return 0;
	}

	@Override
	public Object queryAllDataById(Keyword keyword) {
		KeywordDetail keywordDetail = new KeywordDetail();
		keywordDetail.setKeywordId(keyword.getId());
		keywordDetail.setStartTime(keyword.getStartTime());
		keywordDetail.setEndTime(keyword.getEndTime());
		
		KeywordRank keywordRank = new KeywordRank();
		keywordRank.setKeywordId(keyword.getId());
		keywordRank.setStartTime(keyword.getStartTime());
		keywordRank.setEndTime(keyword.getEndTime());
		
		keyword = keywordDao.selectByPrimaryKey(keyword.getId());
		keyword.setLatestDetail(keywordDetailDao.queryLatestDetail(keywordDetail));
		keyword.setDetailList(keywordDetailDao.queryDetailList(keywordDetail));
		keyword.setRankList(keywordRankDao.queryRankList(keywordRank));
		return keyword;
	}
	
	@Override
	public Object queryKeywordList(Keyword keyword) {
		List<Keyword> keywordList = new ArrayList<Keyword>();
		KeywordDetail keywordDetail = null;
		KeywordRank keywordRank = null;
		Keyword existKeyword = null;
		
		List<Integer> keywordIdList = keywordDao.queryKeywordId(keyword);
		for(int i = 0;i < keywordIdList.size();i++){
			existKeyword = keywordDao.selectByPrimaryKey(keywordIdList.get(i));
			
			keywordDetail = new KeywordDetail();
			keywordDetail.setKeywordId(existKeyword.getId());
			keywordDetail.setStartTime(keyword.getStartTime());
			keywordDetail.setEndTime(keyword.getEndTime());
			
			keywordRank = new KeywordRank();
			keywordRank.setKeywordId(existKeyword.getId());
			keywordRank.setStartTime(keyword.getStartTime());
			keywordRank.setEndTime(keyword.getEndTime());
			
			existKeyword.setLatestDetail(keywordDetailDao.queryLatestDetail(keywordDetail));
			existKeyword.setDetailList(keywordDetailDao.queryDetailList(keywordDetail));
			existKeyword.setRankList(keywordRankDao.queryRankList(keywordRank));
			
			keywordList.add(existKeyword);
		}
		return keywordList;
	}

}
