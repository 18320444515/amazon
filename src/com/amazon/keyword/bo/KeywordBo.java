package com.amazon.keyword.bo;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import com.amazon.common.entity.Keyword;
import com.amazon.common.entity.KeywordAsin;
import com.amazon.common.entity.KeywordDetail;
import com.amazon.common.entity.KeywordFilter;
import com.amazon.common.entity.KeywordRank;
import com.amazon.common.util.LoadDataUtil;
import com.amazon.keyword.dao.IKeywordAsinDao;
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
	@Resource
	private IKeywordAsinDao keywordAsinDao;

	@Override
	public int txUpdateVolume(String rootName) {
		File dataDir = new File(rootName + "\\data\\volume");
		
		Workbook wb =null;
        Sheet sheet = null;
        Row row = null;
        
        Keyword keyword = new Keyword();
        Keyword existKeyword = new Keyword();
        KeywordAsin keywordAsin = null;
		KeywordAsin existKeywordAsin = null;
		Integer keywordAsinId = null;
		
        File[] files = dataDir.listFiles();
        File[] subFiles = null;
        
        for (File file : files) {
			if(!file.isDirectory()) continue;
			
			keywordAsin = new KeywordAsin();
			keywordAsin.setName(file.getName());
			existKeywordAsin = keywordAsinDao.selectKeywordAsin(keywordAsin);
        	if(existKeywordAsin != null){
        		keywordAsinId = existKeywordAsin.getId();
        	}else{
        		keywordAsinId = null;
        	}
        	
        	subFiles = file.listFiles();
        	for(File sFile : subFiles){
        		if(!LoadDataUtil.canFileUse(sFile)) continue;
    			
    			wb = LoadDataUtil.readExcel(sFile.getAbsolutePath());
    			if("error".equals(LoadDataUtil.changeFileName(sFile, "OK_" + sFile.getName()))) continue;
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
    	    	        	keyword.setAsinId(keywordAsinId);
    	    	        	existKeyword = keywordDao.selectKeyword(keyword);
    	    	        	
    	    	        	if(existKeyword == null) continue;
    	    	        	
        	        		existKeyword.setVolume((int)Float.parseFloat((String)LoadDataUtil.getCellFormatValue(row.getCell(1))));
    	    	        	keywordDao.updateByPrimaryKeySelective(existKeyword);
    	                }
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
		keywordDetail = keywordDetailDao.queryLatestDetail(keywordDetail);
		
		KeywordRank keywordRank = new KeywordRank();
		keywordRank.setKeywordId(keyword.getId());
		keywordRank = keywordRankDao.queryLatestRank(keywordRank);
		
		int dayFlag = keyword.getDayFlag();
		Long startTime = keyword.getStartTime();
		Long endTime = keyword.getEndTime();
		Long dayMilliseconds = (long) (24 * 60 * 60 * 1000);
		Long diffMilliseconds = null;
		
		if(dayFlag == 1){
			diffMilliseconds = dayMilliseconds * 7;
		}else if(dayFlag == 2){
			diffMilliseconds = dayMilliseconds * 14;
		}else if(dayFlag == 3){
			diffMilliseconds = dayMilliseconds * 30;
		}
		
		if(dayFlag > 0){
			endTime = keywordDetail.getCreateTime();
			startTime = endTime - diffMilliseconds;
		}
		keywordRank = new KeywordRank();
		keywordRank.setKeywordId(keyword.getId());
		keywordRank = keywordRankDao.queryLatestRank(keywordRank);
		if(keywordRank != null && endTime < keywordRank.getCreateTime()) endTime = keywordRank.getCreateTime();
		
		keywordRank = new KeywordRank();
		keywordRank.setKeywordId(keyword.getId());
		
		keywordDetail.setStartTime(startTime);
		keywordDetail.setEndTime(endTime);
		
		keywordRank.setStartTime(startTime);
		keywordRank.setEndTime(endTime);
		
		keyword = keywordDao.selectByPrimaryKey(keyword.getId());
		keyword.setStartTime(startTime);
		keyword.setEndTime(endTime);
		
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
		
		int dayFlag = keyword.getDayFlag();
		Long startTime = keyword.getStartTime();
		Long endTime = keyword.getEndTime();
		Long dayMilliseconds = (long) (24 * 60 * 60 * 1000);
		Long diffMilliseconds = null;
		
		if(dayFlag == 1){
			diffMilliseconds = dayMilliseconds * 7;
		}else if(dayFlag == 2){
			diffMilliseconds = dayMilliseconds * 14;
		}else if(dayFlag == 3){
			diffMilliseconds = dayMilliseconds * 30;
		}
		
		List<Integer> keywordIdList = keywordDao.queryKeywordId(keyword);
		for(int i = 0;i < keywordIdList.size();i++){
			existKeyword = keywordDao.selectByPrimaryKey(keywordIdList.get(i));
			
			keywordDetail = new KeywordDetail();
			keywordDetail.setKeywordId(existKeyword.getId());
			keywordDetail = keywordDetailDao.queryLatestDetail(keywordDetail);
			
			if(dayFlag > 0){
				endTime = keywordDetail.getCreateTime();
				startTime = endTime - diffMilliseconds;
			}
			keywordRank = new KeywordRank();
			keywordRank.setKeywordId(existKeyword.getId());
			keywordRank = keywordRankDao.queryLatestRank(keywordRank);
			if(keywordRank != null && endTime < keywordRank.getCreateTime()) endTime = keywordRank.getCreateTime();
			
			keywordRank = new KeywordRank();
			keywordRank.setKeywordId(existKeyword.getId());
			
			keywordDetail.setStartTime(startTime);
			keywordDetail.setEndTime(endTime);
			
			keywordRank.setStartTime(startTime);
			keywordRank.setEndTime(endTime);
			
			existKeyword.setStartTime(startTime);
			existKeyword.setEndTime(endTime);
			
			existKeyword.setLatestDetail(keywordDetail);
			existKeyword.setDetailList(keywordDetailDao.queryDetailList(keywordDetail));
			existKeyword.setRankList(keywordRankDao.queryRankList(keywordRank));
			
			keywordList.add(existKeyword);
		}
		return keywordList;
	}

	@Override
	public Object txDeleteAllData() {
		keywordDao.deleteAllRecord();
		return "ok";
	}

	@Override
	public int setGroup(Keyword keyword) {
		return keywordDao.updateByPrimaryKeySelective(keyword);
	}

	@Override
	public Object queryKeywordFilterList(KeywordFilter keywordFilter) {
		List<Keyword> keywordList = new ArrayList<Keyword>();
		KeywordDetail keywordDetail = null;
		KeywordRank keywordRank = null;
		Keyword existKeyword = null;
		
		int fdayFlag = keywordFilter.getFdayFlag();
		Long startTime = keywordFilter.getFstartTime();
		Long endTime = keywordFilter.getFendTime();
		Long dayMilliseconds = (long) (24 * 60 * 60 * 1000);
		Long diffMilliseconds = null;
		
		if(fdayFlag == 1){
			diffMilliseconds = dayMilliseconds * 7;
			keywordFilter.setFdays(7);
		}else if(fdayFlag == 2){
			diffMilliseconds = dayMilliseconds * 14;
			keywordFilter.setFdays(14);
		}else if(fdayFlag == 3){
			diffMilliseconds = dayMilliseconds * 30;
			keywordFilter.setFdays(30);
		}
		
//		System.out.println(fdayFlag + "--" + new Date(startTime) + "--" + new Date(endTime));
		
		Integer ftypeFlag = keywordFilter.getFtypeFlag();
		if(ftypeFlag != null){
			if(ftypeFlag == 1){
				keywordFilter.setFmatchType("EXACT");
			}else if(ftypeFlag == 2){
				keywordFilter.setFmatchType("BROAD");
			}
		}
		
		if(keywordFilter.getFkeyword() != null)
		keywordFilter.setFkeyword("%" + keywordFilter.getFkeyword() + "%");
		
//		return keywordDao.queryFilterKeyword(keywordFilter);
		keywordList = keywordDao.queryFilterKeyword(keywordFilter);
		for(int i = 0;i < keywordList.size();i++){
			existKeyword = keywordList.get(i);
			
			keywordDetail = new KeywordDetail();
			keywordDetail.setKeywordId(existKeyword.getId());
			keywordDetail = keywordDetailDao.queryLatestDetail(keywordDetail);
			
			if(fdayFlag > 0){
				endTime = keywordDetail.getCreateTime();
				startTime = endTime - diffMilliseconds;
			}
			keywordRank = new KeywordRank();
			keywordRank.setKeywordId(existKeyword.getId());
			keywordRank = keywordRankDao.queryLatestRank(keywordRank);
			if(keywordRank != null && endTime < keywordRank.getCreateTime()) endTime = keywordRank.getCreateTime();
			
			keywordRank = new KeywordRank();
			keywordRank.setKeywordId(existKeyword.getId());
			
			keywordDetail.setStartTime(startTime);
			keywordDetail.setEndTime(endTime);
			
			keywordRank.setStartTime(startTime);
			keywordRank.setEndTime(endTime);
			
			existKeyword.setStartTime(startTime);
			existKeyword.setEndTime(endTime);
			
			existKeyword.setLatestDetail(keywordDetail);
			existKeyword.setDetailList(keywordDetailDao.queryDetailList(keywordDetail));
			existKeyword.setRankList(keywordRankDao.queryRankList(keywordRank));
			
//			keywordList.add(existKeyword);
		}
		return keywordList;
	}

}
